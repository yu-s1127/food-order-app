import { createContext } from 'react'
import CartItem from '../types/CartItem'

export interface CartContextType {
  items: CartItem[]
  totalAmount: number
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
}

const CartContext = createContext({} as CartContextType)

export default CartContext
