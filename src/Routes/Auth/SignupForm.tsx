import { ChangeEventHandler, FormEventHandler, MouseEventHandler } from 'react'
import { SignupForm as SignupModel } from '../../Models/Signup'
import Input from './Input'
import Button from './Button'

interface SignupFormProps {
  handleFormToggle: MouseEventHandler<HTMLSpanElement>
  handleInput: ChangeEventHandler<HTMLInputElement>
  signupForm: SignupModel
  handleSubmit: FormEventHandler<HTMLFormElement>
  buttonState: string
}

const SignupForm = ({
  handleFormToggle,
  handleInput,
  signupForm,
  handleSubmit,
  buttonState,
}: SignupFormProps) => {
  return (
    <div className="login__form">
      <h1>Make the most of your professional life</h1>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="login__form__container">
          <Input
            id="signupFullName"
            label="Full Name"
            type="text"
            name="displayName"
            value={signupForm.displayName}
            onChange={handleInput}
            isRequired
          />

          <Input
            id="signupPhotoUrl"
            label="Profile Photo URL (optional)"
            type="text"
            name="photoURL"
            value={signupForm.photoURL}
            onChange={handleInput}
            isRequired={false}
          />

          <Input
            id="signupEmail"
            label="Email Id"
            type="email"
            name="email"
            value={signupForm.email}
            onChange={handleInput}
            isRequired
          />
          <Input
            id="signupPassword"
            label="Password"
            type="password"
            name="password"
            value={signupForm.password}
            onChange={handleInput}
            isRequired
          />

          <Button type="submit" state={buttonState} label="Join now" />
          <p>
            Already on LinkedIn? <span onClick={handleFormToggle}>Sign in</span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default SignupForm
