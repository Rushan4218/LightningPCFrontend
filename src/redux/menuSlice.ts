import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    value: false,
  },
  reducers: {
    setMenuTrue: (state) => {
      state.value = true;
    },
    setMenuFalse: (state) => {
      state.value = false;
    }
  },
});


export const {setMenuTrue, setMenuFalse} = menuSlice.actions

export default menuSlice.reducer;