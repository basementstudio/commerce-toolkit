import type { UserError } from '../types'

export function surfaceUserErrors(
  userErrors: UserError[] | undefined,
  silenceUserErrors = false
): asserts userErrors is undefined {
  if (!userErrors) return
  if (!silenceUserErrors && userErrors.length > 0) {
    throw new Error(userErrors.map((e) => e.message).join(', '))
  }
}

export function surfaceMutationErrors<D>(
  data: D | null | undefined,
  userErrors: UserError[] | undefined,
  silenceUserErrors = false
): asserts data is D {
  if (!data) {
    surfaceUserErrors(userErrors, silenceUserErrors)
    throw new Error('Mutation failed')
  }
}
