import React from "react";
import Header from "@/components/sections/Header";
import StatsSection, { Counter } from "@/components/ui/counter";
import { Card, CardContent } from "@/components/ui/card";
import Featurees from "@/components/sections/Features";
const Features = () => {
  return (
    <div className="my-16  min-h-screen">
      <Header
        title={"Everything in one place"}
        heading={"The complete toolkit for modern attendance management"}
        description={
          "Every feature your HR team needs — from real-time check-ins to detailed payroll-ready reports.."
        }
        component={""}
      />
      <Featurees isheader={false}/>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className={"flex flex-col px-4 gap-2"}>
      <p className="p-2 px-3 font-sans-serif  font-semibold text-primary text-center max-w-min rounded-full  mb-4 bg-primary/10 border-[1px] ">
        0{icon}
      </p>
      <p className="font-sans-serif text-base">{title}</p>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
};
export default Features;
