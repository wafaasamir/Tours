import { configureStore } from "@reduxjs/toolkit";
import toursSlice from "../features/tours/toursSlice";
export default configureStore({
  reducer: {
    toursData: toursSlice
  },
});
