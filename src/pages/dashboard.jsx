import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Users,
  Check,
  Settings,
  LogOut,
  Plus,
  UserStar,
  Building2
} from "lucide-react";
import { Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Organization", path: "/dashboard/organization", icon: Building2  },
  { name: "Employees", path: "/dashboard/employees", icon: UserStar },
  { name: "Students", path: "/dashboard/students", icon: Users },
  { name: "Attendance", path: "/dashboard/attendance", icon: Check },
  { name: "Settings", path: "/dashboard/settings", icon: Settings },
];

const Dashboard = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const initials =
    user?.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase() || "U";

  const isActive = (path) => {
    if (path === "/dashboard") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const title = pathname.split("/")[2] || "dashboard";

  return (
    <SidebarProvider className="min-h-screen ">
      <Sidebar className="bg-slate-950  flex flex-col h-screen text-white">
        {/* Header */}

        <SidebarHeader className={"px-4 py-6 "}>
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
        </SidebarHeader>

        <SidebarSeparator className="mb-4" />

        {/* Menu */}
        <p className="text-[10px] text-muted-foreground uppercase pt-2 px-2">
          Overview
        </p>
        <SidebarContent className="flex-1 overflow-y-auto">
          <SidebarMenu className="px-2 py-2">
            {menuItems.map((item) => {
              const active = isActive(item.path);

              return (
                <SidebarMenuItem className={"p-0 py-1"} key={item.name}>
                  <SidebarMenuButton
                    // onClick={() => navigate(item.path)}

                    asChild
                  >
                    <Link
                      className={`w-full flex gap-2 justify-start py-2 cursor-pointer transition-colors ${
                        active
                          ? "bg-primary/10 hover:bg-primary/10 text-primary font-medium hover:text-primary"
                          : "text-slate-300 hover:bg-slate-800 py-0 hover:text-white"
                      }`}
                      to={item.path}
                    >
                      <item.icon size={18} />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>
        {/* Footer */}
        <SidebarFooter className="mt-auto text-xs px-4 py-4">
          {/* <LogOut size={16} /> Logout */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-2 items-center cursor-pointer  w-full">
              <span className="bg-primary/40 rounded-full p-3">{initials}</span>
              <div>
                <p className="font-sans-serif text-start font-bold">
                  {user?.name}
                </p>
                <p className="text-muted-foreground text-xs">{user?.email}</p>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={"rounded-xl w-20"}>
              <DropdownMenuGroup>
                <DropdownMenuLabel className={"rounded-lg text-xs"}>
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuItem
                  className={"rounded-lg text-xs"}
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  Profile
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem
                  className={"border text-xs bg-red-700 rounded-lg"}
                >
                  <LogOut /> Logout
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarFooter>
      </Sidebar>
      {/* Content */}
      <SidebarInset className="flex-1">
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Dashboard;
