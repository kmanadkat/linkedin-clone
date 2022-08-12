import Auth from './Routes/Auth'
import Home from './Routes/Home'
import Loading from './Routes/Loading'

import useAuthentication from './Hooks/useAuthentication'

const App = () => {
  const { userFetched, authLoading } = useAuthentication()

  if (authLoading) return <Loading />
  else if (!userFetched) return <Auth />

  return <Home />
}

export default App
