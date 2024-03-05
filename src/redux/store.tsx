import { configureStore } from "@reduxjs/toolkit";
import teams from "./features/players";

export const store = configureStore({
  reducer: {
    teams,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;