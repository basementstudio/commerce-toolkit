export type LineItem = {
  merchandiseId: string
  quantity: number
  attributes?: { key: string; value: string }[]
}

export type UserError = {
  code?: string | null | undefined
  field?: string[] | null | undefined
  message: string
}

export type BarebonesCart = { id: string }

export type NoInfer<T> = [T][T extends any ? 0 : never]

export type OptionalPromise<T> = Promise<T> | T

// from type-fest
export type OmitIndexSignature<ObjectType> = {
  [KeyType in keyof ObjectType as {} extends Record<KeyType, unknown>
    ? never
    : KeyType]: ObjectType[KeyType]
}

type STOREFRONT_EVENT_MAP<Cart extends BarebonesCart> = {
  fetchCartError: Error
  fetchCartSuccess: Cart | null | undefined
  createCartError: Error
  createCartSuccess: Cart | null | undefined
  createCartWithLinesSuccess: Cart | null | undefined
  addLineItemError: Error
  addLineItemSuccess: Cart | null | undefined
  updateLineItemError: Error
  updateLineItemSuccess: Cart | null | undefined
  removeLineItemError: Error
  removeLineItemSuccess: Cart | null | undefined
}

export type MutationError<Cart extends BarebonesCart> = {
  type: keyof Pick<
    STOREFRONT_EVENT_MAP<Cart>,
    | 'addLineItemError'
    | 'fetchCartError'
    | 'createCartError'
    | 'removeLineItemError'
    | 'updateLineItemError'
  >
  error: Error
}

export type MutationSuccess<Cart extends BarebonesCart> = {
  type: keyof Pick<
    STOREFRONT_EVENT_MAP<Cart>,
    | 'addLineItemSuccess'
    | 'fetchCartSuccess'
    | 'createCartSuccess'
    | 'createCartWithLinesSuccess'
    | 'removeLineItemSuccess'
    | 'updateLineItemSuccess'
  >
  data: Cart | null | undefined
}
