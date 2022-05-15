import * as React from 'react'

import { formatError } from '../utils'

export const getAdminEndpoint = (endpoint: string) =>
  `https://${process.env.SHOPIFY_ADMIN_API_KEY}:${process.env.SHOPIFY_ADMIN_PASSWORD}@${process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN}${endpoint}`

const createCustomerWithEmail = async (email: string) => {
  const res = await fetch(`/api/customer`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ email: email })
  })

  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.error.message)
  }
  return data.message
}

const useEmailSubscriptionForm = () => {
  const [email, setEmail] = React.useState('')
  const [status, setStatus] = React.useState<
    'submitting' | 'error' | 'success'
  >()
  const [message, setMessage] = React.useState<React.ReactNode | undefined>()

  const emailInputProps = {
    placeholder: 'Enter your email to stay updated',
    autoComplete: 'email',
    type: 'email',
    required: true
  }

  const onSubmit = React.useMemo(() => {
    const handleSubmit = (cb: (email: string) => Promise<void>) => {
      if (email && typeof email === 'string') cb(email)
    }

    return handleSubmit(async (data) => {
      setStatus('submitting')
      setMessage(undefined)
      try {
        const _message = await createCustomerWithEmail(data)
        setStatus('success')
        setMessage(_message)
        setEmail('')
      } catch (error) {
        setStatus('error')
        setMessage(formatError(error).message)
      }
    })
  }, [email, setEmail])

  return { emailInputProps, onSubmit, status, message }
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

export const formatPrice = (amount: string) => {
  return formatter.format(parseFloat(amount))
}

export { createCustomerWithEmail, useEmailSubscriptionForm }
