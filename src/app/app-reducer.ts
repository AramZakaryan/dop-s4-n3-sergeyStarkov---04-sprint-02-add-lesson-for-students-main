export type AppStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as AppStatusType,
  error: null as string | null,
}

export type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: AppActionsType): AppStateType => {
  switch (action.type) {
    case 'APP/CHANGE-REQUEST-STATUS':
      return {
        ...state,
        status: action.newRequestStatus,
      }
    default:
      return state
  }
}


////////// App Action creators and their types

type AppActionsType = setAppStatusActionType

type setAppStatusActionType = ReturnType<typeof setAppStatusAC>

export const setAppStatusAC = (status: AppStatusType) =>
  ({ type: 'APP/CHANGE-REQUEST-STATUS', newRequestStatus: status } as const)

