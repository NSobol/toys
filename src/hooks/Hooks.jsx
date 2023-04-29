import { useEffect, useState } from 'react'

export const useScan = (way) => {

  const [scanValue, setScanValue] = useState(way);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setScanValue(way)
    }, 400);

    return () => clearTimeout(timeout)
  }, [way])

  return scanValue
}