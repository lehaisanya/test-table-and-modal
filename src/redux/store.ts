import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { mainTableReducer } from './mainTableReducer'

const rootReducer = combineReducers({
    mainTable: mainTableReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
