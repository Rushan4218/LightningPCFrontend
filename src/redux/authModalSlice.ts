import { createSlice } from "@reduxjs/toolkit";

const authModalSlice = createSlice({
  name: "authModal",
  initialState: {
    value: false,
  },
  reducers: {
    setTrue: (state) => {
      state.value = true;
    },
    setFalse: (state) => {
      state.value = false;
    },
  },
});

export const { setTrue, setFalse } = authModalSlice.actions;

export default authModalSlice.reducer;
