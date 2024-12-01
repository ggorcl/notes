import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: {
    folder1: [{time: "10:00 AM", title: "page title 1-1", content: "hello hellohe\nllohellohellohellohellohello "}, {time: "12:00 AM", title: "page title 1-2", content: "abdfg"}],
    folder2: [{time: "11:00 AM", title: "page title 2-1", content: "abcds dfsdf bcdsdfsdf\nabcdsdfsdfabcdsdfsdf"}, {time: "1:00 AM", title: "page title 2-2", content: "abdfg"}],
    },
  reducers: {
    setDataSlice: (state, action) => action.payload,
    updateDataSlice: (state, action) => {
      const {folder, index, newContent} = action.payload;
      if(state[folder] && state[folder][index]){
        state[folder][index].content = newContent;
      }
    }
  },
});

export const { setDataSlice, updateDataSlice} = dataSlice.actions;
export default dataSlice.reducer;
