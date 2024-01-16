import { createSlice } from "@reduxjs/toolkit";
import { centres } from "../../../data/servicecentre";

const initialState = centres;
const centreSlice = createSlice({
  name: "centres",
  initialState,
  reducers: {
    add: () => {},
  },
});
export const { add } = centreSlice.actions;
export default centreSlice.reducer;
