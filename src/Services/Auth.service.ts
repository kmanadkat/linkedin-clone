import toast from 'react-hot-toast'
import { Dispatch } from '@reduxjs/toolkit'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'

import { auth } from './Firebase.service'
import { userLogin, userLogout } from '../Store/features/userSlice'
import { Profile } from '../Models/Profile'
import { SignupForm } from '../Models/Signup'

export const authObserver = (dispatch: Dispatch, setIsLoading: Function) => {
  onAuthStateChanged(auth, (user) => {
    setIsLoading(false)

    if (user) {
      const userProfile: Profile = {
        id: user.uid,
        displayName: user.displayName ?? '',
        photoURL: user.photoURL ?? '',
        email: user.email ?? '',
        fetched: true,
      }
      dispatch(userLogin(userProfile))
    } else {
      dispatch(userLogout())
    }
  })
}

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    return userCredentials.user.toJSON()
  } catch (error: any) {
    const eMsg = error?.message
    if (eMsg.includes('wrong-password')) {
      toast.error('Incorrect password')
    } else if (eMsg.includes('user-not-found')) {
      toast('Account not found, please sign up first', { icon: '👋' })
    } else {
      toast.error(error?.message)
    }
    return null
  }
}

export const signupUser = async ({
  displayName,
  email,
  password,
  photoURL,
}: SignupForm) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(user, {
      displayName,
      photoURL,
    })
    return user.toJSON()
  } catch (error) {
    console.log(error)
    return null
  }
}

export const logoutUser = async () => {
  await signOut(auth)
}
