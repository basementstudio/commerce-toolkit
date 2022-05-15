import * as React from 'react'
import create from 'zustand'
import createContext from 'zustand/context'
import shallow from 'zustand/shallow'

import { getFormattedTimeDelta } from './utils'

interface DropContext {
  progress: number | null
  timeRemaining: number
  isComplete: boolean
  endTimestamp: number
  startTimestamp: number | null
  update: () => void
  humanTimeRemaining: ReturnType<typeof getFormattedTimeDelta>
  countdownState: 'running' | 'complete' | 'exiting'
  setCountdownState: (state: 'running' | 'complete' | 'exiting') => void
}

const { Provider, useStore: useDrop } = createContext<DropContext>()

type DropProviderProps = {
  children?: React.ReactNode
  countdownChildren?: React.ReactNode
  endDate: Date | number
  startDate?: Date | number
  exitDelay?: number
}

const DropProvider = ({
  children,
  endDate,
  startDate,
  exitDelay,
  countdownChildren
}: DropProviderProps) => {
  const { endTimestamp, startTimestamp } = React.useMemo(() => {
    const endTimestamp =
      typeof endDate === 'number' ? endDate : endDate.getTime()
    const startTimestamp = startDate
      ? typeof startDate === 'number'
        ? startDate
        : startDate.getTime()
      : null

    if (startTimestamp && startTimestamp >= endTimestamp) {
      throw new Error(
        'startDate must be before endDate. Please check your start and end dates.'
      )
    }

    return { endTimestamp, startTimestamp }
  }, [endDate, startDate])

  return (
    <Provider
      createStore={() =>
        create<DropContext>((set) => {
          const state = calculateState(endTimestamp, startTimestamp)
          return {
            ...state,
            endTimestamp,
            startTimestamp,
            countdownState: state.humanTimeRemaining.isComplete
              ? 'complete'
              : 'running',
            update() {
              set(calculateState(endTimestamp, startTimestamp))
            },
            setCountdownState(countdownState: DropContext['countdownState']) {
              set({ countdownState })
            }
          }
        })
      }
    >
      <Renderer exitDelay={exitDelay} countdownChildren={countdownChildren}>
        {children}
      </Renderer>
    </Provider>
  )
}

function Renderer({
  countdownChildren,
  exitDelay = 0,
  children
}: {
  children?: React.ReactNode
} & Pick<DropProviderProps, 'countdownChildren' | 'exitDelay'>) {
  const {
    isComplete,
    humanIsComplete,
    countdownState,
    endTimestamp,
    startTimestamp,
    update,
    setCountdownState
  } = useDrop(
    React.useCallback(
      (state) => ({
        isComplete: state.isComplete,
        humanIsComplete: state.humanTimeRemaining.isComplete,
        countdownState: state.countdownState,
        endTimestamp: state.endTimestamp,
        startTimestamp: state.startTimestamp,
        setCountdownState: state.setCountdownState,
        update: state.update
      }),
      []
    ),
    shallow
  )

  React.useEffect(() => {
    if (isComplete) return
    const interval = window.setInterval(update, 1000)

    return () => {
      window.clearInterval(interval)
    }
  }, [endTimestamp, startTimestamp, isComplete, update])

  React.useEffect(() => {
    switch (countdownState) {
      case 'running':
        if (humanIsComplete) {
          setCountdownState(exitDelay > 0 ? 'exiting' : 'complete')
        }
        break
      case 'exiting': {
        const timeout = window.setTimeout(() => {
          setCountdownState('complete')
        }, exitDelay ?? 0)
        return () => {
          window.clearTimeout(timeout)
        }
      }
      default:
        break
    }

    return
  }, [countdownState, exitDelay, humanIsComplete, setCountdownState])

  return (
    <>
      {(!countdownChildren || isComplete) && <Memo>{children}</Memo>}
      {countdownChildren && countdownState !== 'complete' && (
        <Memo>{countdownChildren}</Memo>
      )}
    </>
  )
}

const Memo = React.memo(({ children }: { children?: React.ReactNode }) => {
  return <>{children}</>
})

function calculateState(endTimestamp: number, startTimestamp: number | null) {
  const now = Date.now()

  const timeRemaining = Math.max(0, endTimestamp - now)
  const progress = startTimestamp
    ? parseFloat(
        Math.max(
          0,
          Math.min((now - startTimestamp) / (endTimestamp - startTimestamp), 1)
        ).toFixed(2)
      )
    : null
  const isComplete = timeRemaining <= 0

  const humanTimeRemaining = getFormattedTimeDelta(timeRemaining)

  return { timeRemaining, isComplete, progress, humanTimeRemaining }
}

export { DropContext, DropProvider, useDrop }
