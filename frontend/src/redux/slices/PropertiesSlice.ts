import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PropertywithId } from '../../Interface/interface'

export interface PropertiesSlice {
  value: PropertywithId[];
  filtered: PropertywithId[];
}

const initialState: PropertiesSlice = {
  value: [],
  filtered: [],
};

const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<PropertywithId[]>) => {
      state.value = action.payload
    },
    setFilteredProperties: (state, action: PayloadAction<PropertywithId[]>) => {
      state.filtered = action.payload;
    },
  },
})


export const { addData,setFilteredProperties } = propertiesSlice.actions

export default propertiesSlice.reducer
