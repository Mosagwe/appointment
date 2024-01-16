import React from "react";
import BookingForm from "./BookingForm";
import { useSelector } from "react-redux";

const NewBooking = () => {
  const user = useSelector((state) => state.customer);
  //onst person = useSelector((state) => state.customer);
  const centres = useSelector((state) => state.centres);
  const services = useSelector((state) => state.services);

  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p>
            Welcome{" "}
            <span style={{ fontWeight: "bold" }}>
              {user.firstname + " " + user.lastname}
            </span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">New Appointment Booking</div>
            <div className="card-body">
              <BookingForm services={services} centres={centres} user={user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBooking;
