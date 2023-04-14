import { generate } from '@genql/cli'
import fs from 'fs'
import path from 'path'

import { Args } from '.'
import { getBGsdkConfig } from './util/get-b-gsdk-config'
import { getBGsdkDirectoryPath } from './util/get-b-gsdk-directory-path'

export async function main(args: Args) {
  console.log('Generating...')

  const bgsdkDirectoryPath = getBGsdkDirectoryPath(process.cwd(), args['--dir'])
  const config = getBGsdkConfig(bgsdkDirectoryPath)

  await generate({
    endpoint: config.endpoint,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...config.headers
    },
    output: path.join(bgsdkDirectoryPath, 'generated'),
    verbose: args['--verbose'] ?? false
  })

  // extra generated
  fs.appendFileSync(
    path.join(bgsdkDirectoryPath, 'generated', 'index.ts'),
    extraGenerated
  )

  // sdk file
  const skdFilePath = path.join(bgsdkDirectoryPath, 'sdk.ts')
  if (!fs.existsSync(skdFilePath)) {
    fs.writeFileSync(skdFilePath, sdkFileContents)
  }

  console.log('Generated ✨')
}

const extraGenerated = `
import type { Config } from '@bsmnt/sdk-gen'

type CreateSDKParams = Omit<Config, 'headers'> & Omit<ClientOptions, 'url'>

export const createSdk = function (params: CreateSDKParams) {
  return createClient({
    ...params,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...params.headers
    },
    url: params.endpoint
  })
}
`

const sdkFileContents = `import config from './config'
import { createSdk } from './generated'

export const bsmntSdk = createSdk(config)
`
