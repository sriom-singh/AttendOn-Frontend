import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Settings = () => {
  return (
    <div>
      <div className="bg-primary/10 justify-between items-center gap-4 flex w-full p-2 py-3">
        <div className="flex items-center gap-3">
          <SidebarTrigger/>
          <h2 className="font-sans-serif">Settings</h2>
        </div>
      
      </div>
    </div>
  );
};

export default Settings;
