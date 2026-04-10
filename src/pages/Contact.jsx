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
  Mail,
  Phone,
  Clock,
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
import Header from "@/components/ui/header";
import { Textarea } from "@/components/ui/textarea";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

const Contact = () => {
  return (
    <section className=" px-12 md:px-16 bg-primary/10 lg:px-32 py-20  flex lg:flex-row flex-col gap-20 md:pt10 pt-20 min-h-[100vh] min w-full items-center justify-between">
      {/* Left Side*/}
      <div className="flex flex-col   items-center md:items-start lg:w-1/3 gap-4">
        <Header
          title={"Get in touch"}
          subtitle={"We'd love to hear from you"}
        />

        <h1 className="text-3xl text-start w-full  font-sans-serif font-bold ">
          Let's talk
        </h1>
        <p className="font-light text-justify text-sm text-muted-foreground">
          Whether you're evaluating AttendIQ, need help with your account, or
          want to explore our Enterprise plan — we're here.
        </p>
        <div>
          <div className="flex flex-col gap-2">
            <Feattures
              icon={
                <Mail className="size-9 rounded-sm bg-primary/30 text-primary p-2" />
              }
              subtitle={"Email us"}
              title={"hello@attendiq.in"}
            />
            <Feattures
              icon={
                <Phone className="size-9 rounded-sm bg-primary/30 text-primary p-2" />
              }
              subtitle={"Call us"}
              title={"+91 80 4567 8900"}
            />
            <Feattures
              icon={
                <Clock className="size-9 rounded-sm bg-primary/30 text-primary p-2" />
              }
              subtitle={"Support hours"}
              title={"Mon – Fri, 9 AM – 6 PM IST"}
            />
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-4">OUR OFFICES</p>
        <div className="grid grid-cols-2 w-full  gap-4">
          <Card className={"py-4"}>
            <CardContent className={"pr-8 "}>
              <p className="text-xs mb-1">Bengaluru</p>
              <p className="text-[10px] text-muted-foreground">
                Koramangala 5th Block, 560034
              </p>
            </CardContent>
          </Card>
          <Card className={"py-4"}>
            <CardContent className={"pr-8 "}>
              <p className="text-xs mb-1">Mumbai</p>
              <p className="text-[10px] text-muted-foreground">
                BKC, Bandra East, 400051
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Side */}

      <div className="w-full  sm:max-w-xl ">
        <Card className={"bg-transparent"}>
          <CardHeader>
            <CardTitle className="text-2xl font-sans-serif font-bold">
              Send us a message
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              We'll get back to you within one business day.
            </CardDescription>
          </CardHeader>
          {/* Form */}
          <CardContent className={"px-4 mt-2"}>
            <div className="flex flex-col gap-4">
              <FieldGroup>
                <Field className={"flex flex-row gap-4"}>
                  <div>
                    <Label htmlFor="fname" className={"mb-2 "}>
                      First Name
                    </Label>

                    <Input id="fname" name="fname" placeholder="Pratik" />
                  </div>
                  <div>
                    <Label className={"mb-2"} htmlFor="lname">
                      Last Name
                    </Label>
                    <Input id="lname" name="lname" placeholder="Mishra" />
                  </div>
                </Field>
                <Field className={"flex flex-row gap-4"}>
                  <div>
                    <Label className={"mb-2"} htmlFor="email">
                      Work email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type={"email"}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <Label className={"mb-2"} htmlFor="phone">
                      Phone number
                    </Label>
                    <Input
                      id="phone"
                      type={"number"}
                      name="phone"
                      placeholder="+91 1111111111"
                    />
                  </div>
                </Field>
                <Field>
                  <Label htmlFor="org">Organization name</Label>
                  <Input id="org" name="org" placeholder="Graphic Era" />
                </Field>

                <Field>
                  <Label htmlFor="inquiry">Type of inquiry</Label>
                  <NativeSelect>
                    <NativeSelectOption value={"enq"}>
                      General Enquiry
                    </NativeSelectOption>
                    <NativeSelectOption value={"sales"}>
                      Sales and Price
                    </NativeSelectOption>
                    <NativeSelectOption value={"tech"}>
                      Technical Support
                    </NativeSelectOption>
                    <NativeSelectOption value={"partner"}>
                      Partnership
                    </NativeSelectOption>
                  </NativeSelect>
                </Field>

                <Field>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your needs and we'll get back to you with a personalized solution."
                    className={"h-20"}
                  />
                </Field>
                <Button className="w-min" size="lg">
                  Send Message
                </Button>
              </FieldGroup>
            </div>
          </CardContent>
          <CardFooter className={"flex-col gap-2"}>
            <p className="text-[10px] text-muted-foreground">
              By submitting this form you agree to our Privacy Policy. We'll
              never share your information with third parties.
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

const Feattures = ({ icon, title, subtitle }) => {
  return (
    <div className="flex gap-2 mt-4 items-center">
      {icon}
      <div className="flex flex-col justify-center">
        <p className="text-xs text-muted-foreground">{subtitle}</p>
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
};
export default Contact;
