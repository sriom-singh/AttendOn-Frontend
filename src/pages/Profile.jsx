import React from "react";
import { useAuthStore } from "@/store/useAuthStore";

const Profile = () => {
  const user = useAuthStore((state) => state.user);
    let fname, lname;
  if (user) {
    let name = user.name.split(" ");
    fname = name[0];
    lname = name[1];
  }
  return (
    <div className="min-h-screen w-full mt-16">
      <div className="bg-primary/10  p-6 w-full px-12 md:px-16 lg:px-24">
      <div className="flex items-center gap-4">
        <p className="bg-primary/60 text-xl inline p-4 rounded-full"> {fname[0] + lname[1].toUpperCase()}</p>
        <div>
        <p className="font-sans-serif text-2xl font-bold">{user?.name}</p>
        <p className="text-muted-foreground text-xs">{user?.email}</p>

        </div>
      </div>
      </div>
    </div>
  );
};

export default Profile;
