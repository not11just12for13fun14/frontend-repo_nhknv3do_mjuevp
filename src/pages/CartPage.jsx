import React from 'react'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'
import { useCart } from '../store/cartContext'
import { Trash2 } from 'lucide-react'

export default function CartPage() {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart()

  const checkout = () => {
    if (items.length === 0) return
    alert('Order Placed!')
    clearCart()
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <TopBar />

      <div className="px-4 mt-3">
        <h1 className="text-xl font-bold text-slate-800">My Cart ({totalItems} items)</h1>
      </div>

      <div className="px-4 mt-3 space-y-3">
        {items.length === 0 && (
          <div className="bg-white p-6 rounded-xl text-center text-slate-600">Your cart is empty</div>
        )}
        {items.map(item => (
          <div key={item.id} className="bg-white p-3 rounded-xl border border-slate-100 flex items-center gap-3">
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-100">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-slate-800">{item.name}</div>
              <div className="text-xs text-slate-500">{item.weight}</div>
              <div className="mt-2 flex items-center gap-3">
                <div className="flex items-center border border-[#0C831F] rounded-lg overflow-hidden">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-[#0C831F] font-bold">-</button>
                  <span className="px-2 text-sm font-semibold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-[#0C831F] font-bold">+</button>
                </div>
                <div className="font-bold">₹{item.price * item.quantity}</div>
              </div>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="text-slate-500 hover:text-red-600">
              <Trash2 />
            </button>
          </div>
        ))}
      </div>

      <div className="fixed bottom-12 left-0 right-0 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between shadow-lg">
            <div>
              <div className="text-sm text-slate-600">Total</div>
              <div className="text-xl font-extrabold">₹{totalPrice}</div>
            </div>
            <button disabled={items.length===0} onClick={checkout} className={`px-5 py-3 rounded-lg font-bold text-white ${items.length===0 ? 'bg-slate-300' : 'bg-[#0C831F]'}`}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
