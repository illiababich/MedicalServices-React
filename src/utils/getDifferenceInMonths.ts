function getDifferenceInMonths(date: Date) {
  const today = new Date()
  const differenceInYears = today.getFullYear() - date.getFullYear()
  return today.getMonth() - date.getMonth() + differenceInYears * 12
}

export default getDifferenceInMonths
