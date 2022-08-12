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
      state.id = action.payload.id
      state.displayName = action.payload.displayName
      state.photoURL = action.payload.photoURL
      state.email = action.payload.email
      state.fetched = action.payload.fetched
    },
    userLogout: (state: Profile) => {
      state.id = ''
      state.displayName = ''
      state.photoURL = ''
      state.email = ''
      state.fetched = false
    },
  },
})

// Selector
export const selectUser = (state: RootState) => state.user

// Actions & Reducer
export const { userLogin, userLogout, userSignup } = userSlice.actions
export default userSlice.reducer
