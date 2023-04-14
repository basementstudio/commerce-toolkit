import fs from 'fs'
import path from 'path'

export const getBGsdkDirectoryPath = (cwd: string, customDir?: string) => {
  const schemaPath = path.join(cwd, customDir || 'sdk-gen')
  if (fs.existsSync(schemaPath)) {
    return schemaPath
  }

  throw new Error(`Make sure you have the sdk-gen config at "${schemaPath}".`)
}
