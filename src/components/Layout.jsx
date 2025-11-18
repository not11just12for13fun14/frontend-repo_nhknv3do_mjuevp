import React from 'react'
import TopBar from './TopBar'
import BottomNav from './BottomNav'
import CartDrawer from './CartDrawer'

export default function Layout({ children }){
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <TopBar />
      <div className="max-w-6xl mx-auto w-full">
        {children}
      </div>
      <BottomNav />
      <CartDrawer />
    </div>
  )
}
