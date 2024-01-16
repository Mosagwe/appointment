import { createSlice } from "@reduxjs/toolkit";

import {customer} from "./../../../data/customer";

const initialState = customer;

const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {},
});

export const customerActions = customerSlice.actions;
export default customerSlice.reducer;
