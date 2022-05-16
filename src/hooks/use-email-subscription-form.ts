import * as React from 'react'

import { formatError } from '../lib/utils'

type EmailInputProps = {
  placeholder: string
  autoComplete: string
  type: string
  required: boolean
  name: string
}

export const useEmailSubscriptionForm = ({
  submit,
  emailInputProps: emailInputPropsOverride
}: {
  submit: (email: string) => void | Promise<void>
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
        await submit(email)
      } catch (error) {
        setStatus('error')
        setError(formatError(error))
      }
    },
    [submit]
  )

  return { emailInputProps, onSubmit, status, error }
}
