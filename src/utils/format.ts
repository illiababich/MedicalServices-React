export function formatAppointmentTime(time: Date): string {
  return `${time.getHours()}:${String(time.getMinutes()).padStart(2, '0')}`
}

export function uppercaseToTitleCase(text: string): string {
  return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
}
