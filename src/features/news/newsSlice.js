import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunk for fetching Indonesia News
export const fetchIndonesiaNews = createAsyncThunk(
  "news/fetchIndonesiaNews",
  async () => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Indonesia&fq=headline:("Indonesia") AND document_type:("article")&api-key=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.response.docs);
    return data.response.docs;
  }
);

// Async Thunk for fetching Programming News
export const fetchProgrammingNews = createAsyncThunk(
  "news/fetchProgrammingNews",
  async () => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Computer&fq=section_name:("Technology")AND document_type:("article")&api-key=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.response.docs);
    return data.response.docs;
  }
);

export const fetchSearchNews = createAsyncThunk(
  "news/fetchSearchNews",
  async (keyword) => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&fq=section_name:("World")AND document_type:("article")&api-key=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.response.docs);
    return data.response.docs;
  }
);

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    indonesiaNews: [],
    programmingNews: [],
    searchNews: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    //Handle for Indonesia News
    builder
      .addCase(fetchIndonesiaNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchIndonesiaNews.fulfilled, (state, action) => {
        state.loading = false;
        state.indonesiaNews = action.payload;
      })
      .addCase(fetchIndonesiaNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Handle for Programming News
    builder
      .addCase(fetchProgrammingNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProgrammingNews.fulfilled, (state, action) => {
        state.loading = false;
        state.programmingNews = action.payload;
      })
      .addCase(fetchProgrammingNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Handle Search News
    builder
      .addCase(fetchSearchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.searchNews = action.payload;
      })
      .addCase(fetchSearchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { indonesiaNews, programmingNews, searchNews, loading, error } =
  newsSlice.actions;

export default newsSlice.reducer;
