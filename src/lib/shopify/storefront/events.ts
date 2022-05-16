import EventEmitter from 'events'

import { _CartFragment } from './generated'

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

type STOREFRONT_EVENT_MAP = {
  createCartError: Error
  createCartSuccess: _CartFragment | null | undefined
  addLineItemError: Error
  addLineItemSuccess: _CartFragment | null | undefined
  updateLineItemError: Error
  updateLineItemSuccess: _CartFragment | null | undefined
  removeLineItemError: Error
  removeLineItemSuccess: _CartFragment | null | undefined
}

type ALL_ERRORS_MAP = {
  allErrors: {
    type: keyof Pick<
      STOREFRONT_EVENT_MAP,
      | 'addLineItemError'
      | 'createCartError'
      | 'removeLineItemError'
      | 'updateLineItemError'
    >
    error: Error
  }
}

type ALL_SUCCESSES_MAP = {
  allSuccesses: {
    type: keyof Pick<
      STOREFRONT_EVENT_MAP,
      | 'addLineItemSuccess'
      | 'createCartSuccess'
      | 'removeLineItemSuccess'
      | 'updateLineItemSuccess'
    >
    data: _CartFragment | null | undefined
  }
}

export const storefrontEvents = new EventEmitter() as Emitter<
  STOREFRONT_EVENT_MAP & ALL_ERRORS_MAP & ALL_SUCCESSES_MAP
>
