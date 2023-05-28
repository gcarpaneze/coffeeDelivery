import { useContext } from 'react'
import { SectionDetails } from './SectionDetails'
import { CardCatalog } from '../../components/CardCatalog'

import { ContainerHome, SectionCollection, CardsContainer } from './styles'
import { ProductsContext } from '../../contexts/ProductsContext'

export function Home() {
  const { products } = useContext(ProductsContext)

  return (
    <ContainerHome>
      <SectionDetails />

      <SectionCollection>
        <h2>Nossos cafés</h2>

        <CardsContainer>
          {products.map((product) => {
            return <CardCatalog key={product.id} product={product} />
          })}
        </CardsContainer>
      </SectionCollection>
    </ContainerHome>
  )
}
