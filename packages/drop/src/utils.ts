export function zeroPad(number: number, length: number) {
  if (number >= Math.pow(10, length)) {
    return number.toString()
  }
  return (Array(length).join('0') + number).slice(-length)
}

export function getTimeDelta(timeRemaining: number) {
  const seconds = Math.abs(timeRemaining) / 1000

  return {
    days: Math.floor(seconds / (3600 * 24)),
    hours: Math.floor((seconds / 3600) % 24),
    minutes: Math.floor((seconds / 60) % 60),
    seconds: Math.floor(seconds % 60),
    milliseconds: Number(((seconds % 1) * 1000).toFixed())
  }
}

export function getFormattedTimeDelta(
  timeRemaining: number,
  options?: { daysInHours: boolean; zeroPadLength?: number }
) {
  const { days, hours, minutes, seconds } = getTimeDelta(timeRemaining)

  const zeroPadLength = options?.zeroPadLength ?? 2

  const formattedHours = options?.daysInHours
    ? zeroPad(hours + days * 24, zeroPadLength)
    : zeroPad(hours, zeroPadLength)

  return {
    days: options?.daysInHours ? '' : zeroPad(days, zeroPadLength),
    hours: formattedHours,
    minutes: zeroPad(minutes, zeroPadLength),
    seconds: zeroPad(seconds, zeroPadLength),
    isComplete: timeRemaining < 1000 // this is the "human" isComplete. At this point we might have some milliseconds left, but the countdown will say "0".
  }
}

export function dateOrTimestampToTimestamp(dateOrTimestamp: Date | number) {
  return typeof dateOrTimestamp === 'number'
    ? dateOrTimestamp
    : dateOrTimestamp.getTime()
}
