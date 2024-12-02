import { configureStore } from '@reduxjs/toolkit';
import primaryColorReducer from './primaryColorSlice';
import dataSliceReducer from './dataSlice'
import selectedFolderReducer from './selectedFolderSlice';
import selectedNoteReducer from './selectedNoteSlice';


const store = configureStore({
  reducer: {
    primaryColor: primaryColorReducer,
    dataSlice: dataSliceReducer,
    selectedFolder: selectedFolderReducer,
    selectedNote: selectedNoteReducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;