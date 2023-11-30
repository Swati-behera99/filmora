import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'home',
  initialState : {
    url : {},
    genres : {},
  },
  reducers: {
    getApiConfigretion : (state, action) => {
      state.url = action.payload;
    },
    getGenres : (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { getApiConfigretion, getGenres } = counterSlice.actions;

export default counterSlice.reducer;