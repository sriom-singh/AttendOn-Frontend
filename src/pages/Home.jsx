import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import React from "react";
import Features from "@/components/sections/Features";
import HowWorks from "@/components/sections/HowWorks";
import FAQ from "@/components/sections/FAQ";
import Pricing from "@/components/sections/pricing";

const Home = () => {
  return (
    <div className="min-h-screen  w-full items-center ">
      <Hero />
      <Features/>
      <HowWorks/>
      <FAQ/>
      <Pricing/>
    </div>
  );
};

export default Home;
