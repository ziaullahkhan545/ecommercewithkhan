import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Navigation, Footer } from "./components/Index";
import {
  Home,
  AdminLogin,
  Contact,
  Courses,
  Offers,
  PageNotFound,
  CourseDetail,
  Checkout,
} from "./pages/Index";

// Main layout component with header and footer
const MainLayout = () => (
  <div>
    <Navigation />
    <Outlet />
    <Footer />
  </div>
);

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/our-courses" element={<Courses />} />
        <Route path="/our-courses/:id" element={<CourseDetail />} />
        <Route path="/our-offers" element={<Offers />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      {/* Separate route for Checkout page with its own header and footer */}
      <Route exact path="/auth/login" element={<AdminLogin />} />
      <Route exact path="/checkout/cn/:id" element={<Checkout />} />
    </Routes>
  );
}

export default App;
