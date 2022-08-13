import './Button.scss'

interface ButtonProps {
  state: string
  type: 'button' | 'submit' | 'reset' | undefined
  label: string
}

const Button = ({ state, type, label }: ButtonProps) => {
  return (
    <button
      className={`btn btn-primary ${state}`}
      disabled={state !== 'idle'}
      type={type}>
      {state !== 'busy' && label}
      {state === 'busy' && <div className="loader"></div>}
    </button>
  )
}

export default Button
