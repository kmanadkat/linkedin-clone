import { login, logout } from '../../features/userSlice'
import { auth, onAuthStateChanged } from '../../firebase'

const observer = (dispatch) => {
	onAuthStateChanged(auth, (user) => {
		if (user) {
			dispatch(login(user.toJSON()))
		} else {
			dispatch(logout())
		}
	})
}

export default observer
