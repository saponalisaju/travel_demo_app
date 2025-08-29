import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareTwitter,
  faVimeo,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
import img from "../../assets/images/photo-1159947707.jpg";
import "./Home13.css";

const Component13 = () => {
  return (
    <div className="thirteen text-center bg-secondary text-light">
      <h1 className="">Lorem Ipsum;</h1>
      <h4 className="">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </h4>
      <div className="section-thr d-flex justify-content-around ">
        <div className="">
          <img className="charlotte_image " src={img} alt="loading error" />
          <h4>Name</h4>
          <h5>Designation </h5>
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className="p-1 bg-warning m-1"
          />
          <FontAwesomeIcon
            icon={faSquareTwitter}
            className="p-1 bg-warning m-1"
          />
          <FontAwesomeIcon
            icon={faSquareYoutube}
            className="p-1 bg-warning m-1"
          />
          <FontAwesomeIcon icon={faVimeo} className="p-1 bg-warning m-1" />
        </div>
        <div className="">
          <img className="kelly_image " src={img} alt="loading error" />
          <h4>Name</h4>
          <h5>Designation </h5>
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className="p-1 bg-warning m-1"
          />
          <FontAwesomeIcon
            icon={faSquareTwitter}
            className="p-1 bg-warning m-1"
          />
          <FontAwesomeIcon
            icon={faSquareYoutube}
            className="p-1 bg-warning m-1"
          />
          <FontAwesomeIcon icon={faVimeo} className="p-1 bg-warning m-1" />
        </div>
        <div className="">
          <img className="hoffmeister_image " src={img} alt="loading error" />
          <h4>Name</h4>
          <h5>Designation </h5>
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className="p-1 bg-warning m-1"
          />
          <FontAwesomeIcon
            icon={faSquareTwitter}
            className="p-1 bg-warning m-1"
          />
          <FontAwesomeIcon
            icon={faSquareYoutube}
            className="p-1 bg-warning m-1"
          />
          <FontAwesomeIcon icon={faVimeo} className="p-1 bg-warning m-1" />
        </div>
      </div>
    </div>
  );
};

export default Component13;
