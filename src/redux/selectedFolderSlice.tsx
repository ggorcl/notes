import { createSlice } from '@reduxjs/toolkit';
const selectedFolderSlice = createSlice({
  name: 'selectedFolder',
  initialState: 'New Folder 1',
  reducers: {
    setSelectedFolder: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSelectedFolder } = selectedFolderSlice.actions;
export default selectedFolderSlice.reducer;
