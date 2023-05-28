import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 1.5rem 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};

  img {
    margin-right: 1.25rem;
    width: 4rem;
    height: 4rem;
  }

  h1 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  > div {
    display: flex;
  }

  > strong {
    color: ${(props) => props.theme.colors['base-text']};
    font-weight: bold;
    font-size: 1rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
`

export const TransactionContainer = styled.div`
  display: flex;
  align-items: center;

  > span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors['base-text']};
  }
`

export const ButtonAmountEdit = styled.div`
  background-color: ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-right: 0.5rem;
  height: 2rem;

  > button {
    border: none;
    font-size: 1.12rem;
    color: ${(props) => props.theme.colors.purple};
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      color: ${(props) => props.theme.colors['purple-dark']};

      transition: 0.3s;
    }
  }

  span {
    font-size: 1rem;
    color: ${(props) => props.theme.colors['base-title']};
  }
`

export const ButtonRemove = styled.button`
  height: 2rem;
  border: 0;
  background-color: ${(props) => props.theme.colors['base-button']};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 0.5rem;
  gap: 0.25rem;

  &:hover {
    background-color: ${(props) => props.theme.colors['base-hover']};

    transition: 0.3s;
  }

  spam {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: 0.75rem;
  }

  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`
