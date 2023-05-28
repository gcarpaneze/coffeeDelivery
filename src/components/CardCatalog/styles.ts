import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 1.25rem;
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    margin-top: -2.5rem;
    margin-bottom: 0.75rem;
  }

  > h1 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 0.5rem;
  }

  > h2 {
    color: ${(props) => props.theme.colors['base-label']};
    font-size: 0.875rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  span {
    background-color: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 4px 8px;
    font-size: 0.62rem;
    font-weight: bold;
    border-radius: 100px;
  }
`

export const TransactionContainer = styled.div`
  padding: 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;

  > div {
    flex: 2;
  }

  > span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors['base-text']};
    margin-right: 0.25rem;
  }

  strong {
    color: ${(props) => props.theme.colors['base-text']};
    font-weight: 900;
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    margin-left: 0.25rem;
    margin-right: 1.43rem;
  }

  > button {
    border: 0;
    background-color: ${(props) => props.theme.colors['purple-dark']};
    color: ${(props) => props.theme.colors['base-card']};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    padding: 0.8rem;

    &:hover {
      background-color: ${(props) => props.theme.colors.purple};

      transition: 0.3s;
    }
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

  button {
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
