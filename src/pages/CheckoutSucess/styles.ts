import { styled } from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 10rem;
  padding: 10rem 10rem 1rem 10rem;

  h1 {
    color: ${(props) => props.theme.colors['yellow-dark']};
    font-size: 2rem;
    font-weight: 900;
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 0.25rem;
  }

  h2 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: 1.25rem;
    margin-bottom: 4.125rem;
    margin-bottom: 2.5rem;
  }

  > div {
    display: flex;
    justify-content: flex-start;
    gap: 6.5rem;
    width: 100%;
  }
`

export const CheckoutDetails = styled.section`
  min-width: 33rem;
  border: 1px solid ${(props) => props.theme.colors['yellow-dark']};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  > div {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 2rem;
  }
  color: ${(props) => props.theme.colors['base-text']};
  font-size: 1rem;
`
