import React from "react";
import "./Home4.css";
import HmImg from "../../assets/images/photo-1159947707.jpg";
import flag1 from "../../assets/images/OIP (22).jpeg";
import flag2 from "../../assets/images/OIP (22).jpeg";
import flag3 from "../../assets/images/OIP (22).jpeg";
import flag4 from "../../assets/images/OIP (22).jpeg";
import flag5 from "../../assets/images/OIP (22).jpeg";
import flag6 from "../../assets/images/photo-1159947707.jpg";

const Component4 = () => {
  return (
    <div className="main-three text-center">
      <div className="main-three-head">
        <h4 className="">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h4>
        <p className="">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="image_1 d-flex ">
        <div className="my-image_1">
          <img src={HmImg} alt="flag" />
        </div>
        <div className="flag_img1 bg-light">
          <img src={flag1} alt="flag" />
          <img src={flag2} alt="flag" />
          <img src={flag3} alt="flag" />
          <img src={flag4} alt="flag" />
          <img src={flag5} alt="flag" />
        </div>
        <div className="my-image_2">
          <img src={flag6} alt="error" />
        </div>
      </div>
      <div className="main-four bg-light text-center ">
        <h1 className=" ">Lorem Ipsum</h1>
        <p className=" ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default Component4;
