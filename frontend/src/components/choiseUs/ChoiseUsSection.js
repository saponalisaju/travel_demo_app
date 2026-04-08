import React from "react";
import "./ChoiseUsSection.css";

import mapImage from "../../assets/images/map-3953229_960_720.webp";

// 🔹 Reusable Feature Item
const FeatureItem = ({ title, description }) => (
  <div className="feature-item">
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

const ChoiseUsSection = () => {
  const features = [
    {
      title: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Lorem Ipsum is simply dummy",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Lorem Ipsum is simply dummy",
      description:
        "It has survived not only five centuries but also the leap into electronic typesetting.",
    },
    {
      title: "Lorem Ipsum is simply dummy",
      description:
        "Scrambled it to make a type specimen book and remained unchanged.",
    },
  ];

  return (
    <section className="why-choose-us">
      {/* 🔹 Left Content */}
      <div className="content">
        <div className="section-header">
          <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.
          </p>
        </div>

        {/* 🔹 Features Grid */}
        <div className="features-grid">
          {features.map((item, index) => (
            <FeatureItem key={index} {...item} />
          ))}
        </div>
      </div>

      {/* 🔹 Right Image */}
      <div className="image-container">
        <img src={mapImage} alt="global map" />
      </div>
    </section>
  );
};

export default ChoiseUsSection;
