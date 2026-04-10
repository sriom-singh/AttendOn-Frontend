import Header from "@/components/sections/Header";
import React from "react";
import PricingSection from "@/components/sections/pricing";

const Pricing = () => {
  return (
    <div className="my-16  min-h-screen">
      <Header
        title={"Flexible plans"}
        heading={"Simple, honest pricing"}
        description={
          "No hidden fees. No lock-in contracts. Every plan starts with a 14-day free trial."
        }
        component={""}
      />
      <PricingSection />
    </div>
  );
};

export default Pricing;
