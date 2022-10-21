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
      exitDelay={1000} // optional, just to give some time to animate the countdown before finally unmounting it
      startDate={Date.now()} // optional, just if you need some kind of progress UI
    >
      <QueryClientProvider>
        <Component {...pageProps} />
      </QueryClientProvider>
    </CountdownProvider>
  );
}
