import fs from 'fs'
import path from 'path'

export const getBGsdkDirectoryPath = (cwd: string, customDir?: string) => {
  const schemaPath = path.join(cwd, customDir || 'react-dropify')
  if (fs.existsSync(schemaPath)) {
    return schemaPath
  }

  return null
}
