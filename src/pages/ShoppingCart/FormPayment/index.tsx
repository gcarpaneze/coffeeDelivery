import {
  CurrencyDollarSimple,
  CreditCard,
  Money,
  Bank,
} from '@phosphor-icons/react'
import { useFormContext, Controller } from 'react-hook-form'

import {
  ContainerDetailsPayment,
  TitleSection,
  ContainerTypeOfPayment,
  ButtonTypeOfPayment,
} from './styles'

export function FormPayment() {
  const { control } = useFormContext()

  return (
    <ContainerDetailsPayment>
      <TitleSection>
        <CurrencyDollarSimple size={22} />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </TitleSection>

      <Controller
        control={control}
        rules={{ required: true }}
        name="formOfPayment"
        render={({ field: { value, onChange } }) => {
          return (
            <ContainerTypeOfPayment value={value} onValueChange={onChange}>
              <ButtonTypeOfPayment value="Cartão de Crédito">
                <CreditCard />
                <span>CARTÃO DE CRÉDITO</span>
              </ButtonTypeOfPayment>
              <ButtonTypeOfPayment value="Cartão de Débito">
                <Bank />
                <span>CARTÃO DE DÉBITO</span>
              </ButtonTypeOfPayment>
              <ButtonTypeOfPayment value="Dinheiro">
                <Money />
                <span>DINHEIRO</span>
              </ButtonTypeOfPayment>
            </ContainerTypeOfPayment>
          )
        }}
      />
    </ContainerDetailsPayment>
  )
}
