import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./../../store/entities/bookings/AppointmentSlice";
//mport { useSelector } from "react-redux";

const BookingForm = (props) => {
  const dispatch = useDispatch();
  const customerName =
    props.user.firstname +
    " " +
    props.user.lastname +
    " " +
    props.user.middlename;

  const [centre, setCentre] = useState(props.centres[0].id);
  const [service, setService] = useState(props.services[0].id);
  const [isAgree, setIsAgree] = useState(false);
  const [bookDate, setBookDate] = useState(null);

  const listOfCentres = props.centres.map((centre) => (
    <option key={centre.id} value={centre.id}>
      {centre.name}
    </option>
  ));

  const listOfServices = props.services.map((service) => {
    return (
      <option key={service.id} value={service.id}>
        {service.name}
      </option>
    );
  });

  const dateHandler = (e) => {
    setBookDate(e.target.value);
  };

  const onChangeHandler = (e) => {
    setCentre(e.target.value);
  };

  const disableHandler = () => {
    setIsAgree((prevState) => {
      return (prevState = !prevState);
    });
  };

  const changeServiceHandler = (e) => {
    setService(e.target.value);
  };
  const bookService = {
    id: crypto.randomUUID(),
    national_id: props.user.national_id,
    centre,
    service,
    bookDate,
  };

  const saveBooking = (e) => {
    e.preventDefault();
    dispatch(add(bookService));
  };

  console.log(bookService);

  return (
    <form className="row g-3" onSubmit={saveBooking}>
      <div className="col-md-3">
        <label htmlFor="nationalId" className="form-label">
          National ID
        </label>
        <input
          type="text"
          className="form-control"
          id="nationalId"
          value={props.user.national_id}
          readOnly
        />
      </div>
      <div className="col-md-9">
        <label htmlFor="custname" className="form-label">
          Customer Name
        </label>
        <input
          type="text"
          className="form-control"
          id="custname"
          value={customerName}
          readOnly
        />
      </div>

      <div className="col-md-4">
        <label htmlFor="phone" className="form-label">
          Contact Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="phone"
          value={props.user.phone}
          readOnly
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          value={props.user.email}
          readOnly
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="servicecenter" className="form-label">
          State
        </label>
        <select
          id="servicecenter"
          className="form-select"
          value={centre}
          onChange={onChangeHandler}
        >
          {listOfCentres}
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="bookdate" className="form-label">
          Date and Time
        </label>
        <input
          type="date"
          className="form-control"
          id="bookdate"
          onChange={dateHandler}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="service" className="form-label">
          Service Type
        </label>
        <select
          id="service"
          className="form-select"
          value={service}
          onChange={changeServiceHandler}
        >
          {/* <option selected>Choose...</option> */}
          {listOfServices}
        </select>
      </div>
      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="gridCheck"
            onChange={disableHandler}
          />
          <label className="form-check-label" htmlFor="gridCheck">
            Agree to terms and conditions.
          </label>
        </div>
      </div>
      <div className="col-12">
        <button
          type="submit"
          disabled={isAgree ? "" : "disabled"}
          className="btn btn-success"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
