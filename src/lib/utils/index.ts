import { isClient } from '../constants'

export const formatError = (error: unknown): Error => {
  if (error instanceof Error) {
    return error
  }

  if (typeof error === 'string') {
    return new Error(error)
  }

  if (typeof error === 'object') {
    return new Error(JSON.stringify(error, null, 2))
  }

  return new Error(`Unknown error: ${error}`)
}

export const isApiSupported = (api: string) => isClient && api in window

export const generatePassword = (
  length = 20,
  charlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
) => {
  if (isApiSupported('crypto')) {
    return Array.from(crypto.getRandomValues(new Uint32Array(length)))
      .map((x) => charlist[x % charlist.length])
      .join('')
  } else {
    return Array.from(
      { length },
      () => charlist[Math.floor(Math.random() * charlist.length)]
    ).join('')
  }
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

export const formatPrice = (amount: string) => {
  return formatter.format(parseFloat(amount))
}
