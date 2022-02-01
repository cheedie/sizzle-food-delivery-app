import React from "react";
import { FeaturedProducts, Contact, Hero, Work } from "../components";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Work />
      <FeaturedProducts />
      <Contact />
    </main>
  );
};

export default HomePage;
