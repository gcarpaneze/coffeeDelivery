import { CartProps } from '../contexts/ProductsContext'

export function useSumTotalItens(cart: CartProps[]) {
  const sum = cart.reduce(
    (acc, item) => {
      acc.total = acc.total + item.amount * item.price

      return acc
    },
    { total: 0 },
  )

  return sum.total
}
