import { FC } from 'react'
import { useCartContext } from '../../store/CartProvider'

import CartItem from './CartItem'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartItemType from '../../types/CartItem'

interface Props {
  onClose?: () => void
}

const Cart: FC<Props> = (props) => {
  const CartCtx = useCartContext()

  const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`
  const hasItems = CartCtx.items.length > 0

  const cartItemRemoveHandler = (id: string) => {
    CartCtx.removeItem(id)
  }

  const cartItemAddHandler = (item: CartItemType) => {
    CartCtx.addItem({ ...item, amount: 1 })
  }

  const cartItems = (
    <div className={classes['cart-items']}>
      {CartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </div>
  )

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </div>
    </Modal>
  )
}

export default Cart
