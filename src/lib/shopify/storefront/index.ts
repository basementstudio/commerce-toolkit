import { GraphQLClient } from 'graphql-request'

import { getSdk } from './generated'

export type StandardStorefrontClientProps = {
  domain: string
  accessToken: string
}

export const createStandardStorefrontClient = ({
  domain,
  accessToken
}: StandardStorefrontClientProps) => {
  const endpoint = `https://${domain}/api/2023-04/graphql`
  const graphqlClient = new GraphQLClient(endpoint, {
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'x-shopify-storefront-access-token': accessToken
    }
  })
  const generatedSdk = getSdk(graphqlClient)

  return {
    ...generatedSdk,
    client: graphqlClient
  }
}

export type StandardStorefrontClient = ReturnType<
  typeof createStandardStorefrontClient
>
