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
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Link, Navigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/schema";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import CreateOrg from "@/components/sections/CreateOrg";
import { useOrgStore } from "@/store/useOrgStore";

const Register = () => {
  const registerUser = useAuthStore((s) => s.register);
  const {org} = useOrgStore();
  if(org?.length()){
    return <Navigate to={"/dashboard"} />
  }
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: "admin",
    },
  });

  const selectedRole = watch("role");

  const onSubmit = async (data) => {
    const res = await registerUser({
      ...data,
      name: `${data.fname} ${data.lname}`,
    });

    // ✅ redirect only if success
    if (res?.success) {
      navigate("/login"); // or "/login"
    }
  };

  return (
    <section className=" px-12 md:px-16 lg:px-32 py-20  flex lg:flex-row flex-col gap-20 md:pt10 pt-20 min-h-[100vh] min w-full items-center justify-between">
      {/* Left Side*/}
      <div className="flex flex-col items-center md:items-start lg:w-1/3 gap-4">
        <Badge className="bg-primary/40  px-4 text-xs rounded-full py-3 border-[1px solid rgba(91,91,214,0.3)] font-light">
          <Dot className="inline  p-0 m-0" />
          Trusted by 500+ companies across India
        </Badge>
        <h1 className="text-3xl text-center md:text-start  font-sans-serif font-bold ">
          Set up your account in minutes
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
              title={"Invite your entire team for free"}
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

      {/* Right Side */}
      
     

      <div className="w-full  sm:max-w-lg ">
        <Card className={"bg-transparent"}>
          <CardHeader>
            <CardTitle className="text-2xl font-sans-serif font-bold">
              Create account
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Start your 14-day free trial
            </CardDescription>
          </CardHeader>
          {/* Form */}
          <CardContent className={"px-6"}>
            <div className="flex flex-col gap-4">
              <FieldGroup>
                <Field className={"mt-2"}>
                  <p>I am </p>
                  <div className="flex gap-4">
                    {["admin", "student", "staff"].map((role) => (
                      <Button
                        type="button"
                        key={role}
                        variant={selectedRole === role ? "default" : "outline"}
                        className={"flex-1 flex-col items-center py-8"}
                        onClick={() => setValue("role", role)}
                      >
                        {role === "admin" && <ShieldUser />}
                        {role === "student" && <UserPen />}
                        {role === "staff" && <IdCardLanyard />}
                        {role}
                      </Button>
                    ))}
                  </div>
                </Field>
                <Field className={"flex flex-row gap-4"}>
                  <div>
                    <Label htmlFor="fname" className={"mb-2 "}>
                      First Name
                    </Label>

                    <Input {...register("fname")} placeholder="John" />
                    {errors.fname && (
                      <p className="text-red-500 text-xs">
                        {errors.fname.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label className={"mb-2"} htmlFor="lname">
                      Last Name
                    </Label>
                    <Input {...register("lname")} placeholder="Doe" />
                    {errors.lname && (
                      <p className="text-red-500 text-xs">
                        {errors.lname.message}
                      </p>
                    )}
                  </div>
                </Field>
                <Field>
                  <Label htmlFor="name-1">Work email</Label>
                  <Input {...register("email")} placeholder="you@company.com" />
                  {errors.email && (
                    <p className="text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </Field>

                <Field>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...register("password")}
                    placeholder="Min 8 characters"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs">
                      {errors.password.message}
                    </p>
                  )}
                </Field>
                <Button
                  onClick={handleSubmit(onSubmit)}
                  disable={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  Create account
                </Button>
              </FieldGroup>
            </div>
          </CardContent>
          <CardFooter className={"flex-col gap-2"}>
            <p className="text-center mx-auto text-muted-foreground">
              Already have an account?{" "}
              <Link className="text-primary/80" to={"/login"}>
                Sign in →
              </Link>
            </p>
            <p className="text-[10px] text-center  text-muted-foreground">
              By signing up you agree to our Terms of Service and Privacy Policy
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



export default Register;
