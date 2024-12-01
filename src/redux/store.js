import { configureStore } from '@reduxjs/toolkit';
import primaryColorReducer from './primaryColorSlice.js';
import dataSliceReducer from './dataSlice.js'
import selectedFolderReducer from './selectedFolderSlice.js';
import selectedNoteReducer from './selectedNoteSlice.js';


const store = configureStore({
  reducer: {
    primaryColor: primaryColorReducer,
    dataSlice: dataSliceReducer,
    selectedFolder: selectedFolderReducer,
    selectedNote: selectedNoteReducer
  },
});

export default store;
