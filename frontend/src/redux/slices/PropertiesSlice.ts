import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PropertywithId } from '../../Interface/interface'
interface FilterData {
  [key: string]: string;
}

// Define the shape of the payload
interface FilterPayload {
  label: string;
  value: string;
}
export interface PropertiesSlice {
  value: PropertywithId[];
  filtered: PropertywithId[];
  filterdata:FilterData
}

const initialState: PropertiesSlice = {
  value: [],
  filtered: [],
  filterdata:{}
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
    setFilterData: (state, action: PayloadAction<FilterPayload>) => {
      const { label, value } = action.payload;
      console.log(label, value);
      // Update or add the filter data
      state.filterdata[label] = value; // Use `label` as the key
    },
    resetFilterData: (state) => {
      state.filterdata = {}; // Reset filterdata to an empty object
    },
  },
})


export const { addData,setFilteredProperties,setFilterData,resetFilterData } = propertiesSlice.actions

export default propertiesSlice.reducer
