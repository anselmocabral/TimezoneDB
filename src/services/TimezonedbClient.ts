import axios from 'axios'

export const TZPropertiesList = [
  'status',
  'message',
  'countryCode',
  'countryName',
  'regionName',
  'cityName',
  'zoneName',
  'abbreviation',
  'gmtOffset',
  'dst',
  'zoneStart',
  'zoneEnd',
  'nextAbbreviation',
  'timestamp',
  'formatted'
] as const

export type TZResponseUnion = typeof TZPropertiesList[number]

export interface TimezoneResponse {
  [x: string]: string | number | undefined
}
export default class TimezonedbClient {
  private url: string

  private key: string

  constructor() {
    this.url = process.env.REACT_APP_TIME_ZONE_API_URL
    this.key = process.env.REACT_APP_TIME_ZONE_API_KEY
  }

  async getCurrentLocalTime(
    latitude: string,
    longitude: string
  ): Promise<TimezoneResponse> {
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((done) => setTimeout(done, 2000))
    const response = await axios.get<TimezoneResponse>(this.url, {
      params: {
        key: this.key,
        format: 'json',
        by: 'position',
        lat: latitude,
        lng: longitude
      }
    })
    return response.data
  }
}
