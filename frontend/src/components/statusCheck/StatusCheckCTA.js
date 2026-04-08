import React from "react";
import "./StatusCheckCTA.css";
import { Link } from "react-router-dom";

const StatusCheckCTA = () => {
  return (
    <section className="status-cta">
      {/* 🔹 Background Image */}
      <div className="cta-overlay">
        {/* 🔹 Content */}
        <div className="cta-content">
          <h2>What is Lorem Ipsum?</h2>
          <h3>Check Your Status Here!</h3>

          <Link to="/application" className="cta-button">
            Check Status
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StatusCheckCTA;
