import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { getProductById } from '../data/products'
import { useCart } from '../store/cartContext'

export default function ProductDetailPage() {
  const { productId } = useParams()
  const product = useMemo(() => getProductById(productId), [productId])
  const { items, addToCart, updateQuantity } = useCart()
  const inCart = items.find(i => i.id === product?.id)
  const [qty, setQty] = useState(1)

  if (!product) return null

  const add = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, image: product.imageUrl, weight: product.weight, quantity: qty })
  }

  return (
    <Layout>
      <div className="px-4 mt-3">
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="w-full aspect-square bg-slate-100">
            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <div className="text-slate-500 text-sm">{product.weight}</div>
            <h1 className="text-xl font-bold text-slate-900 mt-1">{product.name}</h1>
            <div className="text-2xl font-extrabold mt-2">₹{product.price}</div>

            {!inCart ? (
              <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button onClick={() => setQty(Math.max(1, qty-1))} className="px-3 py-1">-</button>
                  <span className="px-3 font-semibold">{qty}</span>
                  <button onClick={() => setQty(qty+1)} className="px-3 py-1">+</button>
                </div>
                <button onClick={add} className="bg-[#0C831F] text-white px-4 py-2 rounded-lg font-bold">Add to Cart</button>
              </div>
            ) : (
              <div className="mt-4 flex items-center">
                <div className="flex items-center border border-[#0C831F] rounded-lg overflow-hidden">
                  <button onClick={() => updateQuantity(product.id, inCart.quantity - 1)} className="px-4 py-2 text-[#0C831F] font-bold">-</button>
                  <span className="px-3 font-semibold">{inCart.quantity}</span>
                  <button onClick={() => updateQuantity(product.id, inCart.quantity + 1)} className="px-4 py-2 text-[#0C831F] font-bold">+</button>
                </div>
              </div>
            )}

            <div className="mt-6">
              <h2 className="font-bold text-slate-800 mb-2">Product Description</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                {product.description} In hac habitasse platea dictumst. Integer vitae justo a arcu dapibus volutpat. Nulla facilisi. Donec euismod, nisl eget consectetur sagittis, nisl nunc consectetur nisi, euismod aliquam nisl nunc eget lorem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
