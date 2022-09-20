export const getAdminAPIGraphQLConfig = ({
  domain,
  adminPassword,
  version // should we default to '2022-07'?
}: {
  domain: string
  adminPassword: string
  version: string
}) => {
  return {
    endpoint: `https://${domain}/admin/api/${version}/graphql.json`,
    headers: { 'X-Shopify-Access-Token': adminPassword }
  }
}
