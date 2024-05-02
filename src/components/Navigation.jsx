import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../public/logo.png";

const Navigation = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Scroll to about section function
  function scrollToAbout() {
    console.log("scrollto about called");
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleMenu(path) {
    if (path === "#about" && path !== "/") {
      navigate("/");
      scrollToAbout();
      handleNav();
      console.log("done : ", path);
      return null;
    }
    navigate(path);
    setNav(!nav);
  }

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 4, text: "About", path: "#about", onClick: scrollToAbout }, // Added onClick handler
    { id: 2, text: "Courses", path: "/our-courses" },
    { id: 3, text: "Offers", path: "/our-offers" },
    { id: 5, text: "Contact", path: "/contact-us" },
  ];

  return (
    <div className="top-0 w-full z-50">
      {" "}
      {/* Added fixed class */}
      <div className="container-fluid bg-Primary">
        <div className="container flex justify-between items-center h-20 mx-auto px-4 text-white sm:h-24">
          {/* Logo */}
          <Link to="/">
            {/* <h1 className="w-full sm:text-2xl text-xl font-semibold text-gray-100">
              eCommerce{" "}
              <span className="text-Secondary upppercase font-bold bg-gray-100 px-3 rounded-md uppercase">
                School
              </span>
            </h1> */}
            <img src={logo} height="120px" width="120px" className="p-2" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex">
            {navItems.map((item) => (
              <Link
                key={item.id}
                className="p-4 hover:bg-Secondary rounded-xl m-2 cursor-pointer duration-300 hover:text-gray-100"
                to={`${item.path}`}
                onClick={item.onClick}
              >
                {item.text}
              </Link>
            ))}
          </ul>

          {/* Mobile Navigation Icon */}
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>

          {/* Mobile Navigation Menu */}
          <ul
            className={
              nav
                ? "fixed md:hidden left-0 top-0 w-[80%] h-full border-r border-r-gray-200 bg-Primary ease-in-out duration-500 z-[1000]"
                : "ease-in-out w-[80%] duration-500 fixed top-0 bottom-0 left-[-100%] z-[1000]"
            }
          >
            {/* Mobile Logo */}
            {/* <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            REACT.
          </h1> */}
            {/* <h1 className="w-full text-xl font-semibold text-white m-4">
              eCommerce{" "}
              <span className="text-Secondary upppercase font-bold bg-gray-100 px-2 rounded-md uppercase">
                School
              </span>
            </h1> */}

            <img src={logo} height="120px" width="120px" className="p-2" />

            {/* Mobile Navigation Items */}
            {navItems.map((item) => (
              <li
                key={item.id}
                className="p-4 border-b rounded-xl hover:bg-Secondary duration-300 hover:text-gray-100 cursor-pointer border-gray-600"
                onClick={() => handleMenu(item.path)}
              >
                <p>{item.text}</p> {/* Added onClick handler */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
