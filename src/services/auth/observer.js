import { login, logout } from '../../features/userSlice'
import { auth, onAuthStateChanged } from '../../firebase'

const observer = (dispatch, setIsLoaded = null) => {
	onAuthStateChanged(auth, (user) => {
		// Hide Initial Loading Screen
		if (setIsLoaded) setIsLoaded(true)

		if (user) {
			dispatch(login(user.toJSON()))
		} else {
			dispatch(logout())
		}
	})
}

export default observer
