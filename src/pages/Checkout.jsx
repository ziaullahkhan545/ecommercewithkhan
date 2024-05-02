import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";

import { Input } from "../components/Index";
import logo from "../../public/logo.png";
import data from "../assets/Courses";
import PageNotFound from "./PageNotFound";
import { ScrollToTop } from "../components/Index";

function Checkout() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [inputData, setInputData] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    mobileNumber: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    address: false,
    city: false,
    postalCode: false,
    mobileNumber: false,
  });

  let { name, email, address, city, postalCode, mobileNumber } = formData;

  let course = data.find((element) => element.id === id);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: value.trim() === "" });
  };

  const handleSubmit = () => {
    // Check for errors before proceeding
    if (
      name === "" ||
      email === "" ||
      address === "" ||
      city === "" ||
      postalCode === "" ||
      mobileNumber === ""
    ) {
      alert("Please fill in all required fields.");
      return;
    } else {
      setInputData(!inputData);
    }
  };

  const handleOrder = () => {
    const orderData = {
      title: course.title,
      price: course.salePrice,
      ...formData,
    };

    console.log(orderData);

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    };

    setLoading(true);

    fetch("https://ecommercewithkhan.com/order.php", fetchOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setFormData({
            name: "",
            email: "",
            address: "",
            city: "",
            postalCode: "",
            mobileNumber: "",
          });
          setInputData(!inputData);
          alert(
            "Your message has been recieved. thanks for purchasing our course, our team will contact you shortly."
          );
        } else {
          alert("Sorry, something went wrong. Please, try again.");
        }
        if (data.error) {
          alert(data.error);
        }
        setLoading(false);
      });
  };

  return (
    <>
      <ScrollToTop />
      {course ? (
        <div className="bg-[#244676] min-h-screen">
          <div className="container mx-auto">
            <div className="text-center flex justify-center">
              <Link to="/">
                <img src={logo} height="120px" width="120px" />
              </Link>
            </div>
          </div>
          <div
            className="border border-t-1 border-b-1 border-r-0 border-l-0 border-gray-100 text-gray-200 cursor-pointer md:hidden"
            onClick={() => setShowSummary(!showSummary)}
          >
            <div className="container mx-auto flex justify-between items-center align-middle p-4">
              <h1 className="text-md text-gray-100">
                Show Order Summary{" "}
                <MdArrowDropDown className="inline-block text-lg" />
              </h1>
              <h1 className="text-xl font-bold">Rs. {course.salePrice}/-</h1>
            </div>
          </div>
          <div className="hidden md:block border border-t-1 border-r-0 border-l-0 border-gray-100 text-gray-200"></div>
          {showSummary && (
            <div className="container mx-auto p-2 bg-gray-200 flex flex-col gap-4">
              <div className="flex justify-between text-md text-gray-700">
                <div className="flex justify-start w-[70%] gap-3">
                  <img src={course.productImage} width="90px" height="90px" />
                  <p>{course.title}</p>
                </div>
                <p className="font-bold">Rs. {course.salePrice}/-</p>
              </div>
              <div className="flex justify-between items-center align-middle border border-t-1">
                <h1 className="text-lg text-gray-800">Total</h1>
                <h1 className="text-lg text-gray-900 font-semibold">
                  Pkr. {course.salePrice}/-
                </h1>
              </div>
            </div>
          )}
          <div className="flex justify-center mx-auto">
            {inputData ? (
              <div className="md:w-1/2 mx-auto p-2 flex flex-col gap-4 my-8">
                <div className="flex flex-col gap-4">
                  <h1 className="text-xl text-gray-100">Billing Address</h1>
                  <input
                    className={`rounded-md py-3 px-4 border-none outline-none text-md w-[100%] ${
                      formErrors.name ? "border-red-500" : ""
                    }`}
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleInputChange}
                    value={name}
                  />
                  <input
                    className={`rounded-md py-3 px-4 border-none outline-none text-md w-[100%] ${
                      formErrors.name ? "border-red-500" : ""
                    }`}
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={handleInputChange}
                    value={email}
                  />
                  <input
                    className={`rounded-md py-3 px-4 border-none outline-none text-md w-[100%] ${
                      formErrors.name ? "border-red-500" : ""
                    }`}
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={handleInputChange}
                    value={address}
                  />
                  <div className="flex gap-4">
                    <input
                      className={`rounded-md py-3 px-4 border-none outline-none text-md w-[100%] ${
                        formErrors.name ? "border-red-500" : ""
                      }`}
                      type="text"
                      name="city"
                      placeholder="City"
                      onChange={handleInputChange}
                      value={city}
                    />
                    <input
                      className={`rounded-md py-3 px-4 border-none outline-none text-md w-[100%] ${
                        formErrors.name ? "border-red-500" : ""
                      }`}
                      type="text"
                      name="postalCode"
                      placeholder="Postal Code"
                      onChange={handleInputChange}
                      value={postalCode}
                    />
                  </div>
                  <input
                    className={`rounded-md py-3 px-4 border-none outline-none text-md w-[100%] ${
                      formErrors.name ? "border-red-500" : ""
                    }`}
                    type="text"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    onChange={handleInputChange}
                    value={mobileNumber}
                  />
                </div>
                <button
                  className="text-gray-100 px-4 py-2 rounded-md text-lg mt-4 bg-Primary hover:bg-blue-700 duration-500"
                  onClick={handleSubmit}
                >
                  Proceed Your Order
                </button>
              </div>
            ) : (
              <div className="md:w-1/2 mx-auto p-4 flex flex-col gap-4 my-8">
                <div className="flex flex-col gap-4">
                  <p
                    className="block text-xl text-white hover:text-gray-300 duration-500 cursor-pointer"
                    onClick={() => setInputData(!inputData)}
                  >
                    &#8592; Go Back
                  </p>
                  <p className="text-gray-300">
                    Hi{" "}
                    <span className="text-lg font-medium capitalize">
                      {name}
                    </span>
                    , Please, pay your Pkr.{" "}
                    <span className="text-lg font-medium">
                      {course.salePrice}
                    </span>{" "}
                    fee in any given account and upload your reciept below on
                    our whatsapp contact link. thanks
                  </p>
                  <div className="bg-gray-200 rounded-md p-4">
                    <p className="text-gray-700 mb-4">
                      <strong className="my-2">Payment Details:</strong>
                      <br />
                      EasyPaisa: Mudassir iqbal 03151456225
                      <br />
                      Bank UBL: Mudassir Iqbal
                      <br />
                      Account No: 1369234876796
                      <br />
                      IBAN:PK37UNIL0109000234876796
                    </p>
                    <p className="text-gray-700 mb-4">
                      <strong className="my-2">Location:</strong>
                      <br />
                      Office 👉 B Block Main Markaz Hazro Arcade office No 8
                      ,Multi garden B17 Islamabad.
                    </p>
                  </div>
                  <p className="text-gray-300">
                    Kindly, upload your reciept here on our Whatsapp link.
                    <br />
                    Our Whatsapp Contact Link ...
                    <a
                      className="text-xl font-semibold text-yellow-200"
                      target="blank"
                      href="http://Wa.me/+923355534783"
                    >
                      👉 Upload Here
                    </a>{" "}
                    <br />
                  </p>
                  {/* <input
                    className={`rounded-md py-2 px-4 bg-slate-200 outline-none text-md cursor-pointer`}
                    type="file"
                    name="file"
                  /> */}
                  <button
                    className="text-gray-100 px-4 py-2 rounded-md text-lg mt-4 bg-Primary hover:bg-blue-700 duration-500"
                    onClick={handleOrder}
                  >
                    {loading ? "loading ..." : "Place Your Order"}
                  </button>
                </div>
              </div>
            )}
            <div className="hidden md:block w-1/2 min-h-screen p-2 bg-gray-100">
              <div className="max-w-[500px] p-4 bg-gray-200 flex flex-col gap-4">
                <div className="flex justify-between text-md">
                  <div className="flex justify-start w-[70%] gap-3">
                    <img
                      src={course.productImage}
                      width="120px"
                      height="120px"
                    />
                    <p>
                      Local ecommerce store, setup with master in the industry
                    </p>
                  </div>
                  <p className="font-bold">Rs. {course.salePrice}/-</p>
                </div>
                <div className="flex justify-between items-center align-middle border border-t-1">
                  <h1 className="text-lg text-gray-800">Total</h1>
                  <h1 className="text-lg text-gray-900 font-semibold">
                    Pkr. {course.salePrice}/-
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
    </>
  );
}

export default Checkout;
