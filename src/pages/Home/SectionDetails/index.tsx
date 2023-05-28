import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

import CoffeeImage from '../../../assets/CoffeeImage.svg'

import { Attributes, AttributesContainer, SectionDetail } from './styles'

export function SectionDetails() {
  return (
    <SectionDetail>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>

        <h2>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h2>

        <AttributesContainer>
          <Attributes variant="yellow-dark">
            <div>
              <ShoppingCart />
            </div>
            <span>Compra simples e segura</span>
          </Attributes>

          <Attributes variant="base-text">
            <div>
              <Package />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </Attributes>

          <Attributes variant="yellow">
            <div>
              <Timer />
            </div>
            <span>Entrega rápida e rastreada</span>
          </Attributes>
          <Attributes variant="purple">
            <div>
              <Coffee />
            </div>
            <span>O café chega fresquinho até você</span>
          </Attributes>
        </AttributesContainer>
      </div>

      <img src={CoffeeImage} alt="Coffee Delivery Logo" />
    </SectionDetail>
  )
}
