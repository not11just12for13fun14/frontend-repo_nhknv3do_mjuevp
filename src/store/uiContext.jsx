import React, { createContext, useContext, useMemo, useReducer } from 'react'

const UiContext = createContext(null)

const initial = {
  cartOpen: false,
  checkoutOpen: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'OPEN_CART':
      return { cartOpen: true, checkoutOpen: false }
    case 'CLOSE_CART':
      return { cartOpen: false, checkoutOpen: false }
    case 'OPEN_CHECKOUT':
      return { cartOpen: true, checkoutOpen: true }
    case 'BACK_TO_CART':
      return { cartOpen: true, checkoutOpen: false }
    default:
      return state
  }
}

export function UiProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial)

  const value = useMemo(() => ({
    cartOpen: state.cartOpen,
    checkoutOpen: state.checkoutOpen,
    openCart: () => dispatch({ type: 'OPEN_CART' }),
    closeCart: () => dispatch({ type: 'CLOSE_CART' }),
    openCheckout: () => dispatch({ type: 'OPEN_CHECKOUT' }),
    backToCart: () => dispatch({ type: 'BACK_TO_CART' })
  }), [state])

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>
}

export function useUi(){
  const ctx = useContext(UiContext)
  if(!ctx) throw new Error('useUi must be used within UiProvider')
  return ctx
}
