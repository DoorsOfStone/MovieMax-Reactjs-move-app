import { configureStore } from "@reduxjs/toolkit";
import { savedReducer } from "./FavsSlice";
export const store = configureStore({
  reducer: savedReducer,
});
