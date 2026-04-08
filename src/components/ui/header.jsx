import React from "react";
import { Badge } from "./badge";
const Header = ({ title, subtitle, description }) => {
  return (
    <header>
        <Badge className="bg-primary/40 px-4 mb-4 text-xs rounded-full py-3 border-[1px solid rgba(91,91,214,0.3)] font-light">
        {title}
      </Badge>
      <h1 className="text-2xl font-sans-serif font-semibold pb-2">
        {subtitle}
      </h1>
      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </header>
  );
};

export default Header;
