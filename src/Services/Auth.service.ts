import { Dispatch } from '@reduxjs/toolkit'
import { onAuthStateChanged } from 'firebase/auth'

import { auth } from './Firebase.service'
import { userLogin, userLogout } from '../Store/features/userSlice'
import { Profile } from '../Models/Profile'

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
