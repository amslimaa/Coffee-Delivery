
import { NavContainer, Logo, LeftButtons, NavCityButton, NavCartButton } from './styles'
import logo from '../../assets/coffee-delivery-logo.svg'

import { MapPin,ShoppingCart } from 'phosphor-react'
export function Nav() {
  return (
    <NavContainer>
      <Logo src={logo} />
      <LeftButtons>
        <NavCityButton>
          <MapPin size={20} />
          Teresina, PI
        </NavCityButton>
        <NavCartButton >
          <ShoppingCart size={20} />
        </NavCartButton>
      </LeftButtons>
    </NavContainer>
  )
}