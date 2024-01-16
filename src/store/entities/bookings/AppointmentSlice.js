import { createSlice } from "@reduxjs/toolkit";

const AppointmentSlice = createSlice({
  name: "appointments",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
      console.log(state);
    },
    list: (state, action) => {},
  },
});

export const { add } = AppointmentSlice.actions;

export default AppointmentSlice.reducer;
