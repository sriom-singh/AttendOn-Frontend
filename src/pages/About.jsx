import React from "react";
import Header from "@/components/sections/Header";
import HeaderUI from "@/components/ui/header";
import StatsSection, { Counter } from "@/components/ui/counter";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="mt-16  min-h-screen">
      <Header
        title={"Our story"}
        heading={"Built by student for the faculty and students"}
        description={
          "At our core, we are driven by a passion for innovation and a commitment to excellence.It was founded for team that spent years frustrated by clunky spreadsheets and disconnected tools. We knew there had to be a better way."
        }
        component={""}
      />
      <div className="flex px-28 gap-8 py-16">
        <div className="flex-1">
          <HeaderUI
            title={"Our mission"}
            subtitle={
              "Empowering educational institutions with seamless management solutions"
            }
            description={
              "Our mission is to empower educational institutions with seamless management solutions. We are dedicated to simplifying administrative tasks, enhancing communication, and fostering a collaborative environment for students, faculty, and staff. Through our innovative platform, we aim to revolutionize the way educational institutions operate, enabling them to focus on what truly matters: providing an exceptional learning experience."
            }
          />
        </div>
        <div className="grid grid-cols-2 gap-8 flex-1 items-center justify-center">
          <Card>
            <CardContent className={"px-4 py-2"}>
              <Counter end={500} duration={2000} suffix="+" />
              <p className="text-xs text-muted-foreground">
                Attendance logs / month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className={"px-4 py-2"}>
              <Counter end={500} duration={2000} suffix="+" />
              <p className="text-xs text-muted-foreground">
                Attendance logs / month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className={"px-4 py-2"}>
              <Counter end={98} duration={2000} suffix="%" />
              <p className="text-xs text-muted-foreground">
                Customer satisfaction
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className={"px-4 py-2"}>
              <Counter end={4} duration={2000} suffix="" />
              <p className="text-xs text-muted-foreground">
                Years in operation
              </p>
            </CardContent>
          </Card>
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
export default About;
