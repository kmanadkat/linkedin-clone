import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import login from './services/auth/login'
import { LINKEDIN_LOGO_FULL } from './utils/constants'
import signup from './services/auth/signup'
import { signup as signupAction } from './features/userSlice'

const Login = () => {
	const dispatch = useDispatch()
	const [showSignup, setShowSignup] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [fullName, setFullName] = useState('')
	const [profilePicUrl, setProfilePicUrl] = useState('')
	const [buttonState, setButtonState] = useState('idle')

	const handleInput = (e) => {
		const { value, id } = e.target
		if (id === 'email') {
			setEmail(value)
		} else if (id === 'password') {
			setPassword(value)
		} else if (id === 'fullName') {
			setFullName(value)
		} else {
			setProfilePicUrl(value)
		}
	}

	const _reset = () => {
		setEmail('')
		setPassword('')
		setFullName('')
		setProfilePicUrl('')
	}

	const handleLogin = async (e) => {
		e.preventDefault()
		if (!email || !password) return

		setButtonState('busy')
		const user = await login(email, password)
		if (!user) {
			console.log('Login Failed')
			setButtonState('idle')
		} else {
			_reset()
		}
	}

	const handleSignup = async (e) => {
		e.preventDefault()
		if (!email || !password || !fullName) return

		setButtonState('busy')
		const user = await signup({ fullName, email, password, profilePicUrl })
		if (!user) {
			console.log('Signup Failed')
			setButtonState('idle')
		} else {
			dispatch(
				signupAction({
					displayName: fullName,
					photoURL: profilePicUrl,
				})
			)
			_reset()
		}
	}

	const handleFormToggle = () => {
		_reset()
		setShowSignup((prev) => !prev)
	}

	return (
		<div className='login'>
			<div className='login__header'>
				<img src={LINKEDIN_LOGO_FULL} alt='Linkedin Logo' />
			</div>
			{!showSignup && (
				<LoginForm
					handleFormToggle={handleFormToggle}
					handleInput={handleInput}
					email={email}
					password={password}
					handleSubmit={handleLogin}
					buttonState={buttonState}
				/>
			)}
			{showSignup && (
				<SignupForm
					handleFormToggle={handleFormToggle}
					handleInput={handleInput}
					email={email}
					password={password}
					fullName={fullName}
					profilePicUrl={profilePicUrl}
					handleSubmit={handleSignup}
					buttonState={buttonState}
				/>
			)}
		</div>
	)
}

export default Login
