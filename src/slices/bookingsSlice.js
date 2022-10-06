import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import delay from "../components/delay";
import { bookingsData } from "../data/bookingsData";


export const fetchBookings = createAsyncThunk("bookings/fetchBookings", async () => {
  const bookingsDelay = await delay(bookingsData);
  return bookingsDelay;
});
export const fetchBooking = createAsyncThunk("bookings/fetchBooking", async (id) => {
  const bookingDelay = await delay(bookingsData.find((booking) => booking.id === id));
  return bookingDelay;
});
export const createBooking = createAsyncThunk("bookings/createBooking", async (newBooking) => {
    const bookingDelay = await delay(newBooking);
    return bookingDelay;
  });
export const updateBooking = createAsyncThunk("bookings/updateBooking", async (id) => {
    const bookingDelay = await delay(bookingsData.find((booking) => booking.id === id));
    return bookingDelay;
  });
  export const deleteBooking = createAsyncThunk("bookings/deleteBooking", async (id) => {
    const bookingDelay = await delay(bookingsData.find((booking) => booking.id === id));
    return bookingDelay;
  });
  

const bookingsListSlice = createSlice({
  name: "bookingsList",
  initialState: {
    bookings: [],
    booking: null,
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.isLaoding = true;
        state.hasError = false;
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.bookings = action.payload;
      })
      .addCase(fetchBookings.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(fetchBooking.pending, (state) => {
        state.isLaoding = true;
        state.hasError = false;
        state.booking = null;
      })
      .addCase(fetchBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.booking = action.payload;
      })
      .addCase(fetchBooking.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.booking = null;
      })
     .addCase(createBooking.pending, (state) => {
        state.isLaoding = true;
        state.hasError = false;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.bookings.push(action.payload) // state.bookings = [...state.bookings, action.payload]
      })
      .addCase(createBooking.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
  },
});

export default bookingsListSlice.reducer;
export const selectBookings = (state) => state.bookingsList.bookings;
export const selectBooking = (state) => state.bookingsList.booking;
