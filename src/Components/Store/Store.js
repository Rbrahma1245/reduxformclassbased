import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../Reducer/LoginReducer";

const store = configureStore({
  reducer: {
    login: LoginReducer,
  },
});

export default store;
