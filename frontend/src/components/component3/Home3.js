import React from "react";
import "./Home3.css";
import Imag1 from "../../assets/images/avatar.png";
import Imag2 from "../../assets/images/avatar.png";
import Imag3 from "../../assets/images/avatar.png";

const Component3 = () => {
  return (
    <div className="section-two ">
      <div className="main-two ">
        <h1 className="text-center ">What is Lorem Ipsum? </h1>
        <h4 className="text-center ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h4>
      </div>
      <div className="section-two-a d-flex bg-light pb-5">
        <div className="para-1 text-center ">
          <img className="border rounded-circle " src={Imag1} alt="loading" />
          <h4 className="">Lorem Ipsum</h4>
          <p className="">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock,
          </p>
        </div>
        <div className="para-2 text-center ">
          <img className="border rounded-circle " src={Imag2} alt="loading" />
          <h4 className="">Lorem Ipsum</h4>
          <p className="">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock,
          </p>
        </div>
        <div className="para-3 text-center ">
          <img className="border rounded-circle " src={Imag3} alt="loading" />
          <h4 className="">Lorem Ipsum</h4>
          <p className="">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Component3;
