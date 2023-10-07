import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  watchListItems: [],
};

const watchListSlice = createSlice({
  name: "WatchList",
  initialState: INITIAL_STATE,
  reducers: {
    toggleWatchList: (state, action) => {
      state.watchListItems.find((item) => item.id === action.payload.id)
        ? (state.watchListItems = state.watchListItems.filter(
            (item) => item.id !== action.payload.id
          ))
        : state.watchListItems.push({ ...action.payload });
    },
  },
});

export const { toggleWatchList } = watchListSlice.actions;

export default watchListSlice.reducer;
