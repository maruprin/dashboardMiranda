import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import delay from "../components/delay";
import { usersData } from "../data/usersData";


export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const usersDelay = await delay(usersData);
  return usersDelay;
});
export const fetchUser = createAsyncThunk("users/fetchUser", async (id) => {
  const userDelay = await delay(usersData.find((user) => user.id === id));
  return userDelay;
});
export const createUser = createAsyncThunk("users/createUser", async (newUser) => {
    const userDelay = await delay(newUser);
    return userDelay;
  });
export const updateUser = createAsyncThunk("users/updateUser", async (id) => {
    const userDelay = await delay(usersData.find((user) => user.id === id));
    return userDelay;
  });
  export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
    const userDelay = await delay(usersData.find((user) => user.id === id));
    return userDelay;
  });
  

const usersListSlice = createSlice({
  name: "usersList",
  initialState: {
    users: [],
    user: null,
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLaoding = true;
        state.hasError = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(fetchUser.pending, (state) => {
        state.isLaoding = true;
        state.hasError = false;
        state.user = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.user = null;
      })
     .addCase(createUser.pending, (state) => {
        state.isLaoding = true;
        state.hasError = false;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.users.push(action.payload) // state.users = [...state.users, action.payload]
      })
      .addCase(createUser.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
  },
});

export default usersListSlice.reducer;
export const selectUsers = (state) => state.usersList.users;
export const selectUser = (state) => state.usersList.User;
