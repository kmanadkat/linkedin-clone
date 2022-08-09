import {
	auth,
	createUserWithEmailAndPassword,
	updateProfile,
} from '../../firebase'

const signup = async ({ fullName, email, password, profilePicUrl }) => {
	try {
		const { user } = await createUserWithEmailAndPassword(auth, email, password)
		await updateProfile(user, {
			displayName: fullName,
			photoURL: profilePicUrl,
		})
		return user.toJSON()
	} catch (error) {
		console.log(error)
		return null
	}
}

export default signup
