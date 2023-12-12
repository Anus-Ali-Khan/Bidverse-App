import { createSlice } from "@reduxjs/toolkit";

const currentUser = JSON.parse(localStorage.getItem("user"));
console.log(currentUser, "INSIDE RED");

const initialStateValue = { ...currentUser };

export const userSlice = createSlice({
  name: "user",
  initialState: initialStateValue,
  reducers: {
    login: (state, action) => {
      state = action.payload;
      // console.log("action.payload", action.payload);
      // console.log("user", state.user);
    },
    setUser: (state, action) => {
      console.log("inside reducer", action.payload);
      state = action.payload;
      // console.log("user", state.user);
    },
    signout: (state) => {
      state.value = localStorage.clear();
    },
  },
});

export const { login, signout, setUser } = userSlice.actions;
export default userSlice.reducer;
