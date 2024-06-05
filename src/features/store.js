import { configureStore } from "@reduxjs/toolkit";
import iceSlice from "./iceSlice";

const store = configureStore({
  reducer: {
    ice: iceSlice,
  },
});

export default store;
