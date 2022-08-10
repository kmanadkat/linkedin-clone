import toast from 'react-hot-toast'
import { auth, signInWithEmailAndPassword } from '../../firebase'

const login = async (email, password) => {
	try {
		const userCredentials = await signInWithEmailAndPassword(
			auth,
			email,
			password
		)
		return userCredentials.user.toJSON()
	} catch (error) {
		const eMsg = error.message
		if (eMsg.includes('wrong-password')) {
			toast.error('Incorrect password')
		} else if (eMsg.includes('user-not-found')) {
			toast('Account not found, please sign up first', { icon: '👋' })
		} else {
			toast.error(error.message)
		}
		return null
	}
}

export default login
