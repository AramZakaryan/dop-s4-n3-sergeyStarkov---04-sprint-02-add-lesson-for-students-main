import { isAxiosError } from 'axios'

export type AppStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as AppStatusType,
  error: null as string | null,
}

export type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: AppActionsType): AppStateType => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return {
        ...state,
        status: action.newRequestStatus,
      }
    case 'APP/SET-ERROR':
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}


////////// App Action creators and their types

type AppActionsType = setAppStatusActionType

type setAppStatusActionType = ReturnType<typeof setAppStatusAC> | ReturnType<typeof setAppErrorAC>

export const setAppStatusAC = (status: AppStatusType) =>
  ({ type: 'APP/SET-STATUS', newRequestStatus: status } as const)

export const setAppErrorAC = (error: string | null) =>
  ({ type: 'APP/SET-ERROR', error } as const)



