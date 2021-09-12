import React from "react";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./slider.css";

export default function Slider() {
  return (
    <div
      data-bs-interval={false}
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="cimg" src="./images/1st.jpg" alt="" />
          <a href="d" className="imagelink">
            
          </a>
        </div>
        <div className="carousel-item">
          <img className="cimg" src="./images/2nd.jpg" alt="" />
          <a href="s" className="imagelink">
            
          </a>
        </div>
        <div className="carousel-item">
          <img className="cimg" src="./images/3rd.jpg" alt="" />
          <a href="s" className="imagelink">
            
          </a>
        </div>
      </div>
      <button
        className="custom-prebtn carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          className="icon carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
      </button>
      <button
        className="custom-nextbtn carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          className="icon  carousel-control-next-icon"
          aria-hidden="true"
        ></span>
      </button>
    </div>
  );
}
