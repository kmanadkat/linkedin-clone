import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import userReducer from './features/userSlice'
import postsReducer from './features/postsSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
  },
  middleware: [logger],
})

export type RootState = ReturnType<typeof store.getState>
export default store
