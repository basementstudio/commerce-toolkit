import { QueryClientProvider } from "../shopify/storefront-hooks";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
