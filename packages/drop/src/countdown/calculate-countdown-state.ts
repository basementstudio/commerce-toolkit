import { dateOrTimestampToTimestamp, getFormattedTimeDelta } from "../utils";

export function calculateCountdownState(
  endDate: Date | number,
  startDate?: number | null
) {
  const now = Date.now();

  const endTimestamp = dateOrTimestampToTimestamp(endDate);
  const startTimestamp = startDate
    ? dateOrTimestampToTimestamp(startDate)
    : null;

  const timeRemaining = Math.max(0, endTimestamp - now);
  const progress = startTimestamp
    ? parseFloat(
        Math.max(
          0,
          Math.min((now - startTimestamp) / (endTimestamp - startTimestamp), 1)
        ).toFixed(2)
      )
    : null;
  const isComplete = timeRemaining <= 0;

  const humanTimeRemaining = getFormattedTimeDelta(timeRemaining);

  return { timeRemaining, isComplete, progress, humanTimeRemaining };
}
