import React from "react";
import logo from "@/assets/logo-noBG.png";

export default function BlackLogo() {
  return (
    <div className="flex items-center">
      <img src={logo} className="w-8" />
      <p className="uppercase font-bold text-black text-lg">Dashboard</p>
    </div>
  );
}
