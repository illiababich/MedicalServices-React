import { parseISO } from 'date-fns'

const isoDateFormat =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?(?:[-+]\d{2}:?\d{2}|Z)?$/

function isIsoDateString(value: any): boolean {
  return value && typeof value === 'string' && isoDateFormat.test(value)
}

function handleDates(body: any) {
  if (!body || typeof body !== 'object') return body

  for (const key of Object.keys(body)) {
    const value = body[key]
    if (isIsoDateString(value)) body[key] = parseISO(value)
    else if (typeof value === 'object') handleDates(value)
  }
}

export default handleDates
