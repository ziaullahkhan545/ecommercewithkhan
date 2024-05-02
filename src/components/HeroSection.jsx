import React from "react";
import { Link } from "react-router-dom";
import hero_mobile from "../../public/hero_mobile.png";
import hero_tablet from "../../public/hero_tablet.png";
import hero_desktop from "../../public/hero_tablet.png";

function HeroSection() {
  return (
    <div className="container-fluid sm:mt-0">
      <div className="relative h-[80vh] md:h-[80vh] lg:h-screen flex justify-center items-center">
        <div
          className={`absolute sm:hidden inset-0 bg-center bg-cover bg-no-repeat w-full h-full`}
          style={{ backgroundImage: `url(${hero_mobile})` }}
        ></div>
        <div
          className={`hidden sm:block md:hidden absolute inset-0 bg-center bg-cover bg-no-repeat w-full h-full`}
          style={{ backgroundImage: `url(${hero_tablet})` }}
        ></div>
        <div
          className={`hidden md:block absolute inset-0 bg-center bg-cover bg-no-repeat w-full h-screen`}
          style={{ backgroundImage: `url(${hero_desktop})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-Primary to-Secondary opacity-30"></div>
        <div className="text-center text-white relative sm:w-[38rem] -mt-10 p-2 sm:p-0 sm:mt-0">
          {/* <h1 className="text-4xl font-bold mb-4 sm:text-5xl sm:font-bolder">
            Start Your Business & Pursue Your Dreams
          </h1> */}
          {/* <p className="text-lg mb-6 sm:text-2xl">
            We teach and help our students succeed by building ecommerce store,
            creating brand identities, marketing campaign and sale strategies.
          </p> */}
          <div className="mt-6">
            <Link
              to="/our-courses"
              className="bg-white border border-Secondary duration-300 text-gray-800 px-6 py-3 rounded-full inline-block font-semibold mr-4 hover:bg-Secondary hover:text-gray-100"
            >
              View Our Courses
            </Link>
            <Link
              to="/contact-us"
              className="text-Secondary border border-Secondary px-6 py-3 rounded-full inline-block font-semibold bg-white hover:bg-Secondary hover:text-gray-200 duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
