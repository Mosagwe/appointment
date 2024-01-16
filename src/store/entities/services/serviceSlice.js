import { createSlice } from "@reduxjs/toolkit";

const servicesState = [
  { id: 1, name: "Smart ID" },
  { id: 2, name: "e-Tax" },
  { id: 3, name: "e-Business Register" },
  { id: 4, name: "Mobile Parking" },
  { id: 5, name: "e-Residency" },
];
const servicesSlice = createSlice({
  name: "services",
  initialState: servicesState,
  reducers: {},
});

//export const {} = servicesSlice.actions;
export default servicesSlice.reducer;
