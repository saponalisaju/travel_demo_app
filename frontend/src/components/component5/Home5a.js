import React from "react";
import "./Home5.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";

const Home5a = () => {
  return (
    <div className="border home-five-a  ">
      <div className=" d-flex">
        <FontAwesomeIcon
          icon={faCube}
          className="border border-3 rounded-circle border-warning p-3"
        />
        <h4 className="text-warning ">Company Name</h4>
      </div>
      <div className="home-heading-one">
        <p>
          <strong>POSITION:</strong> Pakaging Worker
        </p>
        <p>
          <strong> DEPARTMENT:</strong> Production
        </p>
        <p>
          <strong>TOTAL VACANCIES:</strong> 28
        </p>
        <p>
          <strong>EMPTY VACANCIES:</strong>30
        </p>
        <p>
          {" "}
          <strong>LOCATION:</strong> Country
        </p>
        <p>
          {" "}
          <strong>Start Date:</strong> 20/11/2025
        </p>
        <p>
          {" "}
          <strong>Working Hours:</strong> working time
        </p>
        <p>
          <strong>Compensation: </strong>Salary
        </p>
      </div>
      <div className="home-heading-two">
        <p>
          <strong>POSITION:</strong> Pakaging Worker
        </p>
        <p>
          {" "}
          <strong> DEPARTMENT:</strong> Production
        </p>
        <p>
          <strong>TOTAL VACANCIES:</strong> 28
        </p>
        <p>
          <strong>EMPTY VACANCIES:</strong>30
        </p>
        <p>
          {" "}
          <strong>LOCATION:</strong> Country
        </p>
        <p>
          {" "}
          <strong>Start Date:</strong> 20/11/2025
        </p>
        <p>
          {" "}
          <strong>Working Hours:</strong> hours per day
        </p>
        <p>
          <strong>Compensation: </strong>Salary
        </p>
      </div>
      <div className=" text-center">
        <p>
          <strong>POSITION:</strong> Pakaging Worker
        </p>
        <p>
          {" "}
          <strong> DEPARTMENT:</strong> Production
        </p>
        <p>
          <strong>TOTAL VACANCIES:</strong> 28
        </p>
        <p>
          <strong>EMPTY VACANCIES:</strong>30
        </p>
        <p>
          {" "}
          <strong>LOCATION:</strong> Country
        </p>
        <p>
          {" "}
          <strong>Start Date:</strong> 20/11/2025
        </p>
        <p>
          {" "}
          <strong>Working Hours:</strong> hours per day
        </p>
        <p>
          <strong>Compensation: </strong>Salary
        </p>
      </div>
    </div>
  );
};

export default Home5a;
