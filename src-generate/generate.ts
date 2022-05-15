/* eslint-disable no-console */
import { generate } from '@graphql-codegen/cli'
import fs from 'fs'
import path from 'path'

import { Args } from '.'
import { getBGsdkConfig } from './util/get-b-gsdk-config'
import { getBGsdkDirectoryPath } from './util/get-b-gsdk-directory-path'

export async function main(args: Args) {
  const bgsdkDirectoryPath = getBGsdkDirectoryPath(process.cwd(), args['--dir'])

  if (!bgsdkDirectoryPath) {
    throw new Error(
      'Make sure you have a b-gsdk directory in the root of your project.'
    )
  }

  const config = getBGsdkConfig(bgsdkDirectoryPath)

  const [schemaCodegen, sdkCodegen] = await generate(
    {
      schema: {
        [config.endpoint]: {
          headers: config.headers
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

  const gitignorePath = path.join(process.cwd(), '.gitignore')
  if (fs.existsSync(gitignorePath)) {
    const gitignore = fs.readFileSync(gitignorePath, 'utf8')
    if (!gitignore.includes('generated')) {
      fs.appendFileSync(gitignorePath, '\ngenerated/')
      console.log('Added "generated/" to .gitignore')
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

export type CreateBGsdkClientParams = {
  endpoint: string
  headers?: string[][] | Record<string, string> | Headers
}

export const createBGsdk = ({ endpoint, headers }: CreateBGsdkClientParams) => {
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    }
  })

  const generatedSdk = getSdk(graphQLClient)

  return { ...generatedSdk, rawClient: graphQLClient }
}

// You can then create the sdk with the endpoint and headers set up and export it.
// For example like this:
// export const bgsdk = createBGsdk({ })

`
