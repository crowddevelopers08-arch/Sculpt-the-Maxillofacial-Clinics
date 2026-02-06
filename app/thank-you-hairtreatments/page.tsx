import Footers from "@/component/ht-navbar-foot";
import Navbared from "@/component/ht-navbars";
import ThankYouPage from "@/component/ht-thank";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbared />
      <ThankYouPage />
      <Footers />
    </div>
  );
};

export default page;
