import { db, onSnapshot, query, orderBy, collection } from '../../firebase'

const fetchRealtimeData = (setPosts) => {
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

export { fetchRealtimeData }
