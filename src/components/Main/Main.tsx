import React, { useState, useCallback, MouseEvent } from 'react'
import useTimezonedbClient from 'hooks/useTimezonedbClient'
import {
  TimezoneResponse,
  TZPropertiesList,
  TZResponseUnion
} from 'services/TimezonedbClient'
import Skeleton from 'components/Skeleton'
import Container from './styles'

let result: TimezoneResponse | undefined

export default function Main() {
  const [isFetching, setIsFetching] = useState(false)
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  const timezonedbClient = useTimezonedbClient()

  const handleSearchData = useCallback((lat: string, long: string) => {
    setIsFetching(true)
    timezonedbClient
      .getCurrentLocalTime(lat, long)
      .then((data) => {
        result = data
      })
      .catch(() => {
        result = undefined
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [])

  const getSkeletonOrText = (text: any = null) => {
    if (isFetching) {
      return <Skeleton type="text" width="auto" />
    }
    return text
  }

  const getText = (key: TZResponseUnion, isValue: boolean = false) => {
    let element: JSX.Element | keyof TimezoneResponse | undefined
    if (isFetching) {
      element = getSkeletonOrText(null)
    } else if (isValue) {
      element = result ? result[key] : '-'
    } else {
      element = key
    }

    return element
  }

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    result = undefined
    handleSearchData(latitude, longitude)
  }
  return (
    <Container>
      <div data-testid="main">
        <div className="latlong">
          <input
            type="text"
            value={latitude}
            placeholder="Latitude"
            onChange={(event) => setLatitude(event.target.value)}
            disabled={isFetching}
          />
          <input
            type="text"
            value={longitude}
            placeholder="Longitude"
            onChange={(event) => setLongitude(event.target.value)}
            disabled={isFetching}
          />
          <button
            onClick={handleButtonClick}
            type="button"
            disabled={isFetching}
          >
            Get
          </button>
        </div>
        <h3 className="localTime">
          {result?.status === 'FAILED' ? (
            <span className="alertMessage">{result.message}</span>
          ) : (
            <>
              <span className="okMessage">Current Local Time:</span>{' '}
              {getText('formatted', true)}
            </>
          )}
        </h3>
        <table>
          <thead>
            <tr>
              <th>Field Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {TZPropertiesList.map((key) => (
              <tr key={key}>
                <td>{getText(key)}</td>
                <td>{getText(key, true)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  )
}
