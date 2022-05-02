import { useRef } from 'react'

import TimezonedbClient from 'services/TimezonedbClient'

const timezonedbClient = new TimezonedbClient()

export default function useTimezonedbClient() {
  const timezonedbClientRef = useRef(timezonedbClient)

  return timezonedbClientRef.current
}
