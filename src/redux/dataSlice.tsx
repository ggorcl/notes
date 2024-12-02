import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Note {
  time: string;
  title: string;
  content: string;
}

const initialState: { [key: string]: Note[] } = {
  "New Folder 1": [
    { title: "New Note", content: "", time: new Date().getFullYear().toString() }
  ]
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
    },
    renameFolder: (state, action: PayloadAction<{ currentFolderName: string, newFolderName: string }>) => {
      const { currentFolderName, newFolderName } = action.payload;
      if (!state[currentFolderName]) return;
      const { [currentFolderName]: removedFolder, ...rest } = state;
      const newState = { ...rest, [newFolderName]: removedFolder };
      return newState;
    },
    addNote: (state, action: PayloadAction<{ folderName: string }>) => {
      const { folderName } = action.payload;
      if (!state[folderName]) return;
      state[folderName].push({
        title: "New Note",
        time: new Date().toDateString(),
        content: ""
      })
    }
  },
});

export const { updateDataSlice, addFolder, renameFolder, addNote } = dataSlice.actions;
export default dataSlice.reducer;
