import React from "react";
import Header from "../ui/header";
import {
  Clock,
  Users,
  ChartLine,
  LayoutPanelTop,
  ScanQrCode,
  LandPlot,
} from "lucide-react";
import { Card } from "../ui/card";

const HowWorks = () => {
  return (
    <div className="py-16 my-4 bg-primary/5">
      <div className="px-12 md:px-16 lg:px-24 ">
        <Header
          title="How it Works"
          subtitle="Live in four steps"
          description="From real-time tracking to detailed analytics, AttendON gives you the
        tools to manage your workforce with confidence."
        />
        <div className="grid lg:grid-cols-4 gap-6 mt-16">
          <FeatureCard
            icon={1}
            title={"Create your organisation"}
            description={
              "Sign up and configure departments, designations, and your company calendar."
            }
          />
          <FeatureCard
            icon={2}
            title={"Add your employees"}
            description={
              "Import via CSV or add manually. Assign roles, shifts, and reporting structures."
            }
          />
          <FeatureCard
            icon={3}
            title={"Set attendance rules"}
            description={
              "Define work hours, late thresholds, leave types, and holiday calendars."
            }
          />
          <FeatureCard
            icon={4}
            title={"Track and analyse"}
            description={
              "Define work hours, late thresholds, leave types, and holiday calendars."
            }
          />
        </div>
      </div>
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

export default HowWorks;
