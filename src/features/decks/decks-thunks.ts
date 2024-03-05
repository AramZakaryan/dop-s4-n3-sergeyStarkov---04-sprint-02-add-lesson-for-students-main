import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { setAppStatusAC } from '../../app/app-reducer.ts'

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

    // throw new Error('uxux')

    const res = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))
  } catch (err: any) {

    const errorMessage = err.code === 'ERR_BAD_REQUEST'
      ? err.response.data.errorMessages[0].message
      : err.message

    // let errorMessage
    // if (err.code === 'ERR_BAD_REQUEST') {
    //   errorMessage = err.response.data.errorMessages[0].message
    // } else if (err.code === 'ERR_NETWORK') {
    //   errorMessage = err.message
    // } else {
    //   errorMessage = err.message
    // }

    console.log(errorMessage)

  }
}
