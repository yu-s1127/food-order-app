import { InputHTMLAttributes, forwardRef } from 'react'

import classes from './Input.module.css'

interface Props {
  label?: string
  input: InputHTMLAttributes<HTMLInputElement>
}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <div className={classes.input}>
      {props.label && <label htmlFor={props.input.id}>{props.label}</label>}
      <input {...props.input} ref={ref} />
    </div>
  )
})

Input.displayName = 'Input'

export default Input
