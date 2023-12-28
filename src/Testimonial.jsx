import React from "react";
import "./testimonial.css";

export default function Testimonial() {
  return (
    <div className="testimonial container-fluid">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="one-testimonial">
              <p className="d-block w-100">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
                consectetur cum perferendis modi accusamus ipsa ratione
                inventore esse et quia excepturi molestiae quo molestias
                nesciunt, repudiandae deleniti delectus repellendus! Voluptate
                sapiente illum unde laudantium? Hic?
              </p>
              <h2 className="yellow">Tom Hanks</h2>
              <p className="t-des">Actor</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="one-testimonial">
              <p className="d-block w-100">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
                consectetur cum perferendis modi accusamus ipsa ratione
                inventore esse et quia excepturi molestiae quo molestias
                nesciunt, repudiandae deleniti delectus repellendus! Voluptate
                sapiente illum unde laudantium? Hic?
              </p>
              <h2 className="yellow">Tom Hanks</h2>
              <p className="t-des">Actor</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="one-testimonial">
              <p className="d-block w-100">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
                consectetur cum perferendis modi accusamus ipsa ratione
                inventore esse et quia excepturi molestiae quo molestias
                nesciunt, repudiandae deleniti delectus repellendus! Voluptate
                sapiente illum unde laudantium? Hic?
              </p>
              <h2 className="yellow">Tom Hanks</h2>
              <p className="t-des">Actor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
