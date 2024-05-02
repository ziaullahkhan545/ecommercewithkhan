import React from "react";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  const {
    id,
    productImage,
    title,
    description,
    profileImage,
    tutor,
    salePrice,
    actualPrice,
  } = course;

  return (
    <div className="container-fluid">
      <div className="container mx-auto p-4">
        <div className="max-w-[24rem] overflow-hidden rounded shadow-lg bg-gray-200">
          <Link
            to={`/our-courses/${course.id}`}
            className="hover:bg-sky-800 hover:opacity-70 hover:z-100 duration-500"
          >
            <img className="w-full" src={productImage} alt="Course Image" />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold hover:text-Primary cursor-pointer duration-500">
                {title}
              </div>
              <p
                className="text-base text-gray-700"
                style={{
                  height: "6em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {description}
              </p>
            </div>
          </Link>
          <div className="px-6 py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={profileImage}
                  alt="Tutor Profile Image"
                />
              </div>
              <div className="ml-3">
                <div className="font-semibold text-gray-900">{tutor}</div>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-gray-700">Price: </span>
              <span className="font-semibold">Rs-{salePrice}/-</span>
              <span className="text-gray-500 line-through">
                Rs-{actualPrice}/-
              </span>
            </div>
          </div>
          <div className="px-6 py-4">
            <Link
              to={`/checkout/cn/${id}`}
              className="inline-block rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 duration-300"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
