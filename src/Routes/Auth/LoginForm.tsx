import { ChangeEventHandler, FormEventHandler, MouseEventHandler } from 'react'
import Input from './Input'
import Button from './Button'

import './LoginForm.scss'

interface LoginFormProps {
  handleFormToggle: MouseEventHandler<HTMLSpanElement>
  handleInput: ChangeEventHandler<HTMLInputElement>
  loginForm: { email: string; password: string }
  handleSubmit: FormEventHandler<HTMLFormElement>
  buttonState: string
}

const LoginForm = ({
  handleFormToggle,
  handleInput,
  loginForm,
  handleSubmit,
  buttonState,
}: LoginFormProps) => {
  return (
    <div className="login__form">
      <h1>Stay updated on your professional world</h1>

      <form onSubmit={handleSubmit}>
        <div className="login__form__container">
          <Input
            id="loginEmail"
            label="Email Id"
            type="email"
            name="email"
            value={loginForm.email}
            onChange={handleInput}
            isRequired
          />
          <Input
            id="loginPassword"
            label="Password"
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleInput}
            isRequired
          />

          <Button label="Sign in" type="submit" state={buttonState} />
          <p>
            New to LinkedIn? <span onClick={handleFormToggle}>Join now</span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
