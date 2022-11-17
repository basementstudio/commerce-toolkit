import EventEmitter from 'events'
import { BarebonesCart } from './types'

type EventMap = Record<string, any>

type EventKey<T extends EventMap> = string & keyof T
type EventReceiver<T> = (params: T) => void

interface Emitter<T extends EventMap> {
  on<K extends EventKey<T>>(eventName: K, fn: EventReceiver<T[K]>): void
  off<K extends EventKey<T>>(eventName: K, fn: EventReceiver<T[K]>): void
  emit<K extends EventKey<T>>(eventName: K, params: T[K]): boolean
  once<K extends EventKey<T>>(eventName: K, fn: EventReceiver<T[K]>): void
  removeAllListeners<K extends EventKey<T>>(eventName?: K): void
  listenerCount<K extends EventKey<T>>(eventName: K): number
}

type STOREFRONT_EVENT_MAP<Cart> = {
  createCartError: Error
  createCartSuccess: Cart | null | undefined
  addLineItemError: Error
  addLineItemSuccess: Cart | null | undefined
  updateLineItemError: Error
  updateLineItemSuccess: Cart | null | undefined
  removeLineItemError: Error
  removeLineItemSuccess: Cart | null | undefined
}

type ALL_ERRORS_MAP<Cart> = {
  allErrors: {
    type: keyof Pick<
      STOREFRONT_EVENT_MAP<Cart>,
      | 'addLineItemError'
      | 'createCartError'
      | 'removeLineItemError'
      | 'updateLineItemError'
    >
    error: Error
  }
}

type ALL_SUCCESSES_MAP<Cart> = {
  allSuccesses: {
    type: keyof Pick<
      STOREFRONT_EVENT_MAP<Cart>,
      | 'addLineItemSuccess'
      | 'createCartSuccess'
      | 'removeLineItemSuccess'
      | 'updateLineItemSuccess'
    >
    data: Cart | null | undefined
  }
}

export type MAP<Cart> = STOREFRONT_EVENT_MAP<Cart> &
  ALL_ERRORS_MAP<Cart> &
  ALL_SUCCESSES_MAP<Cart>

export const createStorefrontEvents = <Cart extends BarebonesCart>() =>
  new EventEmitter() as Emitter<MAP<Cart>>

export type EventEmitterType = Emitter<MAP<BarebonesCart>>
