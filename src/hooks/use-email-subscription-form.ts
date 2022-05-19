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
  emailInputProps: emailInputPropsOverride,
  resetOnSuccess
}: {
  submit: (email: string) => void | Promise<void>
  emailInputProps?: Partial<EmailInputProps>
  resetOnSuccess?: boolean
}) => {
  const [status, setStatus] = React.useState<
    'submitting' | 'error' | 'success'
  >()
  const [error, setError] = React.useState<string>()

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
      const form = e.currentTarget
      const email = form.email.value
      setStatus('submitting')

      try {
        await submit(email)
        setStatus('success')
        if (resetOnSuccess) form.reset()
      } catch (error) {
        setStatus('error')
        setError(formatError(error).message)
      }
    },
    [submit, resetOnSuccess]
  )

  return { emailInputProps, onSubmit, status, setStatus, error }
}
