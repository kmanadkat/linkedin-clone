import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const Auth = () => {
  const [showSignup, setShowSignup] = useState(false)
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [signupForm, setSignupForm] = useState({
    displayName: '',
    photoUrl: '',
    email: '',
    password: '',
  })

  const handleLoginInput = (event: InputEvent) => {
    const { name, value } = event.target as HTMLInputElement
    setLoginForm((prev) => ({ ...prev, [name]: value }))
  }
  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }
  const handleLoginReset = () => {
    setLoginForm({ email: '', password: '' })
  }

  const handleSignupInput = (event: InputEvent) => {
    const { name, value } = event.target as HTMLInputElement
    setSignupForm((prev) => ({ ...prev, [name]: value }))
  }
  const handleSignupSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }
  const handleSignupReset = () => {
    setSignupForm({ displayName: '', photoUrl: '', email: '', password: '' })
  }

  if (showSignup) return <SignupForm />

  return <LoginForm />
}

export default Auth
