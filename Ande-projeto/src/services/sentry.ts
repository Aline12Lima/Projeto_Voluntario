import * as Sentry from '@sentry/react'

export function captureError(error: unknown) {
  Sentry.captureException(error)
}
