import { createSlice } from '@reduxjs/toolkit'

const initialState = { data: null }

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action) => {
			state.data = action.payload
		},
		logout: (state) => {
			state.data = null
		},
		signup: (state, action) => {
			state.data = { ...state.data, ...action.payload }
		},
	},
})

export const { login, logout, signup } = userSlice.actions

export const selectUser = (state) => state?.user?.data

export default userSlice.reducer
