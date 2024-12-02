import { createSlice } from '@reduxjs/toolkit';

const primaryColorSlice = createSlice({
  name: 'primaryColor',
  initialState: '#E49273', // Default color
  reducers: {
    setPrimaryColor: (state, action) => action.payload, // Update the color
  },
});

export const { setPrimaryColor } = primaryColorSlice.actions;
export default primaryColorSlice.reducer;
