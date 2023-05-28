import { useFormContext } from 'react-hook-form'
import { MapPinLine } from '@phosphor-icons/react'

import {
  ContainerDetailsAdress,
  TitleSection,
  InputContainerAdress,
  InputAdressesCode,
  InputStreet,
  InputNumber,
  InputComplement,
  InputDistrict,
  InputCity,
  InputState,
} from './styles'

export function FormAdress() {
  const { register } = useFormContext()

  return (
    <>
      <h2>Complete o seu pedido</h2>

      <ContainerDetailsAdress>
        <TitleSection>
          <MapPinLine size={22} />
          <div>
            <h3>Endereço de entrega</h3>
            <p>Informe o endereço onde você deseja receber seu pedido</p>
          </div>
        </TitleSection>

        <InputContainerAdress>
          <InputAdressesCode
            {...register('addressingCode')}
            placeholder="CEP"
            required
          />
          <InputStreet {...register('street')} placeholder="Rua" required />
          <InputNumber {...register('number')} placeholder="Número" required />
          <InputComplement
            {...register('adressComplement')}
            placeholder="Complemento"
          />
          <InputDistrict
            {...register('district')}
            placeholder="Bairro"
            required
          />
          <InputCity {...register('city')} placeholder="Cidade" required />
          <InputState {...register('state')} placeholder="UF" required />
        </InputContainerAdress>
      </ContainerDetailsAdress>
    </>
  )
}
