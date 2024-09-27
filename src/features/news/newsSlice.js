import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    indonesiaNews: [],
    programmingNews: [],
  },
  reducers: {
    setIndonesiaNews: (state, action) => {
      state.indonesiaNews = action.payload;
    },
    setProgrammingNews: (state, action) => {
      state.programmingNews = action.payload;
    },
  },
});

export const { setIndonesiaNews, setProgrammingNews } = newsSlice.actions;

export default newsSlice.reducer;
