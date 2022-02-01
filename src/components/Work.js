import React from "react";
import deliveryTruck from "../assets/delivery-truck.svg";
import handImg from "../assets/hand-img.svg";

const Work = () => {
  return (
    <section class="work-section section-center">
      <div class="work-info">
        <h3 class="title">work</h3>
        <h2 class="main-text">How it works</h2>
        <p class="paragraph-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quo
          suscipit illum odio. Ullam earum impedit tempore dicta quis optio?
        </p>
      </div>
      <div class="info-container">
        <div class="info-contents">
          <h5>Pick Meals</h5>
          <p class="paragraph-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
            assumenda voluptatum! Rerum doloremque fugiat amet.
          </p>
        </div>
        <div class="info-contents">
          <img src={handImg} alt="" />
          <h5>Choose How Often</h5>
          <p class="paragraph-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
            assumenda voluptatum! Rerum doloremque fugiat amet.
          </p>
        </div>
        <div class="info-contents">
          <img src={deliveryTruck} alt="" />
          <h5>Fast Deliveries</h5>
          <p class="paragraph-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
            assumenda voluptatum! Rerum doloremque fugiat amet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
