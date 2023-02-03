/* eslint-disable no-console */
require("dotenv").config();
import { generate } from "@graphql-codegen/cli";
import fs from "fs";
import path from "path";

import { Args } from ".";
import { getBGsdkConfig } from "./util/get-b-gsdk-config";
import { getBGsdkDirectoryPath } from "./util/get-b-gsdk-directory-path";

export const DEFAULT_DIR_NAME = "sdk-gen";

export async function main(args: Args) {
  const bgsdkDirectoryPath = getBGsdkDirectoryPath(
    process.cwd(),
    args["--dir"]
  );

  if (!bgsdkDirectoryPath) {
    throw new Error(
      `Make sure you have a "${DEFAULT_DIR_NAME}" directory in the root of your project.`
    );
  }

  const config = getBGsdkConfig(bgsdkDirectoryPath);

  const codegenOutput = await generate(
    {
      schema: {
        [config.endpoint]: {
          headers: config.headers,
        },
      },
      generates: {
        [__dirname + "/generated/index.ts"]: {
          documents: [
            bgsdkDirectoryPath + "/**/*.{gql,graphql}",
            bgsdkDirectoryPath + "/*.{gql,graphql}",
          ],
          plugins: [
            "typescript",
            "typescript-operations",
            "typescript-generic-sdk",
          ],
          config: {
            dedupeFragments: true,
            useTypeImports: true,
            documentMode: "string",
            ...config.parameters
          },
        },
        [__dirname + "/generated/graphql.schema.json"]: {
          plugins: ["introspection"],
          config: {
            documentMode: "documentNode",
            withHooks: true,
          },
        },
      },
    },
    false
  );

  const schemaCodegen = codegenOutput[0].content.startsWith("{")
    ? codegenOutput[0]
    : codegenOutput[1];
  const sdkCodegen = codegenOutput[0].content.startsWith("{")
    ? codegenOutput[1]
    : codegenOutput[0];

  createDirIfDoesNotExist(`${bgsdkDirectoryPath}/generated`);
  fs.writeFileSync(
    path.join(bgsdkDirectoryPath, "generated/graphql.schema.json"),
    schemaCodegen.content
  );
  fs.writeFileSync(
    path.join(bgsdkDirectoryPath, "generated/index.ts"),
    "/* eslint-disable */\n" +
      "// @ts-nocheck\n" +
      sdkCodegen.content +
      "\n" +
      extraGenerated
  );
  const skdFilePath = path.join(bgsdkDirectoryPath, "sdk.ts");
  if (!fs.existsSync(skdFilePath)) {
    fs.writeFileSync(skdFilePath, sdkFileContents);
  }

  console.log("Done ✨");
}

function createDirIfDoesNotExist(p: string) {
  if (!fs.existsSync(p)) {
    fs.mkdirSync(p);
  }
}

const extraGenerated = `import type { Config } from "@bsmnt/sdk-gen";

const fetch = globalThis.fetch || require("isomorphic-unfetch");

type ClientOptions = {
  noThrowOnErrors?: boolean;
};

export const createSdk = ({
  endpoint,
  headers,
  clientOptions,
}: Config & { clientOptions?: ClientOptions }) => {
  const client: Requester = async (doc, vars, options?: ClientOptions) => {
    const allClientOptions = { ...clientOptions, ...options };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify({
        query: doc,
        variables: vars,
      }),
    });
    const json = await response.json();
    const { errors, data } = json;

    const hasErrors = errors && Array.isArray(errors) && errors.length > 0;

    if (hasErrors && !allClientOptions?.noThrowOnErrors) {
      const message = \`GraphQL fetch errors:

      \${errors.map((e: any, idx: number) => \`\${idx}. \${e.message}\`).join("\\n")}
      
      ——————

      Doc:
      \${doc}
      
      Vars:
      \${vars}
      \`;

      throw new Error(message);
    }

    return { ...data, ...(hasErrors ? { errors } : {}) };
  };

  const generatedSdk = getSdk(client);

  return { ...generatedSdk, client };
};
`;

const sdkFileContents = `import config from './config'
import { createSdk } from './generated'

export const bsmntSdk = createSdk(config)
`;
