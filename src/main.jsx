import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { CartProvider } from './store/cartContext'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import SearchPage from './pages/SearchPage'
import Test from './Test'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
)
