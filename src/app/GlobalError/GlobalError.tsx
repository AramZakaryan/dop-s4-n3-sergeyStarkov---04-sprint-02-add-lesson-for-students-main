import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useAppSelector } from '../store.ts'
import { selectAppError } from '../app-selectors.ts'
import { useDispatch } from 'react-redux'
import { setError } from '../../common/utils/set-error.ts'
import { setAppErrorAC } from '../app-reducer.ts'

export const GlobalError = () => {
  const errorMessage = useAppSelector(selectAppError)
  const dispatch = useDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(setAppErrorAC(null))
    }
  }, [errorMessage])

  return <ToastContainer theme="dark" autoClose={3000} />

}
