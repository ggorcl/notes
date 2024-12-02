import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Note {
  time: string;
  title: string;
  content: string;
}

type DataSliceState = Record<string, Note[]>;

const initialState: DataSliceState = {
  folder1: [
    {
      time: "10:00 AM",
      title: "page title 1-1",
      content: "hello hellohe\nllohellohellohellohellohello ",
    },
    {
      time: "12:00 AM",
      title: "page title 1-2",
      content: "abdfg",
    },
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
    }
  },
});

export const { updateDataSlice } = dataSlice.actions;
export default dataSlice.reducer;
