import React, { useState } from 'react'
import { ShoppingCart, MapPin, Search, ChevronDown } from 'lucide-react'
import { useNavigate, Link } from 'react-router-dom'
import { useCart } from '../store/cartContext'

const brandGreen = 'bg-[#0C831F]'

export default function TopBar() {
  const { totalItems } = useCart()
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    const q = query.trim()
    if (q.length) {
      navigate(`/search?q=${encodeURIComponent(q)}`)
    }
  }

  return (
    <header className={`sticky top-0 z-50 ${brandGreen} text-white`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <MapPin size={18} />
          <span className="text-sm font-medium">Delivery to</span>
          <button className="flex items-center gap-1 text-sm font-semibold bg-white/10 rounded-full px-3 py-1">
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

        <div className="flex items-center gap-3 ml-2">
          <button className="text-sm font-semibold bg-white text-[#0C831F] rounded-full px-3 py-1">Login</button>
          <Link to="/cart" className="relative">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-[#0C831F] text-xs font-bold rounded-full w-5 h-5 grid place-items-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}
