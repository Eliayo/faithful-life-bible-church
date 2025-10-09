import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function JoinUs() {
  return (
    <section className="relative bg-gradient-to-r from-green-700 to-green-600 py-24 overflow-hidden text-white">
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 bg-cover bg-center"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          You’re Invited to Experience God’s Presence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-green-50 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Join us this Sunday for uplifting worship, inspiring messages, and a
          loving community that feels like family. There’s a place for you here
          at Faithful Life Bible Church.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <Link
            to="/visit"
            className="bg-white text-green-700 hover:bg-green-100 font-semibold px-8 py-3 rounded-lg shadow-md transition-all"
          >
            Plan Your Visit
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white hover:bg-white hover:text-green-700 font-semibold px-8 py-3 rounded-lg transition-all"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
