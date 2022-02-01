import React from "react";
import {
  FeaturedProducts,
  Contact,
  Hero,
  Work,
  Testimonial,
} from "../components";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Work />
      <FeaturedProducts />
      <Testimonial />
      <Contact />
    </main>
  );
};

export default HomePage;
