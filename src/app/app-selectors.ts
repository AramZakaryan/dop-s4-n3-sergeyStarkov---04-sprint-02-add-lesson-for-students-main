import { AppRootState } from './store.ts'
import { AppStateType, AppStatusType } from './app-reducer.ts'


export const selectAppStatus = (state: AppRootState): AppStatusType => state.app.status