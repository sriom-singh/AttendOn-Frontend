import React from "react";
import { Button } from "@/components/ui/button";
import {
  ChartNoAxesCombined,
  Dot,
  Check,
  User2,
  IdCardLanyard,
  ShieldUser,
  UserPen,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section className=" px-12 md:px-16 lg:px-32 py-20  flex lg:flex-row flex-col gap-20 md:pt10 pt-20 min-h-[100vh] min w-full items-center justify-between">
      {/* Left Side*/}
      <div className="flex flex-col items-center md:items-start lg:w-1/3 gap-4">
        <Badge className="bg-primary/40  px-4 text-xs rounded-full py-3 border-[1px solid rgba(91,91,214,0.3)] font-light">
          <Dot className="inline  p-0 m-0" />
          Trusted by 500+ companies across India
        </Badge>
        <h1 className="text-3xl text-center md:text-start  font-sans-serif font-bold ">
          Welcome back to your workspace
        </h1>
        <p className="font-light text-justify text-sm text-muted-foreground">
          Track attendance, manage leave, and keep your team organised — all in
          one place.
        </p>
        <div>
          <div>
            <Feattures
              icon={
                <User2 className="size-8 rounded-sm bg-primary/30 text-primary p-2" />
              }
              title={"Real-time tracking across all departments"}
            />
            <Feattures
              icon={
                <Check className="size-8 rounded-sm bg-primary/30 text-primary p-2" />
              }
              title={"Trusted by 500+ companies across India"}
            />
            <Feattures
              icon={
                <ChartNoAxesCombined className="size-8 rounded-sm bg-primary/30 text-primary p-2" />
              }
              title={"98% uptime guaranteed SLA"}
            />
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="w-full  sm:max-w-lg ">
        <Card className={"bg-transparent"}>
          <CardHeader>
            <CardTitle className="text-2xl font-sans-serif font-bold">
              Sign in
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Enter your credentials to access your dashboard
            </CardDescription>
          </CardHeader>
          {/* Form */}
          <CardContent className={"px-6"}>
            <div className="flex flex-col gap-4 mt-4">
              <FieldGroup>
              
                <Field>
                  <Label htmlFor="name-1">Work email</Label>
                  <Input
                    id="name-1"
                    name="name"
                    placeholder="you@company.com"
                  />
                </Field>

                <Field>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Min 8 characters"
                  />
                </Field>
                <p className="text-xs text-right text-primary/80">Forgot Password?</p>
                <Button className="w-full" size="lg">
                  Sign in to  AttendON
                </Button>
              </FieldGroup>
            </div>
          </CardContent>
          <CardFooter className={"flex-col gap-2"}>
            <p className="text-center mx-auto mb-2 text-muted-foreground">
              Don't have an account? {" "}
              <Link className="text-primary/80" to={"/register"}>
                Create one →
              </Link>
            </p>

          </CardFooter>
        </Card>
      </div>
    </section>
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
export default SignIn;
