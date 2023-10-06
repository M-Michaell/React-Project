import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/languageSlice";
import watchListSlice from "./slices/watchListSlice";

const store = configureStore({
  reducer: {
    language: languageSlice,
    WatchList: watchListSlice,
  },
});
export default store;
