import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../store/cartContext'

export default function ProductCard({ product }) {
  const navigate = useNavigate()
  const { items, addToCart, updateQuantity } = useCart()
  const inCart = items.find(i => i.id === product.id)

  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
      <div onClick={() => navigate(`/product/${product.id}`)} className="aspect-square w-full bg-slate-50 overflow-hidden cursor-pointer">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-3">
        <div className="text-xs text-slate-500 mb-1">{product.weight}</div>
        <div className="font-semibold text-slate-800 line-clamp-2 h-10">{product.name}</div>
        <div className="flex items-center justify-between mt-2">
          <div className="font-bold">₹{product.price}</div>
          {!inCart ? (
            <button onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.imageUrl, weight: product.weight, quantity: 1 })} className="text-[#0C831F] border border-[#0C831F] rounded-lg px-3 py-1 text-sm font-bold">
              Add
            </button>
          ) : (
            <div className="flex items-center border border-[#0C831F] rounded-lg overflow-hidden">
              <button onClick={() => updateQuantity(product.id, inCart.quantity - 1)} className="px-3 py-1 text-[#0C831F] font-bold">-</button>
              <span className="px-2 text-sm font-semibold">{inCart.quantity}</span>
              <button onClick={() => updateQuantity(product.id, inCart.quantity + 1)} className="px-3 py-1 text-[#0C831F] font-bold">+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
