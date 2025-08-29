import React from "react";
import "./Home11.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Image1 from "../../assets/images/photo-1159947707.jpg";

const Component11 = () => {
  return (
    <div className="content_eleven bg-secondary">
      <div className="text-center eleven_head text-white">
        <h1>Lorem Ipsum is simply dummy</h1>
        <h4>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </h4>
      </div>
      <div className="eleven d-flex justify-content-around">
        <div className="eleven-one bg-light text-center">
          <FontAwesomeIcon icon={faQuoteLeft} className="qoute_simble" />
          <p className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <img src={Image1} alt="loading" />
          <h2>Name</h2>
          <h4>
            <em>Company</em>
          </h4>
        </div>
        <div className="eleven-two bg-light text-center">
          <FontAwesomeIcon icon={faQuoteLeft} className="qoute_simble" />
          <p className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <img src={Image1} alt="loading" />
          <h2>Name</h2>
          <h4>
            <em>Company</em>
          </h4>
        </div>
        <div className="eleven-three bg-light text-center ">
          <FontAwesomeIcon icon={faQuoteLeft} className="qoute_simble" />
          <p className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <img className="" src={Image1} alt="loading" />
          <h2>Name</h2>
          <h4 className="">
            <em>Company</em>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Component11;
