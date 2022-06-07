import * as React from 'react'
import create from 'zustand'
import createContext from 'zustand/context'
import shallow from 'zustand/shallow'

import { calculateCountdownState } from './calculate-countdown-state'
import { dateOrTimestampToTimestamp, getFormattedTimeDelta } from './utils'

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
    const endTimestamp = dateOrTimestampToTimestamp(endDate)
    const startTimestamp = startDate
      ? dateOrTimestampToTimestamp(startDate)
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
          const state = calculateCountdownState(endTimestamp, startTimestamp)
          return {
            ...state,
            endTimestamp,
            startTimestamp,
            countdownState: state.humanTimeRemaining.isComplete
              ? 'complete'
              : 'running',
            update() {
              set(calculateCountdownState(endTimestamp, startTimestamp))
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

export { DropContext, DropProvider, useDrop }
