import { createSlice } from "@reduxjs/toolkit";

export const userIdSlice = createSlice({
  name: "userId",
  initialState: {
    userId: "",
  },

  reducers: {
    addUserId: (state, action) => {
      state.userId = action.payload.userId;
    },
  },
});

export const { addUserId } = userIdSlice.actions;
export default userIdSlice.reducer;
