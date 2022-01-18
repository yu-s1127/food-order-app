import { createContext } from 'react'
import CartItemType from '../types/CartItem'

export interface CartContextType {
  items: CartItemType[]
  totalAmount: number
  addItem: (item: CartItemType) => void
  removeItem: (id: string) => void
}

const CartContext = createContext({} as CartContextType)

export default CartContext
