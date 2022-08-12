import { useSelector } from 'react-redux'
import { selectUser } from './Store/features/userSlice'

const App = () => {
  const user = useSelector(selectUser)
  console.log(user)

  return <div>App</div>
}

export default App
