import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { Post } from '../../Models/Post'

interface PostsInitialState {
  data: Post[]
}

const initialState: PostsInitialState = {
  data: [],
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postsRequest: (state: PostsInitialState, action: PayloadAction<any>) => {
      state.data = action.payload
    },
  },
})

// Selector
export const selectPosts = (state: RootState) => state.posts

// Actions & Reducer
export const { postsRequest } = postsSlice.actions
export default postsSlice.reducer
