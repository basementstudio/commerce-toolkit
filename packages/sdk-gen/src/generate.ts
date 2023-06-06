import { generate } from '@genql/cli'
import fs from 'fs'
import path from 'path'

import { Args } from '.'
import { getBGsdkConfig } from './util/get-b-gsdk-config'
import { getBGsdkDirectoryPath } from './util/get-b-gsdk-directory-path'
import {
  addToEslintIgnore,
  appendEslintDisableToEachFileInDirectory
} from './util/disable-linters'

export async function main(args: Args) {
  console.log('Generating...')

  const dir = args['--dir'] || 'sdk-gen'

  const bgsdkDirectoryPath = getBGsdkDirectoryPath(process.cwd(), dir)
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

  const generatedMainExportPath = path.join(
    bgsdkDirectoryPath,
    'generated',
    'index.ts'
  )

  // extra generated
  fs.appendFileSync(generatedMainExportPath, extraGenerated)

  try {
    // add eslint disable and ts nocheck at the beginning of each generated file
    appendEslintDisableToEachFileInDirectory(
      path.join(bgsdkDirectoryPath, 'generated')
    )
  } catch (error) {
    console.log(
      'failed to eslint-disable to generated files, trying to add to eslintignore.'
    )
    try {
      // add to eslintignore
      addToEslintIgnore(path.join(dir, 'generated'))
    } catch (error) {
      console.log('failed to add to eslintignore. skipping...')
    }
  }

  // sdk file
  const skdFilePath = path.join(bgsdkDirectoryPath, 'sdk.ts')
  if (!fs.existsSync(skdFilePath)) {
    fs.writeFileSync(skdFilePath, sdkFileContents)
  }

  // some misc fixes
  // replace line 18 with `} from './runtime/index'`
  const schemaFileContents = fs.readFileSync(generatedMainExportPath, 'utf-8')
  const lines = schemaFileContents.split('\n')
  lines[17] = "} from './runtime/index'"
  // remove line 19
  lines.splice(18, 1)
  fs.writeFileSync(generatedMainExportPath, lines.join('\n'))

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

const topLevelAppend = `/* eslint-disable */
// @ts-nocheck
`
