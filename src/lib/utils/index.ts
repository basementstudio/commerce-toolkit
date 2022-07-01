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

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

export const formatPrice = (amount: string) => {
  return formatter.format(parseFloat(amount ?? '0'))
}
