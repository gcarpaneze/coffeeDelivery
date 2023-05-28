import { useContext, useState } from 'react'
import { ShoppingCart, Plus, Minus } from '@phosphor-icons/react'

import { ProductsContext } from '../../contexts/ProductsContext'

import {
  CardContainer,
  TagContainer,
  TransactionContainer,
  ButtonAmountEdit,
} from './styles'

// import Teste from '../../assets/Teste.svg'

interface Product {
  id: string
  name: string
  description: string
  price: number
  tags: string[]
  img: string
}

interface CardCatalogProps {
  product: Product
}

export function CardCatalog({ product }: CardCatalogProps) {
  const { addToCart } = useContext(ProductsContext)

  const [amount, setAmount] = useState<number>(1)

  function handleChangeAmount(operation: string) {
    if (operation === '+') {
      setAmount(amount + 1)
    } else if (operation === '-' && amount > 1) {
      setAmount(amount - 1)
    }
  }

  function handleAddToCart(product: Product) {
    addToCart({ product, amount })
    setAmount(1)
  }

  return (
    <CardContainer>
      <img
        src={`http://127.0.0.1:5173/src/assets/Coffees/${product.img}.png`}
        alt="Expresso Tradicional"
      />
      <TagContainer>
        {product.tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </TagContainer>
      <h1>{product.name}</h1>
      <h2>{product.description}</h2>

      <TransactionContainer>
        <div>
          <span>R$</span>
          <strong>{product.price.toFixed(2)}</strong>
        </div>

        <ButtonAmountEdit>
          <button onClick={() => handleChangeAmount('-')}>
            <Minus />
          </button>
          <span>{amount}</span>
          <button onClick={() => handleChangeAmount('+')}>
            <Plus />
          </button>
        </ButtonAmountEdit>
        <button>
          <ShoppingCart onClick={() => handleAddToCart(product)} />
        </button>
      </TransactionContainer>
    </CardContainer>
  )
}
