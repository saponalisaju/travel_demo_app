import React from "react";
import "./Home10.css";
import { Link } from "react-router-dom";
import flg1 from "../../assets/images/OIP (22).jpeg";
import flg2 from "../../assets/images/OIP (22).jpeg";
import flg3 from "../../assets/images/OIP (22).jpeg";
import flg4 from "../../assets/images/OIP (22).jpeg";

const Component10 = () => {
  return (
    <div className="section-nine bg-info-subtle">
      <div className="section-nine-one text-center">
        <h1 className="">Lorem Ipsum is simply dummy</h1>
        <p className="security_account">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
          <Link to="https://www.nationwideedu.com/">
            {" "}
            Lorem Ipsum is simply dummy{" "}
          </Link>
        </p>
      </div>
      <div className="flag_all text-center">
        <img src={flg1} alt="error" />
        <img src={flg2} alt="error" />
        <img src={flg3} alt="error" />
        <img src={flg4} alt="error" />
      </div>
    </div>
  );
};

export default Component10;
