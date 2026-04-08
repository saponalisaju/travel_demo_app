import React from "react";
import "./FeatureSection.css";

import avatar from "../../assets/images/avatar.png";

// 🔹 Reusable Card
const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="feature-card text-center">
      <img src={image} alt={title} className="feature-image" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      image: avatar,
      title: "Lorem Ipsum",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC.",
    },
    {
      image: avatar,
      title: "Lorem Ipsum",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC.",
    },
    {
      image: avatar,
      title: "Lorem Ipsum",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC.",
    },
  ];

  return (
    <section className="features-section">
      {/* Header */}
      <div className="section-header text-center">
        <h1>What is Lorem Ipsum?</h1>
        <h4>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h4>
      </div>

      {/* Cards */}
      <div className="features-container">
        {features.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
