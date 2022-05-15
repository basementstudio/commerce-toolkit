import { GraphQLClient } from 'graphql-request'
import type * as Dom from 'graphql-request/dist/types.dom'

import { getSdk } from './generated'

export type StorefrontClientProps = { endpoint: string; accessToken: string }

export const createStorefrontClient = ({
  endpoint,
  accessToken
}: StorefrontClientProps) => {
  const graphqlClient = new GraphQLClient(endpoint, {
    headers: {
      'x-shopify-storefront-access-token': accessToken,
      accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  const generatedSdk = getSdk(graphqlClient)

  return {
    ...generatedSdk,
    Request: async (
      query: string,
      variables?: Record<string, any>,
      requestHeaders?: Dom.RequestInit['headers']
    ) => graphqlClient.request(query, variables, requestHeaders)
  }
}
