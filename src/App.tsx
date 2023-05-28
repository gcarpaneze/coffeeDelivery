import { BrowserRouter } from 'react-router-dom'

import { ProductsProvider } from './contexts/ProductsContext'

import { RoutesApp } from './routes'

import { defaultTheme } from './styles/theme/default'

import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <ProductsProvider>
          <RoutesApp />
        </ProductsProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
