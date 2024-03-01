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
    addUserDetails: (state, action) => {
      let {
        firstName,
        middleName,
        lastName,
        email,
        phoneNumber,
        country,
        address,
      } = action.payload.values;
      state.userDetails.push({
        id: action.payload.uniqueId,
        firstName,
        middleName,
        lastName,
        email,
        phoneNumber,
        country,
        address,
      });
    },
    deleteUserDetails: (state, action) => {
      let { id } = action.payload;
console.log(state.userDetails, "all details");
      let updatedList = state.userDetails.filter((e) => e.id != id);
      state.userDetails = updatedList;
    },
  },
});

export const { addUser, deleteUser, addUserDetails, deleteUserDetails } =
  LoginReducer.actions;
export default LoginReducer.reducer;
