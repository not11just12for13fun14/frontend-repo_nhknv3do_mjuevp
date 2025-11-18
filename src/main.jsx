import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { CartProvider } from './store/cartContext'
import { UiProvider } from './store/uiContext'
import { AuthProvider } from './store/authContext'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import SearchPage from './pages/SearchPage'
import AuthPage from './pages/AuthPage'
import Test from './Test'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <UiProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:categoryName" element={<CategoryPage />} />
              <Route path="/product/:productId" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </BrowserRouter>
        </UiProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
)
