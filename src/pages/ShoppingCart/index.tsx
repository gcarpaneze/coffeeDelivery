import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'

import { ProductsContext } from '../../contexts/ProductsContext'

import { FormAdress } from './FormAdress'
import { FormPayment } from './FormPayment'
import { CardCart } from '../../components/CardCart'

import {
  ShoppingCartContainer,
  ShoppingCartContent,
  ContainerDetailsOrder,
  ContainerOrder,
  ContainerOrderDetails,
  OrderTotal,
} from './styles'

import { useSumTotalItens } from '../../hooks/useSumTotalItens'

import { CurrencyFormat } from '../../utils/converter'

interface InformationProps {
  addressingCode: string
  street: string
  adressComplement: string
  city: string
  district: string
  number: string
  state: string
  formOfPayment: string
}

export function ShoppingCart() {
  const navigate = useNavigate()

  const { cart } = useContext(ProductsContext)

  const methods = useForm()

  function onSubmitForm(data: InformationProps) {
    if (cart.length === 0) return

    localStorage.setItem('@coffeeDeliveryInformation-v1', JSON.stringify(data))

    navigate('/checkout')
  }

  const total = useSumTotalItens(cart)

  const shippingValue = 12

  return (
    <ShoppingCartContainer>
      <FormProvider {...methods}>
        <ShoppingCartContent onSubmit={methods.handleSubmit(onSubmitForm)}>
          <ContainerDetailsOrder>
            <FormAdress />
            <FormPayment />
          </ContainerDetailsOrder>

          <ContainerOrder>
            <h2>Cafés selecionados</h2>

            <ContainerOrderDetails>
              {cart.map((product) => {
                return <CardCart key={product.id} product={product} />
              })}

              <OrderTotal>
                <div>
                  <p>Total de itens</p>
                  <span>{CurrencyFormat(total)}</span>
                </div>

                <div>
                  <p>Entrega</p>
                  <span>{CurrencyFormat(shippingValue)}</span>
                </div>

                <div>
                  <strong>Total</strong>
                  <strong>{CurrencyFormat(total + shippingValue)}</strong>
                </div>

                <button type="submit">CONFIRMAR PEDIDO</button>
              </OrderTotal>
            </ContainerOrderDetails>
          </ContainerOrder>
        </ShoppingCartContent>
      </FormProvider>
    </ShoppingCartContainer>
  )
}
