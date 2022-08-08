import React, { useState } from 'react'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import { LINKEDIN_LOGO_FULL } from './utils/constants'

const Login = () => {
	const [showSignup, setShowSignup] = useState(false)

	const handleFormToggle = () => {
		setShowSignup((prev) => !prev)
	}

	return (
		<div className='login'>
			<div className='login__header'>
				<img src={LINKEDIN_LOGO_FULL} alt='Linkedin Logo' />
			</div>
			{!showSignup && <LoginForm handleFormToggle={handleFormToggle} />}
			{showSignup && <SignupForm handleFormToggle={handleFormToggle} />}
		</div>
	)
}

export default Login
