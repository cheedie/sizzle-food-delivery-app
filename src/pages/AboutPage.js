import React from "react";
import aboutImg from "../assets/about-img.png";

import { PageHero } from "../components";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <section className="about-section section-center">
        <div className="about-img">
          <img src={aboutImg} className="img about-photo" alt="about-img" />
        </div>
        <div className="about-info">
          <h3 className="title">About</h3>
          <h2 className="main-text">
            Food is an important part of a balanced diet
          </h2>
          <p className="paragraph-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo qui a
            mollitia illo nulla ipsam aspernatur earum! Omnis id cupiditate
            earum dolore
          </p>
          <p className="paragraph-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
            corrupti quis eius corporis aperiam ex! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Numquam, corrupti quis eius corporis
            aperiam ex! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Numquam, corrupti quis eius corporis aperiam ex! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Numquam, corrupti quis
            eius corporis aperiam ex! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Numquam, corrupti quis eius corporis aperiam ex!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
            corrupti quis eius corporis aperiam ex! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Numquam, corrupti quis eius corporis
            aperiam ex! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Numquam, corrupti quis eius corporis aperiam ex! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Numquam, corrupti quis
            eius corporis aperiam ex!
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
