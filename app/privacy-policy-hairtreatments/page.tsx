import Footers from "@/component/ht-navbar-foot";
import Navbared from "@/component/ht-navbars";
import PrivacyPolicy from "@/component/ht-privacy";
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
