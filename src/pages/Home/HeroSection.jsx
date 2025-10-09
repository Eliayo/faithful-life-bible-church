import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-green-900 via-green-800 to-green-700 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Welcome to{" "}
            <span className="text-green-300">Faithful Life Bible Church</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-green-100 max-w-md"
          >
            A place where lives are transformed through faith, love, and the
            Word of God. Join us this Sunday for a powerful encounter with
            Christ.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4"
          >
            <Link
              to="/visit"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition duration-300"
            >
              Plan a Visit
            </Link>
            <Link
              to="/livestream"
              className="border border-green-300 text-green-100 hover:bg-green-300 hover:text-green-900 px-6 py-3 rounded-full font-medium transition duration-300"
            >
              Watch Live
            </Link>
          </motion.div>
        </div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="relative"
        >
          <img
            src={heroImage}
            alt="Church Worship"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
