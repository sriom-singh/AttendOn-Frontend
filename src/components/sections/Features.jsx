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

const Features = () => {
  return (
    <div className="py-10 px-12 md:px-16 lg:px-24 ">
      <Header
        title="Features"
        subtitle="Built for modern HR teams"
        description="From real-time tracking to detailed analytics, AttendON gives you the
        tools to manage your workforce with confidence."
      />
      <div className="grid lg:grid-cols-3 gap-6 mt-16">
        <FeatureCard
          icon={<Clock className="p-2 size-8 mb-4 bg-primary/20 " />}
          title={"Real-time attendance tracking"}
          description={
            "Monitor check-ins and check-outs as they happen across all departments and locations."
          }
        />
        <FeatureCard
          icon={<Users className="p-2 size-8 mb-4 bg-primary/20 " />}
          title={"Role-based access"}
          description={
            "Set permissions for admins, HR managers and employees. Everyone sees exactly what they need."
          }
        />
        <FeatureCard
          icon={<ChartLine className="p-2 size-8 mb-4 bg-primary/20 " />}
          title={"Analytics & reports"}
          description={
            "Generate monthly reports and visual analytics to understand attendance patterns at a glance."
          }
        />
        <FeatureCard
          icon={<LayoutPanelTop className="p-2 size-8 mb-4 bg-primary/20 " />}
          title={"Add organization structure"}
          description={
            " Define departments, teams and locations to organize your workforce and track attendance at every level."
          }
        />
        <FeatureCard
          icon={<ScanQrCode className="p-2 size-8 mb-4 bg-primary/20 " />}
          title={"Smart Qr based attendance marking"}
          description={
            " Employees can check in and out using unique QR codes, making attendance tracking quick and contactless."
          }
        />
        <FeatureCard
          icon={<LandPlot className="p-2 size-8 mb-4 bg-primary/20 " />}
          title={"Area based attendance marking"}
          description={
            " Set up geofenced zones for your office locations. Employees can mark attendance only when they are in these areas."
          }
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card className={"px-4 gap-2"}>
      {icon}
      <p className="font-sans-serif text-base">{title}</p>
      <p className="text-xs text-muted-foreground">{description}</p>
    </Card>
  );
};

export default Features;
