import { configureStore } from "@reduxjs/toolkit";
import { reducerSeminar } from "../slice/seminarSlice";

// Store
export const store = configureStore({
    reducer: {
        seminars: reducerSeminar
    }
});