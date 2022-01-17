import { FC } from 'react'

import MealItemForm from './MealItemForm'
import { useCartContext } from '../../../store/CartProvider'
import classes from './MealItem.module.css'

interface Props {
  id: string
  name: string
  description: string
  price: number
}

const MealItem: FC<Props> = (props) => {
  const { addItem } = useCartContext()
  const price = `${props.price.toFixed(2)}`

  const addToCartHandler = (amount: number) => {
    addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}

export default MealItem
