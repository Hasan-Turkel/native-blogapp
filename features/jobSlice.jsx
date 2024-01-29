import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteJobs: [],
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {

      const check = state.favoriteJobs.filter((item)=>item.id == payload.id)

      if(!check.length) state.favoriteJobs = [...state.favoriteJobs, payload];
      
    },
    removeFavorite: (state, { payload }) => {
      state.favoriteJobs = state.favoriteJobs.filter((item)=>item.id !== payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFavorite, removeFavorite } = jobSlice.actions;

export default jobSlice.reducer;
