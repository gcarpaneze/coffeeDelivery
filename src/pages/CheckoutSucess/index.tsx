import { useEffect, useState, useContext } from 'react'
import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'

import { ProductsContext } from '../../contexts/ProductsContext'

import { CheckoutContainer, CheckoutDetails } from './styles'

import ImageCheckout from '../../assets/ImageCheckout.svg'

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

export function CheckoutSuccess() {
  const { resetCart } = useContext(ProductsContext)

  const [information, setInformation] = useState({} as InformationProps)

  useEffect(() => {
    const response = localStorage.getItem('@coffeeDeliveryInformation-v1')

    if (response) {
      const data = JSON.parse(response)
      setInformation(data)

      localStorage.removeItem('@coffeeDeliveryInformation-v1')
      resetCart()
    }
  }, [resetCart])

  return (
    <CheckoutContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é so aguardar que logo o café chegará até você</h2>

      <div>
        <CheckoutDetails>
          <div>
            <MapPin />
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {information.street}, {information.number}
                </strong>
              </p>
              <p>
                {information.district} - {information.city}, {information.state}
              </p>
            </div>
          </div>

          <div>
            <Timer />
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </div>

          <div>
            <CurrencyDollar />
            <div>
              <p>Pagamento na entrega</p>
              <strong>{information.formOfPayment}</strong>
            </div>
          </div>
        </CheckoutDetails>
        <img src={ImageCheckout} alt="" />
      </div>
    </CheckoutContainer>
  )
}
