export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

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

type AppActionsType = ChangeRequestStatusActionType

type ChangeRequestStatusActionType = ReturnType<typeof changeRequestStatusAC>

export const changeRequestStatusAC = (newRequestStatus: RequestStatusType) => ({
  type: 'APP/CHANGE-REQUEST-STATUS', newRequestStatus,
})

