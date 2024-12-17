import { createSlice } from "@reduxjs/toolkit";
import { fetchTours, fetchTourDetails } from "../../network/toursApis";
export const toursSlice = createSlice({
  name: "tours",
  initialState: {
    tours: [],
    tourDetails: null,
    status: "idle",
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder 
    .addCase(fetchTours.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.tours = action.payload;
    })
    .addCase(fetchTourDetails.fulfilled, (state, action) => {
      state.tourDetails = action.payload;
    })
  },
});
export { fetchTours, fetchTourDetails}; 
export default toursSlice.reducer;
