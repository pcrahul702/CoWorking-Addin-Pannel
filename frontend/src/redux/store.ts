import { configureStore } from '@reduxjs/toolkit'
import PropertiesSlice from './slices/PropertiesSlice'

export const store = configureStore({
  reducer: {PropertiesSlice:PropertiesSlice},
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch