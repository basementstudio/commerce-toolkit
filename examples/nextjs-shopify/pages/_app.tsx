import * as React from "react";
import { QueryClientProvider } from "../shopify/storefront-hooks";
import { DropProvider, useDropStore } from "@bsmnt/drop";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DropProvider
      endDate={Date.now() + 1000 * 10}
      countdownChildren={<Countdown />}
    >
      <QueryClientProvider>
        <Component {...pageProps} />
      </QueryClientProvider>
    </DropProvider>
  );
}

const Countdown = () => {
  const humanTimeRemaining = useDropStore()(
    (state) => state.humanTimeRemaining
  );
  return (
    <div>
      <h1>Countdown</h1>
      <div>
        {humanTimeRemaining.days} days {humanTimeRemaining.hours} hours{" "}
        {humanTimeRemaining.minutes} minutes {humanTimeRemaining.seconds}{" "}
        seconds
      </div>
    </div>
  );
};

export default MyApp;
