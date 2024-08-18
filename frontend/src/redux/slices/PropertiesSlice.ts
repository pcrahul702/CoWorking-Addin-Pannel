import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PropertywithId } from '../../Interface/interface'

export interface PropertiesSlice {
  value: PropertywithId[]
}

const initialState: PropertiesSlice = {
  value: [],
}

const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<PropertywithId[]>) => {
      state.value = action.payload
    },
  },
})


export const { addData } = propertiesSlice.actions

export default propertiesSlice.reducer
