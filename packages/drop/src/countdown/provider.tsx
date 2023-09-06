import * as React from "react";
import { create, StoreApi, UseBoundStore } from "zustand";
import shallow from "zustand/shallow";

import { calculateCountdownState } from "./calculate-countdown-state";
import { dateOrTimestampToTimestamp, getFormattedTimeDelta } from "../utils";

interface CountdownContext {
  progress: number | null;
  timeRemaining: number;
  isComplete: boolean;
  endTimestamp: number;
  startTimestamp: number | null;
  update: () => void;
  humanTimeRemaining: ReturnType<typeof getFormattedTimeDelta>;
  countdownState: "running" | "complete" | "exiting";
  setCountdownState: (state: "running" | "complete" | "exiting") => void;
}

const Context = React.createContext<
  UseBoundStore<StoreApi<CountdownContext>> | undefined
>(undefined);

type CountdownProviderProps = {
  children?: React.ReactNode;
  countdownChildren?: React.ReactNode;
  endDate: Date | number;
  startDate?: Date | number;
  exitDelay?: number;
};

const CountdownProvider = ({
  children,
  endDate,
  startDate,
  exitDelay,
  countdownChildren,
}: CountdownProviderProps) => {
  const [store] = React.useState(() => {
    const endTimestamp = dateOrTimestampToTimestamp(endDate);
    const startTimestamp = startDate
      ? dateOrTimestampToTimestamp(startDate)
      : null;

    if (startTimestamp && startTimestamp >= endTimestamp) {
      console.warn("startDate must be before endDate. Please check your start and end dates.")
    }

    return create<CountdownContext>((set) => {
      const state = calculateCountdownState(endTimestamp, startTimestamp);
      return {
        ...state,
        endTimestamp,
        startTimestamp,
        countdownState: state.humanTimeRemaining.isComplete
          ? "complete"
          : "running",
        update() {
          set(calculateCountdownState(endTimestamp, startTimestamp));
        },
        setCountdownState(countdownState: CountdownContext["countdownState"]) {
          set({ countdownState });
        },
      };
    });
  });

  return (
    <Context.Provider value={store}>
      <Renderer exitDelay={exitDelay} countdownChildren={countdownChildren}>
        {children}
      </Renderer>
    </Context.Provider>
  );
};

const useCountdownStore = () => {
  const store = React.useContext(Context);
  if (!store) {
    throw new Error(
      "useCountdownStore must be used within a CountdownProvider. Did you forget to include it?"
    );
  }

  return store;
};

function Renderer({
  countdownChildren,
  exitDelay = 0,
  children,
}: {
  children?: React.ReactNode;
} & Pick<CountdownProviderProps, "countdownChildren" | "exitDelay">) {
  const {
    isComplete,
    humanIsComplete,
    countdownState,
    endTimestamp,
    startTimestamp,
    update,
    setCountdownState,
  } = useCountdownStore()(
    React.useCallback(
      (state) => ({
        isComplete: state.isComplete,
        humanIsComplete: state.humanTimeRemaining.isComplete,
        countdownState: state.countdownState,
        endTimestamp: state.endTimestamp,
        startTimestamp: state.startTimestamp,
        setCountdownState: state.setCountdownState,
        update: state.update,
      }),
      []
    ),
    shallow
  );

  React.useEffect(() => {
    if (isComplete) return;
    const interval = setInterval(update, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [endTimestamp, startTimestamp, isComplete, update]);

  React.useEffect(() => {
    switch (countdownState) {
      case "running":
        if (humanIsComplete) {
          setCountdownState(exitDelay > 0 ? "exiting" : "complete");
        }
        break;
      case "exiting": {
        const timeout = setTimeout(() => {
          setCountdownState("complete");
        }, exitDelay ?? 0);
        return () => {
          clearTimeout(timeout);
        };
      }
      default:
        break;
    }

    return;
  }, [countdownState, exitDelay, humanIsComplete, setCountdownState]);

  return (
    <>
      {(!countdownChildren || isComplete) && <Memo>{children}</Memo>}
      {countdownChildren && countdownState !== "complete" && (
        <Memo>{countdownChildren}</Memo>
      )}
    </>
  );
}

const Memo = React.memo(({ children }: { children?: React.ReactNode }) => {
  return <>{children}</>;
});

Memo.displayName = "Memo";

export { CountdownProvider, useCountdownStore };
