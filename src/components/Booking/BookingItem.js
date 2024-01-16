import React from "react";
import { useSelector } from "react-redux";

const BookingItem = (props) => {
  const services = useSelector((state) => state.services);
  const serviceId = props.item.service_id;

  // const filteredServices = services.filter((item) => {
  //   return item.service.find((it) => it.id === serviceId);
  // });
  const filteredServices = services.filter((item) => item.id === serviceId);

  //const sname=filteredServices.map(s=>(console.log(s.name)));

  console.log(filteredServices);
  return (
    <tr>
      <td>1</td>
      <td>{props.item.centre_id}</td>
      <td>{props.item.service_id}</td>
      <td>{props.item.bookDate}</td>
      <td>Edit</td>
    </tr>
  );
};

export default BookingItem;
