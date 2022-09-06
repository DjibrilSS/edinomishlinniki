import { configureStore } from "@reduxjs/toolkit";
import application from "../feauters/applicationSlice";
import belhi from "../feauters/belhiSlice";
export const store = configureStore({
  reducer: {
    application,
    belhi,
  },
});
