import React from "react";
import { useSelector } from "react-redux";

const BookingItem = (props) => {
  const services = useSelector((state) => state.services);
  const serviceId = props.item.service;

  // const filteredServices = services.filter((item) => {
  //   return item.service.find((it) => it.id === serviceId);
  // });
  const filteredServices = services.filter((item) => item.id === serviceId
  );

  console.log(filteredServices);
  return (
    <tr>
      <td>1</td>
      <td>{props.item.centre}</td>
      <td>{props.item.service}</td>
      <td>{props.item.bookDate}</td>
      <td>Edit</td>
    </tr>
  );
};

export default BookingItem;
