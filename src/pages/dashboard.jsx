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
} from "@/components/ui/sidebar";
import { LayoutDashboard, Users, Check, Settings } from "lucide-react";
import { Outlet } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Employees", path: "/dashboard/employees", icon: Users },
  { name: "Students", path: "/dashboard/students", icon: Users },
  { name: "Attendance", path: "/dashboard/attendance", icon: Check },
  { name: "Settings", path: "/dashboard/settings", icon: Settings },
];

const Dashboard = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isActive = (path) => {
    if (path === "/dashboard") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <SidebarProvider className="min-h-screen ">
      <Sidebar className="bg-slate-950 text-white">
        {/* Header */}
        <SidebarHeader className="px-4 py-6 text-lg font-medium flex-row gap-0">
          <span>Attend</span>
          <span className="text-primary">ON</span>
        </SidebarHeader>

        <SidebarSeparator className="mb-4" />

        {/* Menu */}
        <p className="text-[10px] text-muted-foreground uppercase pt-2 px-2">
          Overview
        </p>

        <SidebarMenu className="px-2 py-2">
          {menuItems.map((item) => {
            const active = isActive(item.path);

            return (
              <SidebarMenuItem className={"py-1"} key={item.name}>
                <SidebarMenuButton
                  onClick={() => navigate(item.path)}
                  className={`w-full justify-start cursor-pointer transition-colors ${
                    active
                      ? "bg-primary/10 hover:bg-primary/10 text-primary font-medium hover:text-primary"
                      : "text-slate-300 hover:bg-slate-800 py-0 hover:text-white"
                  }`}
                  asChild
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>

        {/* Footer */}
        <SidebarFooter className="px-4 py-4 text-xs ">
          Logged in as Student
        </SidebarFooter>
      </Sidebar>

      {/* Content */}
      <SidebarInset className="flex-1 p-10">
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Dashboard;
