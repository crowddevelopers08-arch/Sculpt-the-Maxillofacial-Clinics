import Footers from "@/component/navbar-foot";
import Navbared from "@/component/navbars";
import ThankYouPage from "@/component/thank";
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
