import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Unsubscribe } from 'firebase/auth'

import { Post } from '../Models/Post'
import { selectUser } from '../Store/features/userSlice'
import { addPost, fetchRealtimeData } from '../Services/Post.service'

const useFeedPost = () => {
  const { displayName, email, photoURL } = useSelector(selectUser)
  const [newPostInput, setNewPostInput] = useState('')
  const [posts, setPosts] = useState<Post[]>([])
  const unsubscribeRef = useRef<Unsubscribe>()

  // Listen For Realtime Data Changes
  useEffect(() => {
    unsubscribeRef.current = fetchRealtimeData(setPosts)

    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current()
      }
    }
  }, [])

  const sendPost = (event: React.FormEvent) => {
    event.preventDefault()
    addPost({
      displayName: displayName,
      subtitle: email,
      message: newPostInput,
      photoUrl: photoURL,
    })
    setNewPostInput('')
  }

  return { newPostInput, setNewPostInput, sendPost, posts }
}

export default useFeedPost
