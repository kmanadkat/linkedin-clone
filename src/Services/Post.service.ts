import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore'
import { Post } from '../Models/Post'
import { db } from './Firebase.service'

export const fetchRealtimeData = (setPosts: Function) => {
  const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'))
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const newPostsData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    setPosts(newPostsData)
  })
  return unsubscribe
}

export const addPost = async (post: Post) => {
  await addDoc(collection(db, 'posts'), {
    ...post,
    createdAt: serverTimestamp(),
  })
}
