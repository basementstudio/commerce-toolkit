export const makeAdminAPIOrigin = ({
  apiKey,
  adminPassword,
  domain
}: {
  endpoint: string
  apiKey: string
  adminPassword: string
  domain: string
}) => `https://${apiKey}:${adminPassword}@${domain}`
