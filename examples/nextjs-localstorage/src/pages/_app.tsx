import { QueryClientProvider } from "../storefront/hooks";
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
