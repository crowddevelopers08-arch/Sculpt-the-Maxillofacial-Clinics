import Footers from "@/component/navbar-foot";
import Navbared from "@/component/navbars";
import PrivacyPolicy from "@/component/privacy";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbared />
      <PrivacyPolicy />
      <Footers />
    </div>
  );
};

export default page;
