import { createSlice } from "@reduxjs/toolkit";

const authModalSlice = createSlice({
  name: "authModal",
  initialState: {
    value: false,
  },
  reducers: {
    setAuthModalTrue: (state) => {
      state.value = true;
    },
    setAuthModalFalse: (state) => {
      state.value = false;
    },
  },
});

export const { setAuthModalTrue, setAuthModalFalse } = authModalSlice.actions;

export default authModalSlice.reducer;
