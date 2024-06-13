import React from "react";
import Announcements from "./Announcements/Announcements";
import HeroSection from "./HeroSection/HeroSection";
import Awards from "./Awards/Awards";
import Testimonials from "./Testimonials/Testimonials.jsx";
function Home() {
  return (
    <>
      <Announcements />
      <HeroSection />
      <Awards />
      <Testimonials />
    </>
  );
}

export default Home;
