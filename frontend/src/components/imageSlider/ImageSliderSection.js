import React from "react";
import "./ImageSliderSection.css";

import img1 from "../../assets/images/gerbera-1684436_960_720.jpg";
import img2 from "../../assets/images/map-3953229_960_720.webp";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// 🔹 Slide Data
const slides = [img1, img2, img1, img2];

const ImageSliderSection = () => {
  return (
    <section className="carousel-section bg-light">
      <div
        id="imageCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* 🔹 Slides */}
        <div className="carousel-inner">
          {slides.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={img} className="d-block w-100" alt={`slide-${index}`} />
            </div>
          ))}
        </div>

        {/* 🔹 Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
};

export default ImageSliderSection;
