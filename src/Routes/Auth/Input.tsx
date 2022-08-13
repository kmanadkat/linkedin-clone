import { ChangeEventHandler } from 'react'
import './Input.scss'

interface InputProps {
  id: string
  label: string
  name: string
  type: 'text' | 'email' | 'password'
  isRequired: boolean
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Input = ({
  id,
  label,
  name,
  type,
  isRequired,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        required={isRequired}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
