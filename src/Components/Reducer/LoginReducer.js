import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  userDetails: [],
  // userList: [],
};
const LoginReducer = createSlice({
  name: "loginForm",
  initialState,

  //ACTIONS
  reducers: {
    addUser: (state, action) => {
      let { userName, password } = action.payload.values;
      state.user = { id: action.payload.id, userName, password };
    },
  },
});

console.log(initialState, "from reducer");
export const { addUser, deleteUser, addUserDetails, deleteUserDetails } =
  LoginReducer.actions;
export default LoginReducer.reducer;
