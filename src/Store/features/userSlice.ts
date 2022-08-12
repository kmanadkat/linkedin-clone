import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { Profile } from '../../Models/Profile'
import { SignupPayload } from '../../Models/Signup'

const initialState: Profile = {
  id: '',
  displayName: '',
  photoURL: '',
  email: '',
  fetched: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userSignup: (state: Profile, action: PayloadAction<SignupPayload>) => {
      state.photoURL = action.payload.photoURL
      state.displayName = action.payload.displayName
    },
    userLogin: (state: Profile, action: PayloadAction<Profile>) => {
      state = { ...action.payload }
    },
    userLogout: (state: Profile) => {
      state = { ...initialState }
    },
  },
})

// Selector
export const selectUser = (state: RootState) => state.user

// Actions & Reducer
export const { userLogin, userLogout, userSignup } = userSlice.actions
export default userSlice.reducer
