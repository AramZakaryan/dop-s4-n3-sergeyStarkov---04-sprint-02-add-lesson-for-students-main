import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { setAppStatusAC } from '../../app/app-reducer.ts'
import { AxiosError } from 'axios'
import { isAxiosError } from 'axios'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setAppStatusAC('loading'))
    const res = await decksAPI.fetchDecks()
    dispatch(setDecksAC(res.data.items))
    dispatch(setAppStatusAC('succeeded'))
  } catch (e) {
    dispatch(setAppStatusAC('failed'))
  }
}


export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {

  try {
    const res = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))
  } catch (err) {

    let errorMessage: string
    if (isAxiosError(err)) {
      errorMessage = err.response ? err.response.data.errorMessages[0].message : err.message
    } else {
      errorMessage = (err as Error).message
    }

    console.log(errorMessage)

  }
}
