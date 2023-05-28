import styled from 'styled-components'

export const ShoppingCartContainer = styled.main`
  width: 100%;
  padding: 2.6rem 10rem;
`
export const ShoppingCartContent = styled.form`
  margin-top: 6.5rem;
  display: flex;
  gap: 2rem;
`

// --------------------------------------

export const ContainerDetailsOrder = styled.div`
  width: 57%;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 0.93rem;
  }
`
// --------------------------------------

export const ContainerOrder = styled.div`
  width: 57%;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 0.93rem;
  }
`

export const ContainerOrderDetails = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 44px 6px 44px;
`

export const OrderTotal = styled.div`
  margin-top: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors['base-text']};
  }

  span {
    font-size: 1rem;
    color: ${(props) => props.theme.colors['base-text']};
  }

  strong {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors['base-text']};
    margin-bottom: 1.5rem;
  }

  button {
    width: 100%;
    height: 2.875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors.white};
    border: 0;
    border-radius: 6px;
    line-height: 1.6;
    font-size: 0.875rem;
    font-weight: bold;

    &:hover {
      background-color: ${(props) => props.theme.colors['yellow-dark']};
      transition: all 0.3s;
    }
  }
`
