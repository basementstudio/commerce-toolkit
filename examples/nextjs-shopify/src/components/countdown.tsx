import { useEffect, useState } from "react";
import { useCountdownStore } from "@bsmnt/drop";

export const Countdown = () => {
  const humanTimeRemaining = useCountdownStore()(
    (state) => state.humanTimeRemaining
  );

  const [hasRenderedOnce, setHasRenderedOnce] = useState(false);

  useEffect(() => {
    setHasRenderedOnce(true);
  }, []);

  return (
    <div>
      <h1>Countdown</h1>
      <ul>
        <li>Days: {humanTimeRemaining.days}</li>
        <li>Hours: {humanTimeRemaining.hours}</li>
        <li>Minutes: {hasRenderedOnce ? humanTimeRemaining.minutes : "59"}</li>
        <li>Seconds: {hasRenderedOnce ? humanTimeRemaining.seconds : "59"}</li>
      </ul>
    </div>
  );
};
