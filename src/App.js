import { useSelector } from 'react-redux'
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Widgets from './components/Widgets/Widgets'
import { selectUser } from './features/userSlice'
import Login from './Login'

function App() {
	// Check If User Loggedin
	const user = useSelector(selectUser)
	if (!user) return <Login />

	return (
		<div className='app'>
			<Header />

			<div className='app__body'>
				<Sidebar />
				<Feed />
				<Widgets />
			</div>
		</div>
	)
}

export default App
