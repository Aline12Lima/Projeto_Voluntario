import * as Sentry from '@sentry/react'
import { ENV } from '../config/envs'

export function initSentry() {
  if (ENV.isProd && import.meta.env.VITE_SENTRY_DSN) {
    Sentry.init({
      dsn: import.meta.env.VITE_SENTRY_DSN,
      tracesSampleRate: 1.0,
    })
  }
}
