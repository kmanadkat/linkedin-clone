import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import userReducer from './features/userSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [logger],
})

export type RootState = ReturnType<typeof store.getState>
export default store
