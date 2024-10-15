import { configureStore } from "@reduxjs/toolkit";
import authModalReducer from "./authModalSlice.ts";
import menuReducer from "./menuSlice.ts";

export const store = configureStore ({
  reducer: {
    authModal: authModalReducer,
    menu: menuReducer
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
