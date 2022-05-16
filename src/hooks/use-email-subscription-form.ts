import * as React from 'react'

import { StandardStorefrontClient } from '../lib/shopify/storefront'
import { formatError, generatePassword } from '../lib/utils'

type EmailInputProps = {
  placeholder: string
  autoComplete: string
  type: string
  required: boolean
  name: string
}

export const useEmailSubscriptionForm = ({
  client,
  emailInputProps: emailInputPropsOverride
}: {
  client: StandardStorefrontClient
  emailInputProps?: Partial<EmailInputProps>
}) => {
  const [status, setStatus] = React.useState<
    'submitting' | 'error' | 'success'
  >()
  const [error, setError] = React.useState<Error>()

  const emailInputProps = React.useMemo(() => {
    return {
      placeholder: 'Enter your email to get notified.',
      autoComplete: 'email',
      type: 'email',
      required: true,
      name: 'email',
      ...emailInputPropsOverride
    }
  }, [emailInputPropsOverride])

  const onSubmit: React.FormEventHandler<HTMLFormElement> = React.useCallback(
    async (e) => {
      e.preventDefault()
      const email = e.currentTarget.email.value
      setStatus('submitting')

      try {
        const { customerCreate } = await client._CreateCustomer({
          input: { email, password: generatePassword() }
        })
        if (customerCreate?.customer?.email) {
          setStatus('success')
        } else if (customerCreate?.customerUserErrors[0].message) {
          throw new Error(customerCreate?.customerUserErrors[0].message)
        } else {
          throw new Error('An unknown error occurred.')
        }
      } catch (error) {
        setStatus('error')
        setError(formatError(error))
      }
    },
    [client]
  )

  return { emailInputProps, onSubmit, status, error }
}
