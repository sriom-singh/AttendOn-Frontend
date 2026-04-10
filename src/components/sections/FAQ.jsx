import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "../ui/badge";

export default function FAQ() {
  return (
    <div className="py-20  w-full flex justify-center ">
      <div className="px-12 md:px-16 max-w-7xl flex flex-col gap-4 lg:px-24">
        
        {/* Header */}
        <header className="w-full flex flex-col justify-center mb-10">
          <Badge className="bg-primary/40 px-4 mb-4 text-xs rounded-full py-3 border border-primary/30 font-light">
            FAQ
          </Badge>

          <h1 className="text-2xl font-semibold pb-2">
            Frequently Asked Questions
          </h1>

          <p className="text-sm text-muted-foreground">
            Everything you need to know about how AttendON works and how it helps manage attendance efficiently.
          </p>
        </header>

        {/* FAQ */}
        <Accordion type="multiple" className="max-w-2xl flex flex-col gap-4">

          <AccordionItem value="q1" className={"border-2 rounded-md px-2"}>
            <AccordionTrigger className="text-sm">
              What is AttendON Attendance Management System?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              AttendON is a digital platform designed to track, manage, and analyze attendance for students or employees in real-time, reducing manual effort and errors.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className={"border-2 rounded-md px-2"} value="q2">
            <AccordionTrigger className="text-sm">
              How is attendance recorded?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Attendance can be recorded manually by admins or automatically using integrated systems like biometric devices, QR codes, or online check-ins.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3" className={"border-2 rounded-md px-2"}>
            <AccordionTrigger className="text-sm">
              Can I view attendance reports?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes, the system provides detailed reports including daily, weekly, and monthly attendance, along with analytics to track trends and performance.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4" className={"border-2 rounded-md px-2"}>
            <AccordionTrigger className="text-sm">
              Is the system secure?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes, AttendON ensures data security with authentication, role-based access control, and encrypted data handling.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q5" className={"border-2 rounded-md px-2"}>
            <AccordionTrigger className="text-sm">
              Can multiple users access the system?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes, different roles like admin, staff, and students can access the system with specific permissions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q6" className={"border-2 rounded-md px-2"}>
            <AccordionTrigger className="text-sm">
              Does it support mobile devices?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes, the system is fully responsive and can be accessed on mobile, tablet, and desktop devices.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </div>
  );
}