import { configureStore } from "@reduxjs/toolkit";
import { crudslice } from "./reducers/crudslice";
export const store = configureStore({
  reducer: {
    app: crudslice.reducer,
  },
});
