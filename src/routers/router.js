import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/About";
import CarListing from "../pages/carlisting";
import CarDetails from "../pages/cardetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/blogdetails";
import NotFound from "../pages/notfound";
import Contact from "../pages/contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;