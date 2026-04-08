import React from "react";
import "./KeyFeatureSection.css";

import icon from "../../assets/images/541384.png";

// 🔹 Reusable Card
const FeatureCard = ({ image, title, description }) => (
  <div className="feature-card">
    <img src={image} alt={title} className="feature-icon" />
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

const KeyFeatureSection = () => {
  const features = [
    {
      image: icon,
      title: "Flexible Code",
      description:
        "These strategies help create code that evolves with changing requirements and reduces maintenance costs.",
    },
    {
      image: icon,
      title: "Scalable Architecture",
      description:
        "Design systems that grow with your business while maintaining performance and reliability.",
    },
  ];

  return (
    <section className="key-features">
      <div className="features-wrapper">
        {features.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default KeyFeatureSection;
