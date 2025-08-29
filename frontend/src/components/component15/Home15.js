import React from "react";
import "./Home15.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faChartSimple,
  faCubes,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Component15 = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="component_fifteen text-center">
      <h1 className="application_process  text-center bg-tertiary-subtle ">
        Our Application Process
      </h1>
      <div className="bacground_page ">
        <div className="main_content_item  d-flex  bg-light  ">
          <div className="main-item-one ">
            <div className="processing_item_one">
              <FontAwesomeIcon icon={faPaperPlane} className="display-4 icon" />
              <h4 className="">Lorem Ipsum</h4>
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>
            <div className="processing_item_two ">
              <FontAwesomeIcon
                icon={faChartSimple}
                className="display-4 icon"
              />
              <h4>Lorem Ipsum</h4>
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>
          </div>
          <div className="main-item-two">
            <div className="processing_item_three ">
              <FontAwesomeIcon icon={faCubes} className="display-4 icon" />
              <h4>Lorem Ipsum</h4>
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>
            <div className="processing_item_four ">
              <FontAwesomeIcon
                icon={faChalkboardUser}
                className="display-4 icon"
              />
              <h4>Lorem Ipsum</h4>
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright ">
        &copy; {year} Md Sapon ali | All Rights Reserved.
      </p>
    </div>
  );
};

export default Component15;
