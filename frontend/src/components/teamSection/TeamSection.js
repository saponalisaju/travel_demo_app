import React from "react";
import "./TeamSection.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareTwitter,
  faSquareYoutube,
  faVimeo,
} from "@fortawesome/free-brands-svg-icons";

import avatar from "../../assets/images/photo-1159947707.jpg";

// 🔹 Reusable Team Card
const TeamCard = ({ image, name, role }) => (
  <div className="team-card">
    <img src={image} alt={name} className="team-image" />

    <h4>{name}</h4>
    <p className="designation">{role}</p>

    <div className="social-icons">
      <FontAwesomeIcon icon={faSquareFacebook} />
      <FontAwesomeIcon icon={faSquareTwitter} />
      <FontAwesomeIcon icon={faSquareYoutube} />
      <FontAwesomeIcon icon={faVimeo} />
    </div>
  </div>
);

const TeamSection = () => {
  const teamData = [
    { image: avatar, name: "John Doe", role: "CEO" },
    { image: avatar, name: "Jane Smith", role: "Marketing Head" },
    { image: avatar, name: "Michael Lee", role: "Developer" },
    { image: avatar, name: "Alex Kim", role: "UI Designer" },
  ];

  return (
    <section className="team-section">
      {/* 🔹 Header */}
      <div className="section-header">
        <h2>Our Team</h2>
        <p>
          Meet our professional team who are dedicated to delivering the best
          service.
        </p>
      </div>

      {/* 🔹 Team Members */}
      <div className="team-container">
        {teamData.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
