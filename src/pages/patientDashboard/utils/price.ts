import { Procedure } from '../../../store/procedures/model'

export function formatTextWithPrice(text: string, price: number) {
  return `${text} \xa0\xa0\xa0 ${formatPrice(price)}`
}

function formatPrice(price: number) {
  return `${price.toFixed(2)} €`
}

export const countTotalProceduresPrice = (procedures: Procedure[]) => {
  if (procedures === undefined) return 0
  return procedures.reduce((acc, procedure) => {
    return acc + procedure.price
  }, 0)
}
