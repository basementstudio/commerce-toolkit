export const makeAdminApiOrigin = ({
  apiKey,
  adminPassword,
  domain
}: {
  apiKey: string
  adminPassword: string
  domain: string
}) => `https://${apiKey}:${adminPassword}@${domain}`
