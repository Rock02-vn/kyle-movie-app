import { useState, useEffect } from 'react'

const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);

    return () => clearTimeout(timeout)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return debounceValue
}

export default useDebounce