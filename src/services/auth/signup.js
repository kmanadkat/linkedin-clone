import { auth, createUserWithEmailAndPassword } from '../../firebase'

const signup = async ({ fullName, email, password, profilePicUrl }) => {
	try {
		const userCredentials = await createUserWithEmailAndPassword(
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

export default signup
