import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Welcome to{" "}
          <span className="text-yellow-400">Faithful Life Bible Church</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl">
          A place where lives are transformed by the Word of God. Join us every
          Sunday for a time of worship, teaching, and fellowship.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Link
            to="/visit"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold transition"
          >
            Plan Your Visit
          </Link>

          <Link
            to="/sermons"
            className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition"
          >
            Watch Sermons
          </Link>
        </div>
      </div>
    </section>
  );
}
