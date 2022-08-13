import Auth from './Routes/Auth'
import Home from './Routes/Home'
import Loading from './Routes/Loading'

import useAuthObserver from './Hooks/useAuthObserver'

const App = () => {
  const { userFetched, authLoading } = useAuthObserver()

  if (authLoading) return <Loading />
  else if (!userFetched) return <Auth />

  return <Home />
}

export default App
