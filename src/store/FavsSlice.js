import { createSlice } from "@reduxjs/toolkit";

const savedSlice = createSlice({
  name: "saved",
  initialState: {
    saved: [],
  },
  reducers: {
    saveMovie: (state, action) => {
      const savedMovie = state.saved.find(
        (movie) => movie.id === action.payload.id
      );
      if (savedMovie) {
        alert("Already Added");
      } else {
        state.saved.push({ ...action.payload.id });
      }
    },
    removeMovie: (state, action) => {
      const removeMovie = state.saved.filter(
        (movie) => movie.id !== action.payload
      );
      state.saved = removeMovie;
    },
  },
  clearAll: (state) => {
    state.saved = [];
  },
});

export const savedReducer = savedSlice.reducer;
export const { saveMovie, removeMovie, clearAll } = savedSlice.actions;
