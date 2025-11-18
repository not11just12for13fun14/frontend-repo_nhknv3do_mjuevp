import React, { createContext, useContext, useMemo, useReducer } from 'react'

const CartContext = createContext(null)

const initialState = {
  items: [],
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find(i => i.id === action.item.id)
      let items
      if (existing) {
        items = state.items.map(i => i.id === action.item.id ? { ...i, quantity: i.quantity + action.item.quantity } : i)
      } else {
        items = [...state.items, action.item]
      }
      return { ...state, items }
    }
    case 'UPDATE_QTY': {
      const items = state.items.map(i => i.id === action.id ? { ...i, quantity: Math.max(0, action.quantity) } : i).filter(i => i.quantity > 0)
      return { ...state, items }
    }
    case 'REMOVE': {
      const items = state.items.filter(i => i.id !== action.id)
      return { ...state, items }
    }
    case 'CLEAR':
      return initialState
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = useMemo(() => {
    const totalItems = state.items.reduce((s, i) => s + i.quantity, 0)
    const totalPrice = state.items.reduce((s, i) => s + i.quantity * i.price, 0)

    return {
      items: state.items,
      totalItems,
      totalPrice,
      addToCart: (item) => dispatch({ type: 'ADD', item }),
      updateQuantity: (id, quantity) => dispatch({ type: 'UPDATE_QTY', id, quantity }),
      removeFromCart: (id) => dispatch({ type: 'REMOVE', id }),
      clearCart: () => dispatch({ type: 'CLEAR' })
    }
  }, [state])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
