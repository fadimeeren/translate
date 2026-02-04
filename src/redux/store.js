import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/languageSlice";
import translateSlice from "./slices/translateSlice";

const store = configureStore({
  reducer: { languageReducer, translateReducer },
});

export default store;
