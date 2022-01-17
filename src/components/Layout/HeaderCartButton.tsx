import { ButtonHTMLAttributes, FC } from 'react'

import CartIcon from '../Cart/CartIcon'
import { useCartContext } from '../../store/CartProvider'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => {
  const { items } = useCartContext()

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  return (
    <button className={[classes.button, props.className].join(' ')} {...props}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
