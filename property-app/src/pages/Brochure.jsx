import React from "react";
import Navbar from "../components/Layouts/Navbar";
import BrochureLayout from "../components/Layouts/BrochureLayout";


export const Brochure = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <BrochureLayout/>
    </div>
  );
};
