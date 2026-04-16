import { Button } from "../ui/button";
import { MoveUpRight, Dot, ArrowDownNarrowWide } from "lucide-react";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "../ui/badge";
import StatsSection from "../ui/counter";

const stuendentData = [
  {
    name: "Kavya Sharma",
    status: "Present",
    avatar: "https://i.pravatar.cc/360",
  },
  {
    name: "Rahul Verma",
    status: "Absent",
    avatar: "https://i.pravatar.cc/210",
  },
  {
    name: "Ananya Singh",
    status: "Present",
    avatar: "https://i.pravatar.cc/30",
  },
  {
    name: "Arjun Patel",
    status: "Present",
    avatar: "https://i.pravatar.cc/20",
  },
  {
    name: "Sneha Reddy",
    status: "Absent",
    avatar: "https://i.pravatar.cc/10",
  },
];

const Hero = () => {
  return (
    <section className=" px-12 md:px-16 lg:px-24 bg-primary/10  flex lg:flex-row flex-col-reverse gap-10 md:pt10 pt-20 pb-4 min-h-[99vh] min w-full items-center justify-between">
      {/* Left Side*/}
      <div className="flex flex-col items-center md:items-start lg:w-1/2 gap-8">
        <Badge className="bg-primary/40  px-4 text-xs rounded-full py-3 border-[1px solid rgba(91,91,214,0.3)] font-light">
          <Dot className="inline  p-0 m-0" />
          Trusted by 500+ companies across India
        </Badge>
        <h1 className="text-5xl text-center md:text-start  font-sans-serif font-bold ">
         Attendance that works as hard as your,{" "}
          <span className="text-primary ">
             team does
          </span>
        </h1>
        <p className="font-light text-justify text-base text-muted-foreground">
          Track, manage and analyse employee attendance in real time. One
          platform for HR teams of all sizes — from startups to large
          enterprises.
        </p>
        <div className="flex gap-4 items-center">
          <Button variant="default" size="lg">
            Get started free <MoveUpRight className="inline p-0 m-0 size-2.5" />
          </Button>
          <Button size="lg" variant="outline">
            Book a demo
          </Button>
        </div>
        <StatsSection />
      </div>

      {/* Right Side */}

      <div>
        <Table>
          <TableCaption>
            <div className={"flex flex-row items-center justify-between"}>
              <div className="flex flex-col">
                <span className="text-base">210</span>
                <span className="text-primary">Present</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base">19</span>
                <span className="text-destructive/60">Absent</span>
              </div>
            </div>
          </TableCaption>
          <TableHeader>
            <TableRow className={"bg-primary/80 hover:bg-primary/80 w-full"}>
              <TableCell className={"text-[14px] min-w-xs"}>
                Live attendance — today
              </TableCell>
              <TableCell className="text-xs">
                {new Date().toLocaleDateString()}
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody className={"mt-2 border"}>
            {stuendentData.map((student) => (
              <TableRow key={student.name}>
                <TableCell className={"text-start flex items-center gap-2"}>
                  <Avatar>
                    <AvatarImage src={student.avatar} alt={student.name} />
                    <AvatarFallback>{student.name[0]}</AvatarFallback>
                  </Avatar>
                  {student.name}
                </TableCell>
                <TableCell>
                  <Badge
                    className={"rounded-full opacity-80"}
                    variant={
                      student.status === "Present" ? "default" : "destructive"
                    }
                  >
                    {student.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell
                colSpan={3}
                className={"text-muted-foreground text-center"}
              >
                +190 more{" "}
                <ArrowDownNarrowWide className="inline p-0 m-0 size-3" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Hero;
