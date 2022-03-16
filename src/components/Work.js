import React from "react";
import deliveryTruck from "../assets/delivery-truck.svg";
import handImg from "../assets/hand-img.svg";

const Work = () => {
  return (
    <section className="work-section section-center">
      <div className="work-info">
        <h3 className="title">work</h3>
        <h2 className="main-text">How it works</h2>
        <p className="paragraph-text text-max-width">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quo
          suscipit illum odio. Ullam earum impedit tempore dicta quis optio?
        </p>
      </div>
      <div className="info-container">
        <div className="info-contents">
          <h5>Pick Meals</h5>
          <p className="paragraph-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
            assumenda voluptatum! Rerum doloremque fugiat amet.
          </p>
        </div>
        <div className="info-contents">
          <img src={handImg} alt="" />
          <h5>Choose How Often</h5>
          <p className="paragraph-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
            assumenda voluptatum! Rerum doloremque fugiat amet.
          </p>
        </div>
        <div className="info-contents">
          <img src={deliveryTruck} alt="" />
          <h5>Fast Deliveries</h5>
          <p className="paragraph-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
            assumenda voluptatum! Rerum doloremque fugiat amet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
