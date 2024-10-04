import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice.js";
import filterReducer from "./filtersSlice.js";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
