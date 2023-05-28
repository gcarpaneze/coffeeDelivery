import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const ContainerDetailsPayment = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;
`

export const TitleSection = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.colors.purple};
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

export const ContainerTypeOfPayment = styled(RadioGroup.Root)`
  display: flex;
  gap: 0.75rem;
  margin-top: 2rem;
`

export const ButtonTypeOfPayment = styled(RadioGroup.Item)`
  width: 11.25rem;
  height: 3.18rem;
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  align-items: center;
  gap: 0.75rem;
  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['base-button']};

  &:not([data-state='checked']):hover {
    background-color: ${(props) => props.theme.colors['base-hover']};
    transition: all 0.3s;
  }

  &[data-state='checked'] {
    border: 1px solid ${(props) => props.theme.colors.purple};
  }

  svg {
    color: ${(props) => props.theme.colors.purple};
    font-size: 16px;
  }

  span {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: 0.75rem;
    line-height: 1.6;
  }
`
