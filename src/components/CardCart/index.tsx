import { useContext } from 'react'
import { TrashSimple, Plus, Minus } from '@phosphor-icons/react'
import {
  CardContainer,
  TransactionContainer,
  ButtonAmountEdit,
  ButtonRemove,
  ButtonsContainer,
} from './styles'

import { CurrencyFormat } from '../../utils/converter'

import { ProductsContext } from '../../contexts/ProductsContext'

interface Product {
  id: string
  name: string
  description: string
  price: number
  tags: string[]
  amount: number
  img: string
}

interface CardCartProps {
  product: Product
}

export function CardCart({ product }: CardCartProps) {
  const { removeToCart, changeItemAmountInTheCart } =
    useContext(ProductsContext)

  const { id, name, price, amount } = product

  function handleRemoveToCart() {
    removeToCart(id)
  }

  function handleChangeItemAmountInTheCart(operation: string) {
    changeItemAmountInTheCart({ operation, product })
  }

  return (
    <CardContainer>
      <div>
        <img
          src={`http://127.0.0.1:5173/src/assets/Coffees/${product.img}.png`}
          alt={product.img}
        />

        <div>
          <h1>{name}</h1>
          <ButtonsContainer>
            <TransactionContainer>
              <ButtonAmountEdit>
                <button onClick={() => handleChangeItemAmountInTheCart('-')}>
                  <Minus />
                </button>
                <span>{amount}</span>
                <button onClick={() => handleChangeItemAmountInTheCart('+')}>
                  <Plus />
                </button>
              </ButtonAmountEdit>
            </TransactionContainer>

            <ButtonRemove onClick={() => handleRemoveToCart()}>
              <TrashSimple />
              <span>REMOVER</span>
            </ButtonRemove>
          </ButtonsContainer>
        </div>
      </div>

      <strong>{CurrencyFormat(price * amount)}</strong>
    </CardContainer>
  )
}
