export const getFormattedCurrentDate = () => {
  const date = new Date()
  const currentYear = date.getUTCFullYear()
  const currentMonth = (date.getUTCMonth() + 1).toString().padStart(2, '0')
  const currentDay = date.getUTCDate().toString().padStart(2, '0')
  return `${currentYear}-${currentMonth}-${currentDay}`
}

export const getFormattedDate = (date: Date) => {
  const currentYear = date.getUTCFullYear()
  const currentMonth = (date.getUTCMonth() + 1).toString().padStart(2, '0')
  const currentDay = (date.getUTCDate() + 1).toString().padStart(2, '0')
  return `${currentYear}-${currentMonth}-${currentDay}`
}
