import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  name: "",
  email: "",
  pwd: "",
  phoneNo: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    signout: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { login, signout } = userSlice.actions;
export default userSlice.reducer;
