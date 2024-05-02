import React from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../public/logo.png";

function Footer() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container-fluid bg-[#111212]">
        <div className="container py-10 px-4 grid gap-12 md:grid-cols-2 lg:grid-cols-3 text-gray-200 mx-auto">
          <div className="flex flex-col gap-4 max-w-[350px]">
            <Link to="/">
              {/* <h1 className="w-full md:text-2xl text-xl font-bold text-gray-200">
                eCommerce{" "}
                <span className="text-Secondary upppercase font-bold bg-gray-200 px-3 rounded-md uppercase">
                  School
                </span>
              </h1> */}
              <img src={logo} alt="" width="120px" height="120px" />
            </Link>
            <p className="text-gray-300 text-lg">
              We’re always in search for talented and motivated people. Don’t be
              shy introduce yourself!
            </p>
            <div className="w-1/2">
              <Link
                // onClick={() => navigate("/contact-us")}
                to="/contact-us"
                className="text-gray-100 border text-center border-white px-6 py-3 rounded-full inline-block font-semibold hover:bg-Secondary duration-300 w-full"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className=" flex flex-col gap-4">
            <h1 className="text-gray-50 font-bold text-xl md:text-2xl">
              Usefull Links
            </h1>
            <ul className="flex flex-col gap-2">
              <li className="hover:text-Secondary duration-300">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-Secondary duration-300">
                <Link to="#about">About us</Link>
              </li>
              <li className="hover:text-Secondary duration-300">
                <Link to="/our-offers">Our Offers</Link>
              </li>
              <li className="hover:text-Secondary duration-300">
                <Link to="/our-courses">Our Courses</Link>
              </li>
              <li className="hover:text-Secondary duration-300">
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-gray-50 font-bold text-xl md:text-2xl">
              Get Contact
            </h1>
            <span className="font-semibold -mb-2">
              Phone:{" "}
              <a
                href="tel:+923355534783"
                className="text-gray-300 font-normal hover:text-Secondary duration-300 cursor-pointer"
              >
                +92-335-5534783
              </a>
            </span>
            <span className="font-semibold -mb-2">
              Email:{" "}
              <a
                href="mailto:ecommercewithkhan@gmail.com"
                className="text-gray-300 font-normal hover:text-Secondary duration-300 cursor-pointer"
              >
                ecommercewithkhan@gmail.com
              </a>
            </span>
            <span className="font-semibold">
              Address:{" "}
              <span className="text-gray-300 font-normal">
                B Block Main Markaz Hazro Arcade office No 8 ,Multi
                garden B17 Islmabad.
              </span>
            </span>
          </div>
        </div>
        <div className="container-fluid bg-[#282e2e] p-4 text-white">
          <div className="mx-auto container md:flex md:justify-center">
            <p>&copy; 2024 ecommercewithkhan. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
