import React from "react";
import "./TrustedPartnersSection.css";

import flg from "../../assets/images/OIP (22).jpeg";

// 🔹 Flag Component
const FlagItem = ({ src }) => (
  <div className="flag-item">
    <img src={src} alt="partner flag" />
  </div>
);

const TrustedPartnersSection = () => {
  const flags = [flg, flg, flg, flg];

  return (
    <section className="trusted-section">
      {/* 🔹 Header */}
      <div className="section-header">
        <h2>Lorem Ipsum is simply dummy</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <a
            href="https://www.nationwideedu.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Learn more
          </a>
        </p>
      </div>

      {/* 🔹 Flags / Logos */}
      <div className="flags-container">
        {flags.map((flag, index) => (
          <FlagItem key={index} src={flag} />
        ))}
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
