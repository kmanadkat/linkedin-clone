import { db, addDoc, collection, serverTimestamp } from '../../firebase'

const addPost = async (post) => {
	const docRef = await addDoc(collection(db, 'posts'), {
		...post,
		createdAt: serverTimestamp(),
	})
	console.log('Document written with ID: ', docRef.id)
}

export { addPost }
