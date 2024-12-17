import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// fetch tours data
export const fetchTours = createAsyncThunk("tours/fetchTours", async () => {
  const response = await axios.get("/tours.json");
  return response.data;
});

// fetch specific tour data
export const fetchTourDetails = createAsyncThunk("tours/fetchTourDetails", async (tourId, { getState }) => {
    const response = await axios.get("/tours.json");
    const tour = response.data.find((t) => t.id === Number(tourId));
    return tour;
});