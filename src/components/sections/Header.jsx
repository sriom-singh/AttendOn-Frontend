import React from "react";
import { Badge } from "@/components/ui/badge";

const Header = ({ title, heading, description, component }) => {
  return (
    <div className="bg-primary/5 w-full  px-16 flex flex-col gap-4 py-16 text-center justify-center">
      <Badge className="bg-primary/40 text-center mx-auto px-4 text-xs rounded-full py-3 border-[1px solid rgba(91,91,214,0.3)] font-light">
        {title}
      </Badge>
      <h1 className="text-4xl w-1/3 text-center mx-auto   font-sans-serif font-bold ">
        {heading}
      </h1>
      <p className="font-light text-center w-1/2 mx-auto  text-sm text-muted-foreground">
       {description}
      </p>
      {component}
    </div>
  );
};

export default Header;
