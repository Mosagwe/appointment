import React from "react";

import logo from "./../../resources/logo2.jpg";
import bgpattern from "./../../resources/bg-pattern.png";

const Header = () => {
  return (
    <div className="container-fluid">
      <div
        className="row mt-3"
        style={{
          fontSize: "12px",
          fontWeight: "bold",
          color: "#BCE954",
          borderWidth: 0,
          borderColor: "white",
          borderStyle: "solid",
          width: "100%",
          backgroundColor: "#ffffff",
          backgroundImage: `url(${bgpattern})`,
        }}
      >
        <div className="col-md-2 pl-50">
          <img
            src={logo}
            alt=""
            height={180}
            width={180}
            style={{ borderRadius: 10 }}
            className="my-3 mx-5"
          />
        </div>
        <div className="col-md-7 mx-auto d-flex align-items-center justify-content-center">
          <h1 className="display-3 fw-bold text-uppercase" style={{color:"white"}}>
            Service By Appointment
          </h1>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Header;
