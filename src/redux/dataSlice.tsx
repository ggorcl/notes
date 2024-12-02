import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Note {
  time: string;
  title: string;
  content: string;
}

const initialState: { [key: string]: Note[] } = {
  "New Folder 1": [

  ],
  folder2: [
    {
      time: "11:00 AM",
      title: "page title 2-1",
      content: "abcds dfsdf bcdsdfsdf\nabcdsdfsdfabcdsdfsdf",
    },
    {
      time: "1:00 AM",
      title: "page title 2-2",
      content: "abdfg",
    },
  ],
};

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: initialState,
  reducers: {
    updateDataSlice: (state, action: PayloadAction<{ folder: string, index: number, newContent: string }>) => {
      const { folder, index, newContent } = action.payload;
      if (state[folder] && state[folder][index]) {
        state[folder][index].content = newContent;
      }
    },
    addFolder: (state, action: PayloadAction<void>) => {
      const totalFolders = Object.keys(state).length;
      state[`New Folder ${totalFolders + 1}`] = []
    }
  },
});

export const { updateDataSlice, addFolder } = dataSlice.actions;
export default dataSlice.reducer;
