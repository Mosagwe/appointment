import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./entities/customer/customerSlice";
import centreReducer from "./entities/centres/centreSlice";
import servicesReducer from "./entities/services/serviceSlice";
import AppointmentSlice from "./entities/bookings/AppointmentSlice";
const store = configureStore({
  reducer: {
    customer: customerReducer,
    centres: centreReducer,
    services: servicesReducer,
    appointments:AppointmentSlice
  },
});

export default store;
