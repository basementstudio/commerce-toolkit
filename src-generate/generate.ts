/* eslint-disable no-console */
import { generate } from '@graphql-codegen/cli'
import fs from 'fs'
import path from 'path'

import { Args } from '.'
import { getBGsdkConfig } from './util/get-b-gsdk-config'
import { getBGsdkDirectoryPath } from './util/get-b-gsdk-directory-path'

const API_VERSION = '2021-10'

export async function main(args: Args) {
  const bgsdkDirectoryPath = getBGsdkDirectoryPath(process.cwd(), args['--dir'])
  const defaultGqlPath = path.join(
    process.cwd(),
    'node_modules',
    'react-dropify',
    'default-gql'
  )

  if (!bgsdkDirectoryPath) {
    throw new Error(
      'Make sure you have a react-dropify directory in the root of your project.'
    )
  }

  const config = getBGsdkConfig(bgsdkDirectoryPath)

  const endpoint = `https://${config.domain}/api/${API_VERSION}/graphql`

  const codegenOutput = await generate(
    {
      schema: {
        [endpoint]: {
          headers: {
            'x-shopify-storefront-access-token': config.accessToken
          }
        }
      },
      generates: {
        [__dirname + '/generated/index.ts']: {
          documents: [
            bgsdkDirectoryPath + '/**/*.{gql,graphql}',
            bgsdkDirectoryPath + '/*.{gql,graphql}',
            defaultGqlPath + '/**/*.{gql,graphql}'
          ],
          plugins: [
            'typescript',
            'typescript-operations',
            'typescript-graphql-request'
          ]
        },
        [__dirname + '/generated/graphql.schema.json']: {
          plugins: ['introspection'],
          config: {
            documentMode: 'documentNode',
            withHooks: true
          }
        }
      }
    },
    false
  )

  const schemaCodegen = codegenOutput[0].content.startsWith('{')
    ? codegenOutput[0]
    : codegenOutput[1]
  const sdkCodegen = codegenOutput[0].content.startsWith('{')
    ? codegenOutput[1]
    : codegenOutput[0]

  createDirIfDoesNotExist(`${bgsdkDirectoryPath}/generated`)
  fs.writeFileSync(
    path.join(bgsdkDirectoryPath, 'generated/graphql.schema.json'),
    schemaCodegen.content
  )
  fs.writeFileSync(
    path.join(bgsdkDirectoryPath, 'generated/index.ts'),
    '/* eslint-disable */\n' + sdkCodegen.content + '\n' + extraGenerated
  )
  const skdFilePath = path.join(bgsdkDirectoryPath, 'sdk.ts')
  if (!fs.existsSync(skdFilePath)) {
    fs.writeFileSync(skdFilePath, sdkFileContents)
  }

  console.log('Done ✨')
}

function createDirIfDoesNotExist(p: string) {
  if (!fs.existsSync(p)) {
    fs.mkdirSync(p)
  }
}

const extraGenerated = `export type CreateReactDropifySdkParams = {
  domain: string
  accessToken: string
}

export const createReactDropifySdk = ({
  domain,
  accessToken
}: CreateReactDropifySdkParams) => {
  const endpoint = \`https://\${domain}/api/${API_VERSION}/graphql\`
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'x-shopify-storefront-access-token': accessToken
    }
  })

  const generatedSdk = getSdk(graphQLClient)

  return { ...generatedSdk, client: graphQLClient }
}`

const sdkFileContents = `import config from './config'
import { createReactDropifySdk } from './generated'

export const reactDropifySdk = createReactDropifySdk(config)
`
