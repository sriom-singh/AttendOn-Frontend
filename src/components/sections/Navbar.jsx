import { useState } from "react";
import { Button } from "../ui/button";
import { LogOut, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links = ["Home", "About Us", "Features", "Pricing", "Contact"];
const tabs = ["Overview", "Analytics", "Settings", "Team"];

const getPath = (link) => {
  return link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, "-")}`;
};

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState("Overview");
  const [mobileOpen, setMobileOpen] = useState(false);
  const user = useAuthStore((state) => state.user);
  const initials =
    user?.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase() || "U";
  const isAuthenticated = !!user;
  console.log(isAuthenticated);

  return (
    <nav className="w-full fixed top-0 bg-background/20 backdrop-blur-md  z-50 border-b px-12 md:px-16 lg:px-24 border-border ">
      {/* Top bar */}
      <div className="flex items-center justify-between  h-[60px]">
        {/* Brand */}
        <Link
          to="/"
          className="flex  items-center font-sans-serif font-medium text-xl gap-x-0.5  text-foreground no-underline"
        >
          <img
            src="/hero.png"
            alt="Login Illustration"
            className="size-6 mr-2"
          />
          Attend<span className="text-primary">ON</span>
        </Link>

        {/* Nav links (desktop) */}
        <div className="hidden md:flex items-center justify-center gap-1">
          {links.map((link) => {
            const path = getPath(link);
            const isActive = pathname === path;

            return (
              <Link
                to={path}
                key={link}
                className={`text-sm px-3 py-1.5 rounded-md transition-colors
        ${
          isActive
            ? "bg-primary/50 text-foreground font-medium"
            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
        }`}
              >
                {link}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center  gap-2">
          {!isAuthenticated && (
            <Button
              onClick={() => {
                navigate("login");
              }}
              className={"md:flex hidden"}
              variant="outline"
            >
              Sign In
            </Button>
          )}

          {/* <Button size="lg" variant="outline">
            Sign in
          </Button> */}
          {!isAuthenticated && (
            <Button
              onClick={() => {
                navigate("register");
              }}
              variant=""
              size="lg"
            >
              Get started free <MoveUpRight className="size-3" />
            </Button>
          )}

          {/* Profile */}
          {isAuthenticated && (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    className="w-[30px] h-[30px] rounded-full  flex items-center justify-center text-xs font-medium cursor-pointer border border-border"
                    variant="outline"
                  />
                }
              >
                {initials}
              </DropdownMenuTrigger>
              <DropdownMenuContent className={"rounded-xl"}>
                <DropdownMenuGroup>
                  <DropdownMenuLabel className={"rounded-lg"}>
                    My Account
                  </DropdownMenuLabel>
                  <DropdownMenuItem
                    className={"rounded-lg"}
                    onClick={() => {
                      navigate("/profile");
                    }}
                  >
                    Profile
                  </DropdownMenuItem>
                  {user?.role === "admin" && (
                    <DropdownMenuItem
                      className={"rounded-lg"}
                      onClick={() => {
                        navigate("/dashboard");
                      }}
                    >
                      Dashboard
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem className={"rounded-lg"}>
                    {" "}
                    Subscription
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className={"border bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-lg"}>
                    <LogOut /> Logout
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Mobile menu button */}
          <Button
            className="md:hidden flex flex-col gap-[5px] p-2 border-none bg-transparent cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="block w-5 h-[1.5px] bg-foreground rounded" />
            <span className="block w-5 h-[1.5px] bg-foreground rounded" />
            <span className="block w-5 h-[1.5px] bg-foreground rounded" />
          </Button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col gap-1 px-4 pb-3 border-b border-border">
          {links.map((link) => {
            const path = getPath(link);
            const isActive = pathname === path;

            return (
              <Link
                to={path}
                key={link}
                className={`text-sm px-3 py-1.5 rounded-md transition-colors
        ${
          isActive
            ? "bg-secondary text-foreground font-medium"
            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
        }`}
              >
                {link}
              </Link>
            );
          })}

          <Button
            onClick={() => {
              navigate("/login");
            }}
            className={"text-left w-full mb-2"}
            variant="outline"
          >
            Sign In
          </Button>

          {/* <Button size="lg" variant="outline">
            Sign in
          </Button> */}
          <Button variant="" className={"text-left w-full"} size="lg">
            Get started free <MoveUpRight className="size-3" />
          </Button>
        </div>
      )}

      {/* Tab bar */}
      {/* <div className="flex gap-0.5 px-6 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative text-[13px] px-3 py-2.5 border-none bg-transparent cursor-pointer transition-colors
              ${activeTab === tab
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
              }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#534AB7] rounded-t" />
            )}
          </button>
        ))}
      </div> */}
    </nav>
  );
}
