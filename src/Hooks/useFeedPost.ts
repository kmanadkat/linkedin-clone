import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Unsubscribe } from 'firebase/auth'

import { selectUser } from '../Store/features/userSlice'
import {
  addPost,
  fetchRealtimeData,
  likePost,
  unlikePost,
} from '../services/Post.service'
import { selectPosts } from '../Store/features/postsSlice'

const useFeedPost = () => {
  const dispatch = useDispatch()
  const { displayName, email, photoURL } = useSelector(selectUser)
  const { data: posts } = useSelector(selectPosts)
  const [newPostInput, setNewPostInput] = useState('')
  const unsubscribeRef = useRef<Unsubscribe>()

  // Listen For Realtime Data Changes
  useEffect(() => {
    unsubscribeRef.current = fetchRealtimeData(dispatch)

    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current()
      }
    }
  }, [dispatch])

  const sendPost = (event: React.FormEvent) => {
    event.preventDefault()
    addPost({
      displayName,
      subtitle: email,
      message: newPostInput,
      photoURL,
      likes: [],
    })
    setNewPostInput('')
  }

  const addLikeToPost = (postId: string) => {
    likePost({ displayName, photoURL, subtitle: email }, postId)
  }

  const removeLikeFromPost = (postId: string) => {
    unlikePost(email, postId)
  }

  return {
    newPostInput,
    setNewPostInput,
    sendPost,
    posts,
    addLikeToPost,
    removeLikeFromPost,
    currentUser: email,
  }
}

export default useFeedPost
