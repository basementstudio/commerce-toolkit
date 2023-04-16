#!/usr/bin/env node
/* eslint-disable no-console */

import arg from 'arg'

import { main } from './generate'
import { formatError } from './util/format-error'

// Show usage and exit with code
function help(code: number) {
  console.log(`
  Usage:
  
  sdk-gen generate [--dir=<dir>]

  Options:

    --dir, -d  The directory where your graphql files are located. Defaults to "sdk-gen".
  
  `)
  process.exit(code)
}

// Get CLI arguments
let [, , cmd] = process.argv

if (!cmd || cmd.startsWith('-')) {
  cmd = 'generate'
}

const args = arg(
  {
    // types
    '--dir': String,
    '--verbose': Boolean,
    // aliases
    '-d': '--dir'
  },
  { permissive: true }
)

// CLI commands
const cmds: { [key: string]: (args: Args) => Promise<void> } = {
  generate: main
}

// Run CLI
try {
  // Run command or show usage for unknown command
  cmds[cmd]
    ? cmds[cmd]?.(args)
        .then(() => {
          process.exit(0)
        })
        .catch((error) => {
          console.error(formatError(error))
          process.exit(1)
        })
    : help(0)
} catch (e) {
  console.error(formatError(e).message)
  process.exit(1)
}

export type Args = typeof args
