import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { ShoppingCart } from './pages/ShoppingCart'
import { CheckoutSuccess } from './pages/CheckoutSucess'
import { DefaultLayout } from './layout/DefaultLayout'

export function RoutesApp() {
  return (
    <Routes>
      <Route element={<DefaultLayout />} path="/">
        <Route element={<Home />} path="/" />
        <Route element={<ShoppingCart />} path="/cart" />
        <Route element={<CheckoutSuccess />} path="/checkout" />
      </Route>
    </Routes>
  )
}
