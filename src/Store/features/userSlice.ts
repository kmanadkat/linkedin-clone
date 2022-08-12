import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { SignupPayload } from '../../Models/Signup'

const initialState = { data: null }

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state: { data: null }, action: PayloadAction<any>) => {
			state.data = action.payload
		},
		logout: (state: { data: null }) => {
			state.data = null
		},
		signup: (state: any, action: PayloadAction<SignupPayload>) => {
			state.data = { ...state.data, ...action.payload }
		},
	},
})

export const { login, logout, signup } = userSlice.actions

export const selectUser = (state: RootState) => state?.user?.data

export default userSlice.reducer
