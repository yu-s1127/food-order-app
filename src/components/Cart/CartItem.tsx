import { FC } from 'react'

import CartItemType from '../../types/CartItem'
import classes from './CartItem.module.css'

interface Props extends CartItemType {
  onRemove: () => void
  onAdd: () => void
}

const CartItem: FC<Props> = (props) => {
  const price = `$${props.price.toFixed(2)}`

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  )
}

export default CartItem
