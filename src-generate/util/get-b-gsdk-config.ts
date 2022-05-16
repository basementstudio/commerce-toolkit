import fs from 'fs'
import path from 'path'
import { z } from 'zod'

const configSchema = z.object({
  domain: z.string(),
  accessToken: z.string()
})

export type ReactDropifyConfig = z.infer<typeof configSchema>

export const getBGsdkConfig = (directoryPath: string) => {
  const bgsdkConfigJSPath = path.join(directoryPath, 'config.js')

  let rawConfig = {}
  if (fs.existsSync(bgsdkConfigJSPath)) {
    rawConfig = require(bgsdkConfigJSPath)
  } else {
    throw new Error(`Could not find config.js in ${directoryPath}`)
  }
  const parsedConfig = configSchema.parse(rawConfig)
  return parsedConfig
}
