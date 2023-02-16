import config from './config'
import { createSdk } from './generated'

export const storefront = createSdk(config)
