import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.6rem 10rem;
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0 0 3px ${(props) => props.theme.colors['purple-light']};

  img {
    width: 5.3rem;
    height: 2.5rem;
  }

  div {
    display: flex;
    gap: 0.75rem;
  }

  a {
    cursor: pointer;
  }
`

export const ButtonAdress = styled.span`
  width: 9rem;
  height: 2.37rem;
  border: 0;
  background-color: ${(props) => props.theme.colors['purple-light']};
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors['purple-dark']};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  border-radius: 6px;
`

export const ButtonShoppingCart = styled.a`
  width: 2.37rem;
  height: 2.37rem;
  border: 0;
  background-color: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`

export const TagCount = styled.span`
  background-color: ${(props) => props.theme.colors['yellow-dark']};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  min-width: 1.25rem;
  height: 1.25rem;
  font-size: 0.75rem;
  margin-left: -1.4rem;
  margin-top: -0.5rem;
`
