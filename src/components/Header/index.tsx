import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import {
  HeaderContainer,
  HeaderContent,
  ButtonAdress,
  ButtonShoppingCart,
  TagCount,
} from './styles'

import { ProductsContext } from '../../contexts/ProductsContext'

import logo from '../../assets/logo.svg'

export function Header() {
  const navigate = useNavigate()

  const { cart } = useContext(ProductsContext)

  return (
    <HeaderContainer>
      <HeaderContent>
        <a onClick={() => navigate('/')}>
          <img src={logo} alt="" />
        </a>

        <div>
          <ButtonAdress>
            <MapPin size={28} />
            <span>Bauru, SP</span>
          </ButtonAdress>

          <ButtonShoppingCart onClick={() => navigate('/cart')}>
            <ShoppingCart size={22} />
          </ButtonShoppingCart>
          {cart.length > 0 && <TagCount>{cart.length}</TagCount>}
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
