import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { signupUser } from '../Services/Auth.service'
import { userSignup } from '../Store/features/userSlice'

const useSignup = () => {
  const dispatch = useDispatch()
  const [showSignup, setShowSignup] = useState(false)
  const [signupForm, setSignupForm] = useState({
    displayName: '',
    photoURL: '',
    email: '',
    password: '',
  })
  const [buttonState, setButtonState] = useState('idle')

  const handleSignupInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement
    setSignupForm((prev) => ({ ...prev, [name]: value }))
  }
  const handleSignupSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const { email, password, displayName, photoURL } = signupForm
    if (!email || !password || !displayName) return

    setButtonState('busy')
    const user = await signupUser({ displayName, email, password, photoURL })
    if (!user) {
      console.log('Signup Failed')
      setButtonState('idle')
    } else {
      dispatch(
        userSignup({
          displayName,
          photoURL,
        })
      )
      _handleSignupReset()
    }
  }
  const _handleSignupReset = () => {
    setSignupForm({ displayName: '', photoURL: '', email: '', password: '' })
  }

  const toggleForm = () => {
    setShowSignup((prev) => !prev)
  }

  return {
    showSignup,
    signupForm,
    handleSignupInput,
    handleSignupSubmit,
    toggleForm,
    signupBtnState: buttonState,
  }
}

export default useSignup
