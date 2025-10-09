import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-gray-50 font-pop">{children}</main>
      <Footer />
    </>
  );
}
