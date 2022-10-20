import { configureStore } from '@reduxjs/toolkit';
import roomsListReducer from '../slices/roomsSlice';
import bookingsListReducer from '../slices/bookingsSlice';
import usersListReducer from '../slices/usersSlice';
import contactsListReducer from '../slices/contactSlice';

export const store = configureStore({
  reducer: {
    roomsList: roomsListReducer,
    bookingsList: bookingsListReducer,
    usersList: usersListReducer,
    contactsList: contactsListReducer,
  },
});
