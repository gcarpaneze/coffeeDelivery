import styled from 'styled-components'

export const TitleSection = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  h3 {
    font-size: 1rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 0.125rem;
  }

  p {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: 0.875rem;
  }
`

export const ContainerDetailsAdress = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;
  margin-bottom: 0.75rem;
`

export const InputContainerAdress = styled.div`
  display: grid;
  grid-template-columns: 13.5rem 18.5rem 3.75rem;
  gap: 0.75rem;
  margin-top: 2rem;
`

const InputBase = styled.input`
  height: 2.625rem;
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  background-color: 1px solid ${(props) => props.theme.colors['base-input']};
  font-size: 0.875rem;
  vertical-align: center;
  color: ${(props) => props.theme.colors['base-text']};
  border-radius: 4px;
  margin-bottom: 0.5rem;

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }
`

export const InputAdressesCode = styled(InputBase)`
  grid-column-start: 1;
  grid-column-end: 1;
`
export const InputStreet = styled(InputBase)`
  grid-column-start: 1;
  grid-column-end: 4;
`
export const InputNumber = styled(InputBase)`
  grid-column-start: 1;
  grid-column-end: 1;
`
export const InputComplement = styled(InputBase)`
  grid-column-start: 2;
  grid-column-end: 4;
`
export const InputDistrict = styled(InputBase)`
  grid-column-start: 1;
  grid-column-end: 1;
`
export const InputCity = styled(InputBase)`
  grid-column-start: 2;
  grid-column-end: 2;
`
export const InputState = styled(InputBase)`
  grid-column-start: 3;
  grid-column-end: 3;
`

// -----------------------------
