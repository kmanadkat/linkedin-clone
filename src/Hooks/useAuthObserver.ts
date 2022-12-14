import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Profile } from '../Models/Profile'
import { authObserver } from '../services/Auth.service'
import { selectUser } from '../Store/features/userSlice'

const useAuthObserver = () => {
  const user: Profile = useSelector(selectUser)

  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    authObserver(dispatch, setIsLoading)
  }, [dispatch])

  return { userFetched: user.fetched, authLoading: isLoading }
}

export default useAuthObserver
