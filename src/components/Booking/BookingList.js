import React from "react";
import { useSelector } from "react-redux";
import BookingItem from "./BookingItem";

const Bookinglist = () => {
  const appointments = useSelector((state) => state.appointments);

  let bookedAppointments = (
    <tr>
      <td>No data found</td>
    </tr>
  );
  if (appointments && appointments.length > 0) {
    bookedAppointments = appointments.map((appt) => (
      <BookingItem key={appt.id} item={appt} />
    ));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card mt-2">
            <div className="card-header">List of Bookings</div>
            <div className="card-body">
              <table className="table table-striped ">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>State</th>
                    <th>Service</th>
                    <th>Date Booked</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{bookedAppointments}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookinglist;
