import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Plus,Delete } from "lucide-react";
import { useOrgStore } from "@/store/useOrgStore";
import CreateOrg from "@/components/sections/CreateOrg";
import { ChartNoAxesCombined, Dot, Check, User2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const DashboardHome = () => {
  const { initialized } = useOrgStore();
  console.log(org);

  return (
    <div>
      <div className="bg-primary/10 justify-between items-center gap-4 flex w-full p-2 py-3">
        <div className="flex items-center gap-3">
          <SidebarTrigger />
          <h2 className="font-sans-serif">Dashboard</h2>
        </div>
      </div>
      <div className="py-6 px-8">
        {initialized? <ShowDasboard /> : <OrgCreate />}
      </div>
    </div>
  );
};

const OrgCreate = () => {
  return (
    <section className=" px-8 md:px-10   flex lg:flex-row flex-col gap-20   min-h-[80vh] min w-full items-center justify-between">
      {/* <h2 className="font-sans-serif text-2xl">Create your Organization </h2>
            <p className="text-sm text-muted-foreground">Add your first organiztion to get started</p> */}
      <div className="flex flex-col items-center md:items-start lg:w-1/3 gap-4">
        <Badge className="bg-primary/40  px-4 text-xs rounded-full py-3 border-[1px solid rgba(91,91,214,0.3)] font-light">
          <Dot className="inline  p-0 m-0" />
          Trusted by 500+ companies across India
        </Badge>
        <h1 className="text-3xl text-center md:text-start  font-sans-serif font-bold ">
          Set up your organization in minutes
        </h1>
        <p className="font-light text-justify text-sm text-muted-foreground">
          No credit card required. Start your 14-day free trial and invite your
          team today.
        </p>
        <div>
          <div>
            <Feattures
              icon={
                <User2 className="size-8 rounded-sm bg-primary/30 text-primary p-2" />
              }
              title={"Add your entire team for free"}
            />
            <Feattures
              icon={
                <Check className="size-8 rounded-sm bg-primary/30 text-primary p-2" />
              }
              title={"Up and running in under 5 minutes"}
            />
            <Feattures
              icon={
                <ChartNoAxesCombined className="size-8 rounded-sm bg-primary/30 text-primary p-2" />
              }
              title={"Detailed analytics and reports"}
            />
          </div>
        </div>
      </div>
      <CreateOrg />
    </section>
  );
};

const ShowDasboard = () => {
  const { org } = useOrgStore();

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-sans-serif">Your Orgainzations</h2>
      {Array.isArray(org) &&
        org.map((data) => {
          const initials =
            data?.name
              ?.split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase() || "U";
          return (
            <Card key={data._id} className={"w-max"}>
              <CardContent className={"flex items-center gap-4"}>
                <div>
                  <span className="bg-primary/40 rounded-full p-3.5">
                    {initials}
                  </span>
                </div>
                <div>
                  <h1>{data?.name}</h1>
                  <p>{data?.description}</p>
                  <p>{data?.contactEmail}</p>
                </div>
              </CardContent>
              <CardFooter className={"justify-between"}>
                <Button  size="sm" variant="destructive"> <Delete />Delete</Button>
                <Button  size="sm" variant="outline"><Plus/>Add department</Button>
              </CardFooter>
            </Card>
          );
        })}
    </div>
  );
};

const Feattures = ({ icon, title }) => {
  return (
    <div className="flex gap-2 mt-4 items-center">
      {icon}
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default DashboardHome;
