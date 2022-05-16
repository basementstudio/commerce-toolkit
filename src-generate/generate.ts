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

  if (!bgsdkDirectoryPath) {
    throw new Error(
      'Make sure you have a react-dropify directory in the root of your project.'
    )
  }

  const config = getBGsdkConfig(bgsdkDirectoryPath)

  const endpoint = `https://${config.domain}/api/${API_VERSION}/graphql`

  const [schemaCodegen, sdkCodegen] = await generate(
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
            bgsdkDirectoryPath + '/*.{gql,graphql}'
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

  createDirIfDoesNotExist(`${bgsdkDirectoryPath}/generated`)
  fs.writeFileSync(
    path.join(bgsdkDirectoryPath, 'generated/graphql.schema.json'),
    schemaCodegen.content
  )
  fs.writeFileSync(
    path.join(bgsdkDirectoryPath, 'generated/index.ts'),
    sdkCodegen.content
  )
  const skdFilePath = path.join(bgsdkDirectoryPath, 'sdk.ts')
  if (!fs.existsSync(skdFilePath)) {
    fs.writeFileSync(skdFilePath, sdkFileContents)
  }

  const eslintignorePath = path.join(process.cwd(), '.eslintignore')
  if (fs.existsSync(eslintignorePath)) {
    const eslintignore = fs.readFileSync(eslintignorePath, 'utf8')
    if (!eslintignore.includes('generated')) {
      fs.appendFileSync(eslintignorePath, '\ngenerated/')
      console.log('Added "generated/" to .eslintignore')
    }
  }

  console.log('Done ✨')
}

function createDirIfDoesNotExist(p: string) {
  if (!fs.existsSync(p)) {
    fs.mkdirSync(p)
  }
}

const sdkFileContents = `import { GraphQLClient } from 'graphql-request'
import { getSdk } from './generated'

export type CreateReactDropifySdkParams = {
  domain: string
  accessToken: string
}

export const createReactDropifySdk = ({ domain, accessToken }: CreateReactDropifySdkParams) => {
  const endpoint = \`https://\${config.domain}/api/${API_VERSION}/graphql\`
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'x-shopify-storefront-access-token': \`\${config.accessToken}\`
    }
  })

  const generatedSdk = getSdk(graphQLClient)

  return { ...generatedSdk, client: graphQLClient }
}

// You can then create the sdk and export it from here.
// Like this:
// export const reactDropifySdk = createReactDropifySdk({ })

`
