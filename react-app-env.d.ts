/* eslint-disable no-unused-vars */
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    PUBLIC_URL: string
    REACT_APP_TIME_ZONE_API_URL: string
    REACT_APP_TIME_ZONE_API_KEY: string
  }
}
interface Window {
  Stripe: any
}
