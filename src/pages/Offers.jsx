import React from "react";
import { Banner, ComingSoon, ScrollToTop } from "../components/Index";

function Offers() {
  return (
    <div>
      <ScrollToTop />
      <Banner page={"our services & offers"} />
      <ComingSoon />
    </div>
  );
}

export default Offers;
