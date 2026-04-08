import React from "react";
import "./FeatureHighlightSection.css";

import image from "../../assets/images/photo-1159947707.jpg";

// 🔹 Reusable Feature Item
const FeatureItem = ({ title, description }) => (
  <div className="feature-item">
    <h5>{title}</h5>
    <p>{description}</p>
  </div>
);

const FeatureHighlightSection = () => {
  const features = [
    {
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Lorem Ipsum",
      description:
        "It has survived not only five centuries but also the leap into electronic typesetting.",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Scrambled it to make a type specimen book and remained unchanged.",
    },
  ];

  return (
    <section className="feature-highlight">
      {/* 🔹 Left Image */}
      <div className="image-container">
        <img src={image} alt="feature visual" />
      </div>

      {/* 🔹 Right Content */}
      <div className="content">
        {/* Header */}
        <div className="section-header">
          <p className="tag">Lorem Ipsum</p>
          <h3>Lorem Ipsum is simply dummy</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        {/* Features */}
        <div className="features-grid">
          {features.map((item, index) => (
            <FeatureItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlightSection;
