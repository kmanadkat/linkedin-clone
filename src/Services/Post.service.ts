import { Dispatch } from '@reduxjs/toolkit'
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  doc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore'
import { Like, Post } from '../Models/Post'
import { db } from '../services/Firebase.service'
import { postsRequest } from '../Store/features/postsSlice'

export const fetchRealtimeData = (dispatch: Dispatch) => {
  const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'))
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const newPostsData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    dispatch(postsRequest(newPostsData))
  })
  return unsubscribe
}

export const addPost = async (post: Post) => {
  await addDoc(collection(db, 'posts'), {
    ...post,
    createdAt: serverTimestamp(),
  })
}

export const likePost = async (reaction: Like, postId: string) => {
  const docRef = doc(db, 'posts', postId)
  const createdAt = { seconds: Math.floor(Date.now() / 1000) }
  await updateDoc(docRef, {
    likes: arrayUnion({ ...reaction, createdAt: createdAt }),
  })
}
