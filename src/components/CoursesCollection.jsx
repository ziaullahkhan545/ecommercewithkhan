import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CourseCard } from "./Index";
import data from "../assets/Courses";

function CoursesCollection() {
  const [allCourses, setAllCourses] = useState(false);
  useEffect(() => {
    const path = window.location.pathname;
    if (path !== "/our-courses") {
      setAllCourses(true);
    }
  }, []);

  return (
    <div className="container-fluid">
      <div className="container mx-auto my-10 pb-10">
        <div className="flex flex-col justify-center items-center align-middle p-10 my-10 mx-auto">
          <h1 className="text-Secondary uppercase text-normal border border-gray-500 rounded-full py-2 px-4 text-center max-w-72 bg-gray-100">
            Our Popular Courses
          </h1>
          <span className="text-2xl font-bold text-gray-800 capitalize text-center w-80 md:w-96 mt-4 md:text-3xl">
            Our Courses That Students Can Join With Us
          </span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {data.slice(0, 3).map((course, index) => {
            return (
              <div key={index}>
                <CourseCard course={course} />
              </div>
            );
          })}
        </div>
        {allCourses && (
          <div className="flex justify-center py-8 duration-500">
            <Link
              className="text-center text-xl font-semibold uppercase text-Secondary bg-gray-200 py-4 px-8 rounded-lg hover:bg-gray-300 hover:text-green-800 duration-500 hover:border hover:border-green-800 hover:font-bold"
              to="/our-courses"
            >
              View All Our Courses
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CoursesCollection;
