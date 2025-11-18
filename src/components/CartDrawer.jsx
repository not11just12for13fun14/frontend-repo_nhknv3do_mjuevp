import React from 'react'
import { X, ArrowLeft, Trash2 } from 'lucide-react'
import { useCart } from '../store/cartContext'
import { useUi } from '../store/uiContext'

export default function CartDrawer(){
  const { items, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart()
  const { cartOpen, checkoutOpen, closeCart, openCheckout, backToCart } = useUi()

  const proceed = () => {
    if(items.length===0) return
    openCheckout()
  }

  const placeOrder = () => {
    if(items.length===0) return
    alert('Order placed!')
    clearCart()
    closeCart()
  }

  return (
    <>
      {/* Backdrop */}
      <div className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${cartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={closeCart} />
      {/* Drawer */}
      <aside className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-xl transition-transform duration-300 ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-2">
              {checkoutOpen ? (
                <button onClick={backToCart} className="p-2 rounded hover:bg-slate-100">
                  <ArrowLeft />
                </button>
              ) : null}
              <h2 className="text-lg font-bold">{checkoutOpen ? 'Checkout' : 'My Cart'}</h2>
            </div>
            <button onClick={closeCart} className="p-2 rounded hover:bg-slate-100"><X /></button>
          </div>

          {!checkoutOpen ? (
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.length===0 ? (
                <div className="text-center text-slate-600">Your cart is empty</div>
              ) : items.map(item => (
                <div key={item.id} className="border rounded-lg p-3 flex items-center gap-3">
                  <div className="w-14 h-14 rounded bg-slate-100 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-xs text-slate-500">{item.weight}</div>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex items-center border border-[#0C831F] rounded-lg overflow-hidden">
                        <button onClick={() => updateQuantity(item.id, item.quantity-1)} className="px-3 py-1 text-[#0C831F] font-bold">-</button>
                        <span className="px-2 text-sm font-semibold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity+1)} className="px-3 py-1 text-[#0C831F] font-bold">+</button>
                      </div>
                      <div className="font-bold">₹{item.price * item.quantity}</div>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-slate-500 hover:text-red-600"><Trash2 /></button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="bg-[#e8f5ec] text-[#0C831F] p-3 rounded">Delivery in ~10 mins to Sector 44</div>
              <div className="space-y-2">
                {items.map(it => (
                  <div key={it.id} className="flex justify-between text-sm">
                    <span>{it.name} x {it.quantity}</span>
                    <span className="font-semibold">₹{it.price * it.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-3 mt-2 flex items-center justify-between">
                <span className="text-slate-600">Total</span>
                <span className="text-lg font-extrabold">₹{totalPrice}</span>
              </div>
            </div>
          )}

          <div className="p-4 border-t bg-white">
            {!checkoutOpen ? (
              <button onClick={proceed} className={`w-full py-3 rounded-lg font-bold text-white ${items.length===0 ? 'bg-slate-300' : 'bg-[#0C831F]'}`} disabled={items.length===0}>
                Proceed to Checkout
              </button>
            ) : (
              <button onClick={placeOrder} className="w-full py-3 rounded-lg font-bold text-white bg-[#0C831F]">
                Place Order
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  )
}
