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
		console.log(error)
		return null
	}
}

export default login
