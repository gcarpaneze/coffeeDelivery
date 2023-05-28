import { styled } from 'styled-components'

export const SectionDetail = styled.section`
  display: flex;
  margin-top: 6.5rem;

  h1 {
    color: ${(props) => props.theme.colors['base-title']};
    font-size: 3rem;
    font-weight: 900;
    font-family: 'Baloo 2';
    margin-bottom: 1rem;
  }

  h2 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: 1.25rem;
    margin-bottom: 4.125rem;
  }
`
export const AttributesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1.25rem;
`

type AttributesProps = {
  variant: 'yellow-dark' | 'base-text' | 'yellow' | 'purple'
}

export const Attributes = styled.div<AttributesProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors[props.variant]};
    color: ${(props) => props.theme.colors.background};
  }

  span {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: 1rem;
  }
`

export const SectionCollection = styled.section`
  h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 900;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`
