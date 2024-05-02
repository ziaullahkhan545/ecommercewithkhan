import React from "react";
import { Banner, ContactSection, ScrollToTop } from "../components/Index";

function Contact() {
  return (
    <>
      <ScrollToTop />
      <Banner page={"Contact Us"} />
      <ContactSection />;
    </>
  );
}

export default Contact;
