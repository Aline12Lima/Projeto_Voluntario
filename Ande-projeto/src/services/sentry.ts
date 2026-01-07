import * as Sentry from '@sentry/react'


export function initSentry() {

  if (import.meta.env.VITE_SENTRY_DSN) {
    Sentry.init({
      dsn: import.meta.env.VITE_SENTRY_DSN,
      tracesSampleRate: 1.0,
      debug: true, 
      environment: 'development' 
    })
  } else {
    console.warn("Sentry DSN não encontrado.")
  }
}