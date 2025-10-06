import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";

// Pages
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Sermons from "../pages/Sermons/Sermons";
import Ministries from "../pages/Ministries/Ministries";
import Events from "../pages/Events/Events";
import Give from "../pages/Give/Give";
import Contact from "../pages/Contact/Contact";

export default function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/events" element={<Events />} />
          <Route path="/give" element={<Give />} />
          <Route path="/contact" element={<Contact />} />

          {/* Optional: 404 page */}
          <Route
            path="*"
            element={
              <h1 className="text-center mt-10 text-2xl text-gray-700">
                Page Not Found
              </h1>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}
