import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: {
    folder1: [{time: "current time", title: "page title", content: "abcdsdfsdf"}, {time: "current time 2", title: "page title 2", content: "abdfg"}],
    folder2: [{time: "current time", title: "page title", content: "abcdsdfsdf"}, {time: "current time 2", title: "page title 2", content: "abdfg"}],
    },
  reducers: {
    setDataSlice: (state, action) => action.payload,
  },
});

export const { setDataSlice } = dataSlice.actions;
export default dataSlice.reducer;
