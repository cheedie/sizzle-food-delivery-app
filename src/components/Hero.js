import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero-photo.png";
import aboutImg from "../assets/about-img.png";
import { AiFillClockCircle, AiOutlineArrowRight } from "react-icons/ai";
import { FaMapMarkerAlt, FaPhoneSquareAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <main>
      <section>
        <div className="hero">
          <div className="hero-container section-center">
            <div className="hero-info">
              <h2 className="main-text">
                Your Favourite Food Delivered Hot & Fresh
              </h2>
              <p className="paragraph-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                placeat tempora, eius sint officia id?
              </p>
              <button className="btn">
                Order Now
                <AiOutlineArrowRight />
              </button>
            </div>
            <div className="hero-image">
              <img src={heroImg} alt="salad-bowl" className="img hero-photo" />
            </div>
          </div>
          <div className="info-container">
            <div className="info-contents">
              <AiFillClockCircle />
              <p>Today 8:00 am - 7.00 pm</p>
              <p className="paragraph-text">Working hours</p>
            </div>
            <div className="info-contents">
              <FaMapMarkerAlt />
              <p>New haven Enugu, Nigeria</p>
              <p className="paragraph-text">Get Directions</p>
            </div>
            <div className="info-contents">
              <FaPhoneSquareAlt />
              <p>+234 (80) 30569887</p>
              <p className="paragraph-text">Call Online</p>
            </div>
          </div>
        </div>
      </section>

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
            corrupti quis eius corporis aperiam ex!
          </p>
          <Link to="/about" className="btn">
            Learn More
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Hero;
