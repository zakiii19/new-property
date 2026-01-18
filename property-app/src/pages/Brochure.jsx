import React from "react";
import Navbar from "../components/Layouts/Navbar";
import FormProperty from "../components/Fragments/FormProperty";
import PreviewProperty from "../components/Fragments/PreviewProperty";
import Button from "../components/Elements/button/Button";
import { FaHome } from "react-icons/fa";
import BrochureLayout from "../components/Layouts/BrochureLayout";


export const Brochure = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <BrochureLayout/>
    </div>
  );
};
