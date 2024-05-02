import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import data from "../assets/Courses";
import { Banner, ScrollToTop, Spinner, Details } from "../components/Index";
import { PageNotFound } from "../pages/Index";

function CourseDetail() {
  const [course, setCourse] = useState(null);
  const { id } = useParams();
  console.log("type of id:", typeof id, "id: ", id);

  useEffect(() => {
    console.log("id in useeffect: ", id);
    const getCourse = data.find((element) => element.id === id);
    console.log(getCourse);
    setCourse(getCourse);
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Banner page={course && course.title} />
      {course ? (
        <div className="container mx-auto py-10 px-2">
          <div className="max-w-4xl mx-auto px-2 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:order-2">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                  {course.title}
                </h1>
                <div className="my-4">
                  <span className="text-gray-700 text-xl font-semibold capitalize">
                    Price:{" "}
                  </span>
                  <span className="font-bold text-xl text-Secondary">
                    Rs-{course.salePrice}/-
                  </span>
                  <span className="text-gray-500 line-through">
                    Rs-{course.actualPrice}/-
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{course.description}</p>
                <ul className="mt-6 mb-10 px-4 text-gray-700 capitalize font-semibold">
                  <li className="flex justify-start items-center align-middle my-4">
                    <IoMdCheckmarkCircleOutline className="text-Secondary inline-block mr-1 text-2xl" />{" "}
                    Trainer Support
                  </li>
                  <li className="flex justify-start items-center align-middle my-4">
                    <IoMdCheckmarkCircleOutline className="text-Secondary inline-block mr-1 text-2xl" />{" "}
                    Certificate of Completion
                  </li>
                  <li className="flex justify-start items-center align-middle my-4">
                    <IoMdCheckmarkCircleOutline className="text-Secondary inline-block mr-1 text-2xl" />{" "}
                    Interenship Oppertunity
                  </li>
                </ul>
                <Link
                  to={`/checkout/cn/${id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
                >
                  Enroll Now
                </Link>
              </div>
              <div className="md:order-1">
                <img
                  src={`${course.productImage}`}
                  alt="Course Image"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
            <div className="bg-gray-100 mt-14 py-2 border border-t-Primary border-b-Primary">
              <div className="container mx-auto text-2xl font-bold text-Primary uppercase text-center">
                DESCRIPTION
              </div>
            </div>
            <Details id={course.id} />
          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
}

export default CourseDetail;
