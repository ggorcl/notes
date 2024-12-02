import { createSlice } from '@reduxjs/toolkit';
const selectedNoteIndexSlice = createSlice({
  name: 'selectedNoteIndex',
  initialState: 0,
  reducers: {
    setSelectedNoteIndex: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSelectedNoteIndex } = selectedNoteIndexSlice.actions;
export default selectedNoteIndexSlice.reducer;
