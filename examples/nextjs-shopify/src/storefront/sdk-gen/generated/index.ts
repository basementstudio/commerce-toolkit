/* eslint-disable */

// @ts-nocheck
import type {
  QueryRootGenqlSelection,
  QueryRoot,
  MutationGenqlSelection,
  Mutation,
} from './schema'
import {
  linkTypeMap,
  createClient as createClientOriginal,
  generateGraphqlOperation,
  type FieldsSelection,
  type GraphqlOperation,
  type ClientOptions,
  GenqlError,
} from './runtime'
export type { FieldsSelection } from './runtime'
export { GenqlError }

import types from './types'
export * from './schema'
const typeMap = linkTypeMap(types as any)

export interface Client {
  query<R extends QueryRootGenqlSelection>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<QueryRoot, R>>

  mutation<R extends MutationGenqlSelection>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Mutation, R>>
}

export const createClient = function (options?: ClientOptions): Client {
  return createClientOriginal({
    url: 'https://react-dropify.myshopify.com/api/2023-01/graphql',

    ...options,
    queryRoot: typeMap.Query!,
    mutationRoot: typeMap.Mutation!,
    subscriptionRoot: typeMap.Subscription!,
  }) as any
}

export const everything = {
  __scalar: true,
}

export type QueryResult<fields extends QueryRootGenqlSelection> =
  FieldsSelection<QueryRoot, fields>
export const generateQueryOp: (
  fields: QueryRootGenqlSelection & { __name?: string },
) => GraphqlOperation = function (fields) {
  return generateGraphqlOperation('query', typeMap.Query!, fields as any)
}

export type MutationResult<fields extends MutationGenqlSelection> =
  FieldsSelection<Mutation, fields>
export const generateMutationOp: (
  fields: MutationGenqlSelection & { __name?: string },
) => GraphqlOperation = function (fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation!, fields as any)
}

import type { Config } from '@bsmnt/sdk-gen'

type CreateSDKParams = Omit<Config, 'headers'> & Omit<ClientOptions, 'url'>

export const createSdk = function (params: CreateSDKParams) {
  return createClient({
    ...params,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...params.headers
    },
    url: params.endpoint
  })
}
