import { FC, FormEvent, useRef, useState } from 'react'

import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

interface Props {
  id: string
  onAddToCart: (amount: number) => void
}

const MealItemForm: FC<Props> = (props) => {
  const [amountIsValid, setAmountIsValid] = useState<boolean>(true)
  const amountInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()

    const enteredAmount = amountInputRef.current?.value
    if (enteredAmount === undefined) {
      setAmountIsValid(false)
      return
    }

    const enteredAmountNumber = parseInt(enteredAmount)

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return
    }

    props.onAddToCart(enteredAmountNumber)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5) .</p>}
    </form>
  )
}

export default MealItemForm
