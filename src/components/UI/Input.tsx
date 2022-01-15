import { FC, InputHTMLAttributes } from 'react'

import classes from './Input.module.css'

interface Props {
  label?: string
  input: InputHTMLAttributes<HTMLInputElement>
}

const Input: FC<Props> = (props) => {
  return (
    <div className={classes.input}>
      {props.label && <label htmlFor={props.input.id}>{props.label}</label>}
      <input {...props.input} />
    </div>
  )
}

export default Input
