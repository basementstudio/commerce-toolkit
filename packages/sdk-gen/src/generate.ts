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
            // defaultGqlPath + "/**/*.{gql,graphql}",
          ],
          plugins: [
            "typescript",
            "typescript-operations",
            "typescript-graphql-request",
          ],
        },
        [__dirname + "/generated/graphql.schema.json"]: {
          plugins: ["introspection"],
          config: {
            documentMode: "documentNode",
            withHooks: true,
            gqlImport: "graphql-request#gql",
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
    "/* eslint-disable */\n" + sdkCodegen.content + "\n" + extraGenerated
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

export const createSdk = ({
  endpoint,
  headers
}: Config) => {
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    }
  })

  const generatedSdk = getSdk(graphQLClient)

  return { ...generatedSdk, client: graphQLClient }
}`;

const sdkFileContents = `import config from './config'
import { createSdk } from './generated'

export const bsmntSdk = createSdk(config)
`;
