import React from "react";
import { Link } from "react-router-dom";

import {
  HeroSection,
  CoursesCollection,
  AboutSection,
  ScrollToTop,
} from "../components/Index";

function Home() {
  return (
    <div>
      <ScrollToTop />
      <HeroSection />
      <AboutSection />
      <CoursesCollection />
      <div className="bg-slate-200">
        <div className="container mx-auto mt-10 flex flex-col md:flex-row items-start md:flex-end justify-start md:items-end gap-6 bg-slate-200 p-10 md:py-20">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold capitalize">
              Join In Your Favorite Courses Today
            </h1>
            <p className="text-2xl md:text-4xl font-bold uppercase text-green-600">
              Apply Your Courses Today{" "}
              <span className="hidden md:inline-block text-3xl font-extrabold">
                &rarr;
              </span>
            </p>
          </div>
          <div className="mt-2">
            <Link
              to="/our-courses"
              className="inline-block transform rounded-md bg-green-600 px-6 py-3 font-semibold text-white shadow-md transition duration-300 ease-in-out hover:scale-105 hover:bg-green-700"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
