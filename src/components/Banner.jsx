import React from "react";
import { Link } from "react-router-dom";

function Banner({ page }) {
  return (
    <div className="container-fluid sm:mt-0">
      <div className="relative h-[20rem] flex justify-center items-center">
        <div className="absolute inset-0 bg-[url(https://www.shutterstock.com/image-photo/elearning-education-internet-lessons-online-600nw-2158034833.jpg)] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-Primary to-Secondary opacity-60"></div>
        <div className="text-center text-white relative sm:w-[38rem] -mt-10 p-2 sm:p-0 sm:mt-0">
          <div className="flex justify-center items-center align-middle">
            <div className="bg-gray-200 opacity-90 px-10 py-4 rounded-md font-semibold text-gray-900 flex justify-center items-center gap-4 capitalize">
              <Link
                to="/"
                className="bg-Primary px-4 py-1 text-gray-200 hover:bg-blue-500 hover:text-gray-100 rounded-md duration-500"
              >
                Home
              </Link>
              <p>/</p>
              <p className="text-gray-800 sm:text-bold">{page}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
