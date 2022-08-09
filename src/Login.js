import React, { useState } from 'react'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import login from './services/auth/login'
import { LINKEDIN_LOGO_FULL } from './utils/constants'
import signup from './services/auth/signup'

const Login = () => {
	const [showSignup, setShowSignup] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [fullName, setFullName] = useState('')
	const [profilePicUrl, setProfilePicUrl] = useState('')

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

		const user = await login(email, password)
		if (!user) {
			console.log('Login Failed')
		} else {
			_reset()
		}
	}

	const handleSignup = async (e) => {
		e.preventDefault()
		if (!email || !password || !fullName) return

		const user = await signup({ fullName, email, password, profilePicUrl })
		console.log(user)
		if (!user) {
			console.log('Signup Failed')
		} else {
			_reset()
		}
	}

	const handleFormToggle = () => {
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
				/>
			)}
		</div>
	)
}

export default Login
