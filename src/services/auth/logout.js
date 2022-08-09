import { auth, signOut } from '../../firebase'

const logout = async (dispatch) => {
	try {
		await signOut(auth)
	} catch (error) {
		console.log(error)
	}
}

export default logout
