import { QueryClientProvider } from "../storefront/hooks";
import { CountdownProvider } from "@bsmnt/drop";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Countdown } from "../components/countdown";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CountdownProvider
      endDate={Date.now() + 1000 * 5} // set this to 5 seconds from now just to test
      countdownChildren={<Countdown />}
    >
      <QueryClientProvider>
        <Component {...pageProps} />
      </QueryClientProvider>
    </CountdownProvider>
  );
}
