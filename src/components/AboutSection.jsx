import React from "react";
import about from "../../public/about.png";

function AboutSection() {
  return (
    <section className="bg-gray-100 py-12 lg:py-24" id="about">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              About Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Ecommerce with Khan!
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              At Ecommerce with Khan, we're dedicated to empowering
              entrepreneurs like you to thrive in the dynamic world of
              ecommerce.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Our mission is to provide you with the knowledge, tools, and
              resources you need to succeed in building and growing your online
              business. Join us on this exciting journey to ecommerce success
              with Ecommerce with Khan!
            </p>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <img src={about} alt="About Us" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
