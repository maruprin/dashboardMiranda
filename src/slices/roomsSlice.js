import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import delay from "../components/delay";
import { roomsData } from "../data/roomsData";


export const fetchRooms = createAsyncThunk("rooms/fetchRooms", async () => {
  const roomsDelay = await delay(roomsData);
  return roomsDelay;
});
export const fetchRoom = createAsyncThunk("rooms/fetchRoom", async (id) => {
  const roomDelay = await delay(
    roomsData.find((room) => room["Room Id"] === id)
  );
  console.log(roomDelay)
  return roomDelay;
});
export const createRoom = createAsyncThunk(
  "rooms/createRoom",
  async (newRoom) => {
    const roomDelay = await delay(newRoom);
    return roomDelay;
  }
);
export const updateRoom = createAsyncThunk(
  "rooms/updateRoom",
  async (id) => {
    //async (roomUpdated) => {
    //   const roomDelay = await delay(roomUpdated);
    //   return roomDelay;
    const roomToUpdate = await delay(
      roomsData.find((room) => room["Room Id"] === id)
    );
    return roomToUpdate;
  }
);
export const deleteRoom = createAsyncThunk("rooms/deleteRoom", async (id) => {
  const roomDelay = await delay(id);
  return roomDelay;
});

const roomsListSlice = createSlice({
  name: "roomsList",
  initialState: {
    rooms: [],
    room: null,
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.isLaoding = true;
        state.hasError = false;
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.rooms = action.payload;
      })
      .addCase(fetchRooms.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(fetchRoom.pending, (state) => {
        state.isLaoding = true;
        state.hasError = false;
        state.room = null;
      })
      .addCase(fetchRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.room = action.payload;
        console.log(action.payload)
      })
      .addCase(fetchRoom.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.room = null;
      })
      .addCase(createRoom.pending, (state) => {
        state.isLaoding = true;
        state.hasError = false;
      })
      .addCase(createRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.rooms.push(action.payload); // state.rooms = [...state.rooms, action.payload]
      })
      .addCase(createRoom.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(updateRoom.pending, (state) => {
        state.isLaoding = true;
        state.hasError = false;
      })
      .addCase(updateRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.room = action.payload;
        
      })
      .addCase(updateRoom.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(deleteRoom.pending, (state) => {
        state.isLaoding = true;
        state.hasError = false;
      })
      .addCase(deleteRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.rooms = state.rooms.filter(
          (room) => room["Room Id"] !== action.payload
        );
      })
      .addCase(deleteRoom.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default roomsListSlice.reducer;
export const selectRooms = (state) => state.roomsList.rooms;
export const selectRoom = (state) => state.roomsList.room;
