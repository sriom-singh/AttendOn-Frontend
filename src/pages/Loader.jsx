import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center gap-4 items-center w-full">
      <img src="/hero.png" alt="Login Illustration" className="size-20 animate-spin mr-2" />{" "}
      <p className="text-2xl font-sans-serif">Loading..<span className="animate-ping"></span>.</p>
    </div>
  );
};

export default Loader;
