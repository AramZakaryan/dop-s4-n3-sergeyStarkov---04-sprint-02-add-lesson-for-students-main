import { AppRootState } from './store.ts'


export const selectorAppStatus = (state:AppRootState)=> state.app.status