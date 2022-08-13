import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

import useLogin from '../../Hooks/useLogin'
import useSignup from '../../Hooks/useSignup'
import { LINKEDIN_LOGO_FULL } from '../../Constants'
import './index.scss'

const Auth = () => {
  const { loginForm, loginBtnState, handleLoginInput, handleLoginSubmit } =
    useLogin()

  const {
    showSignup,
    toggleForm,
    signupForm,
    handleSignupInput,
    handleSignupSubmit,
    signupBtnState,
  } = useSignup()

  return (
    <div className="auth">
      <div className="auth__header">
        <img src={LINKEDIN_LOGO_FULL} alt="Linkedin Logo" />
      </div>
      {!showSignup && (
        <LoginForm
          handleFormToggle={toggleForm}
          handleInput={handleLoginInput}
          loginForm={loginForm}
          handleSubmit={handleLoginSubmit}
          buttonState={loginBtnState}
        />
      )}
      {showSignup && (
        <SignupForm
          handleFormToggle={toggleForm}
          handleInput={handleSignupInput}
          signupForm={signupForm}
          handleSubmit={handleSignupSubmit}
          buttonState={signupBtnState}
        />
      )}
    </div>
  )
}

export default Auth
