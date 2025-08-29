import React from "react";
import "./Home7.css";
import GImag from "../../assets/images/photo-1159947707.jpg";

const Component7 = () => {
  return (
    <div className="main-seven bg-light d-flex">
      <div className="image_first  d-flex ">
        <img src={GImag} alt="error" />
      </div>
      <div className="main-seven-one  ">
        <div className="">
          <p>
            <strong>Lorem Ipsum</strong>
          </p>
          <h4>Lorem Ipsum is simply dummy </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className=" d-flex">
          <div className="">
            <span>
              <p>
                <strong>Lorem Ipsum</strong>
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </span>
            <span>
              <p>
                <strong>Lorem Ipsum</strong>
              </p>
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </span>
          </div>
          <div className=" ">
            <span>
              <p>
                <strong>Lorem Ipsum</strong>
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </span>
            <span>
              <p>
                <strong>Lorem Ipsum</strong>
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component7;
