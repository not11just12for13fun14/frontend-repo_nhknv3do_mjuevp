import React, { useState } from 'react'
import { ShoppingCart, MapPin, Search, ChevronDown, ArrowLeft, User } from 'lucide-react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useCart } from '../store/cartContext'
import { useUi } from '../store/uiContext'
import { useAuth } from '../store/authContext'

const brandGreen = 'bg-[#0C831F]'

export default function TopBar() {
  const { totalItems } = useCart()
  const { openCart } = useUi()
  const { isLoggedIn } = useAuth()
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const onSubmit = (e) => {
    e.preventDefault()
    const q = query.trim()
    if (q.length) {
      navigate(`/search?q=${encodeURIComponent(q)}`)
    }
  }

  const canGoBack = location.pathname !== '/'

  return (
    <header className={`sticky top-0 z-50 ${brandGreen} text-white`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
        <div className="flex items-center gap-2 min-w-0">
          {canGoBack && (
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded hover:bg-white/10">
              <ArrowLeft size={18} />
            </button>
          )}
          <MapPin size={18} />
          <span className="text-sm font-medium hidden sm:block">Delivery to</span>
          <button className="flex items-center gap-1 text-sm font-semibold bg-white/10 rounded-full px-3 py-1 truncate">
            Sector 44, Gurgaon
            <ChevronDown size={16} />
          </button>
        </div>

        <form onSubmit={onSubmit} className="flex-1 flex items-center bg-white rounded-full px-3 py-2 ml-2">
          <Search className="text-slate-500" size={18} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for products..."
            className="flex-1 px-2 outline-none text-slate-700 text-sm"
          />
        </form>

        <div className="flex items-center gap-2 ml-2">
          <Link to="/auth" className="text-sm font-semibold bg-white text-[#0C831F] rounded-full px-3 py-1 flex items-center gap-1">
            <User size={16} /> {isLoggedIn ? 'Account' : 'Login'}
          </Link>
          <button onClick={openCart} className="relative p-2 rounded hover:bg-white/10">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-[#0C831F] text-xs font-bold rounded-full w-5 h-5 grid place-items-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
