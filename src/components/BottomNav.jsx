import React from 'react'
import { Home, Search, Grid2X2, ShoppingCart, User } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function BottomNav() {
  const link = 'flex flex-col items-center text-xs'
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-40 py-2">
      <div className="max-w-6xl mx-auto grid grid-cols-5">
        <NavLink to="/" className={({isActive}) => `${link} ${isActive ? 'text-[#0C831F]' : 'text-slate-600'}` }>
          <Home size={20} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/search?q=" className={({isActive}) => `${link} ${isActive ? 'text-[#0C831F]' : 'text-slate-600'}` }>
          <Search size={20} />
          <span>Search</span>
        </NavLink>
        <NavLink to="/category/fruits-vegetables" className={({isActive}) => `${link} ${isActive ? 'text-[#0C831F]' : 'text-slate-600'}` }>
          <Grid2X2 size={20} />
          <span>Categories</span>
        </NavLink>
        <NavLink to="/cart" className={({isActive}) => `${link} ${isActive ? 'text-[#0C831F]' : 'text-slate-600'}` }>
          <ShoppingCart size={20} />
          <span>Cart</span>
        </NavLink>
        <NavLink to="#" className={`${link} text-slate-600`}>
          <User size={20} />
          <span>Account</span>
        </NavLink>
      </div>
    </nav>
  )
}
