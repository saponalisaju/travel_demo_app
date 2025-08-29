import React from "react";
import "./Home2.css";
import Img1 from "../../assets/images/avatar.png";
import Img2 from "../../assets/images/avatar.png";
import Imag3 from "../../assets/images/avatar.png";

const Component2 = () => {
  return (
    <>
      <div className="section-one d-flex ">
        <div className="para1 text-center ">
          <img className="border rounded-circle " src={Img1} alt="loading" />
          <h4 className="">Lorem Ipsum</h4>
          <span className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </span>
        </div>
        <div className="para2 text-center ">
          <img className="border rounded-circle " src={Img2} alt="loading" />
          <h4>Lorem Ipsum</h4>
          <span className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </span>
        </div>
        <div className="para3 text-center ">
          <img className="border rounded-circle " src={Imag3} alt="loading" />
          <h4>Lorem Ipsum</h4>
          <span className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </span>
        </div>
      </div>
    </>
  );
};

export default Component2;
