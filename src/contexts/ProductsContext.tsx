import { useEffect, useState, createContext, ReactNode } from 'react'

interface ProviderProps {
  children: ReactNode
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  tags: string[]
  img: string
}

export interface CartProps {
  id: string
  name: string
  description: string
  price: number
  tags: string[]
  amount: number
  img: string
}

interface functionAddProps {
  product: Product
  amount: number
}

interface functionChangeAmountProps {
  operation: string
  product: CartProps
}

interface ContextProductsProps {
  products: Product[] | []
  cart: CartProps[]
  addToCart: ({ product, amount }: functionAddProps) => void
  removeToCart: (product: string) => void
  changeItemAmountInTheCart: ({
    operation,
    product,
  }: functionChangeAmountProps) => void
  resetCart: () => void
}

export const ProductsContext = createContext({} as ContextProductsProps)

export function ProductsProvider({ children }: ProviderProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<CartProps[]>([])

  useEffect(() => {
    async function fetchCoffees() {
      const res = await fetch('../../../db.json')
      const json = await res.json()
      const data = json.coffees
      setProducts(data)
    }

    fetchCoffees()
  }, [])

  function addToCart({ product, amount }: functionAddProps) {
    const productExist = cart.filter(
      (cartProduct) => cartProduct.id === product.id,
    )

    if (productExist.length === 0) {
      setCart([...cart, { ...product, amount }])
    } else {
      const newCart = cart.map((cartProduct) => {
        if (cartProduct.id === productExist[0].id) {
          return { ...cartProduct, amount: cartProduct.amount + 1 }
        } else {
          return cartProduct
        }
      })

      setCart(newCart)
    }
  }

  function removeToCart(id: string) {
    const newCart = cart.filter((productCart) => productCart.id !== id)

    setCart(newCart)
  }

  function changeItemAmountInTheCart({
    operation,
    product,
  }: functionChangeAmountProps) {
    if (operation === '-' && product.amount === 1) {
      removeToCart(product.id)
      return
    }

    const newCart = cart.map((cartProduct) => {
      if (cartProduct.id === product.id) {
        if (operation === '+') {
          cartProduct.amount++
        } else {
          cartProduct.amount--
        }
        return cartProduct
      } else {
        return cartProduct
      }
    })

    setCart(newCart)
  }

  function resetCart() {
    setCart([])
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeToCart,
        changeItemAmountInTheCart,
        resetCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
