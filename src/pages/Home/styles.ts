import styled from 'styled-components'

export const ContainerHome = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2.6rem 10rem;
`

export const SectionCollection = styled.section`
  > h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 900;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const CardsContainer = styled.div`
  margin-top: 2.34rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
`
