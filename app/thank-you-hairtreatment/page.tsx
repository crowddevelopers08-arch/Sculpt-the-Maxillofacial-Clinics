
import Footers from "@/components/ht-navbar-foot";
import Navbared from "@/components/ht-navbars";
import ThankYouPage from "@/components/ht-thank";
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
