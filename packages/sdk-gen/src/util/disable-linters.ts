import fs from 'fs'
import path from 'path'

export function addToEslintIgnore(line: string) {
  const eslintIgnorePath = path.join(process.cwd(), '.eslintignore')

  if (!fs.existsSync(eslintIgnorePath)) {
    fs.writeFileSync(eslintIgnorePath, line)
  } else {
    const eslintIgnoreContent = fs.readFileSync(eslintIgnorePath, 'utf-8')

    // check if line is already present
    if (eslintIgnoreContent.includes(line)) return
    fs.appendFileSync(eslintIgnorePath, `\n${line}`)
  }
}

export function appendEslintDisableToEachFileInDirectory(
  directoryPath: string
) {
  fs.readdirSync(directoryPath).forEach((fileOrDirName) => {
    // check if is directory
    if (fs.lstatSync(path.join(directoryPath, fileOrDirName)).isDirectory()) {
      appendEslintDisableToEachFileInDirectory(
        path.join(directoryPath, fileOrDirName)
      )
      return
    }

    const isTs = fileOrDirName.endsWith('.ts') || fileOrDirName.endsWith('.tsx')
    const isJs = fileOrDirName.endsWith('.js') || fileOrDirName.endsWith('.jsx')

    const filePath = path.join(directoryPath, fileOrDirName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    let toAppend = ''
    // check if first line of file already has eslint disable
    if ((isTs || isJs) && !fileContent.startsWith('/* eslint-disable */')) {
      toAppend += `/* eslint-disable */\n`
    }
    if (
      isTs &&
      !fileContent.startsWith('// @ts-nocheck') &&
      !fileContent.startsWith('//@ts-nocheck')
    ) {
      toAppend += `// @ts-nocheck\n`
    }

    if (toAppend) {
      fs.writeFileSync(filePath, `${toAppend}\n${fileContent}`)
    }
  })
}
