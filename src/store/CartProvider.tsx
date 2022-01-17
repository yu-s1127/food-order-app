import { FC, useContext, useReducer } from 'react'
import CartContext, { CartContextType } from './cart-context'

import CartItem from '../types/CartItem'

const defaultCartState = {
  items: [],
  totalAmount: 0,
}
const cartReducer = (
  state: { items: CartItem[]; totalAmount: number },
  action: { type: string; item?: CartItem; id?: string },
) => {
  switch (action.type) {
    case 'ADD':
      if (action.item !== undefined) {
        const updateItems = state.items.concat(action.item)
        const updateTotalAmount =
          state.totalAmount + action.item.price * action.item.amount
        return { items: updateItems, totalAmount: updateTotalAmount }
      }
      return state
    case 'REMOVE':
      return state
  }
  return defaultCartState
}

export const CartProvider: FC = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  )

  const addItemToCartHandler = (item: CartItem) => {
    dispatchCartAction({ type: 'ADD', item: item })
  }

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: 'REMOVE', id: id })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export const useCartContext = (): CartContextType => useContext(CartContext)
