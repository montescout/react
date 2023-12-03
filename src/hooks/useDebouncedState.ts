import { useEffect, useState } from 'react'

export function useDebouncedState<T>(state: T, delay: number) {
  const [debouncedState, setDebouncedState] = useState(state)
  const [isDebouncing, setIsDebouncing] = useState(false)

  useEffect(() => {
    setIsDebouncing(true)
    const handler = setTimeout(() => {
      setDebouncedState(state)
      setIsDebouncing(false)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [state, delay])

  return { isDebouncing, debouncedState, originalState: state }
}
