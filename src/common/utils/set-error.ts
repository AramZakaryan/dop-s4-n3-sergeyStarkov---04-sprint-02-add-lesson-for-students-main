import { Dispatch } from 'redux'
import { isAxiosError } from 'axios'
import { setAppErrorAC } from '../../app/app-reducer.ts'

export function setError(err: any, dispatch: Dispatch) {
  let errorMessage: string
  if (isAxiosError(err)) {
    errorMessage = err.response ? err.response.data.errorMessages[0].message : err.message
  } else {
    errorMessage = (err as Error).message
  }
  dispatch(setAppErrorAC(errorMessage))
  // console.log(errorMessage)
}