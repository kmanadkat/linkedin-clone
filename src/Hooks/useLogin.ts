import { ChangeEvent, useState } from 'react'
import { loginUser } from '../services/Auth.service'

const useLogin = () => {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [buttonState, setButtonState] = useState('idle')

  const handleLoginInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement
    setLoginForm((prev) => ({ ...prev, [name]: value }))
  }
  const handleLoginSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const { email, password } = loginForm
    if (!email || !password) return

    setButtonState('busy')
    const user = await loginUser(email, password)
    if (!user) {
      setButtonState('idle')
    } else {
      _handleLoginReset()
    }
  }
  const _handleLoginReset = () => {
    setLoginForm({ email: '', password: '' })
  }

  return {
    loginForm,
    loginBtnState: buttonState,
    handleLoginInput,
    handleLoginSubmit,
  }
}

export default useLogin
