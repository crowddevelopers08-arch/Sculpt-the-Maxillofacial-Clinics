
import Footers from "@/components/ht-navbar-foot";
import Navbared from "@/components/ht-navbars";
import PrivacyPolicy from "@/components/ht-privacy";
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
