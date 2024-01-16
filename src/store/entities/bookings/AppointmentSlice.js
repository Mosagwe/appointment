import { createSlice } from "@reduxjs/toolkit";
import appointments from "../../../data/servicecentre";
const AppointmentSlice = createSlice({
  name: "appointments",
  initialState: appointments,
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
