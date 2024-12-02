import { createSlice } from '@reduxjs/toolkit';
const selectedNoteSlice = createSlice({
  name: 'selectedNote',
  initialState: 0,
  reducers: {
    setSelectedNote: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSelectedNote } = selectedNoteSlice.actions;
export default selectedNoteSlice.reducer;
