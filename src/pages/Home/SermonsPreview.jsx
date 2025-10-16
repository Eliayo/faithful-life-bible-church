import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PlayCircle } from "lucide-react";
import sermon1 from "../../assets/sermon1.jpg";
import sermon2 from "../../assets/sermon2.jpg";
import sermon3 from "../../assets/sermon3.jpg";

const sermons = [
  {
    id: 1,
    title: "Living by Faith, Not by Sight",
    speaker: "Pastor Enoch Oluwatosin",
    date: "September 15, 2025",
    image: sermon1,
  },
  {
    id: 2,
    title: "The Power of Persistent Prayer",
    speaker: "Pastor Enoch Oluwatosin",
    date: "September 22, 2025",
    image: sermon2,
  },
  {
    id: 3,
    title: "Walking in the Spirit Daily",
    speaker: "Pastor Enoch Oluwatosin",
    date: "September 29, 2025",
    image: sermon3,
  },
];

export default function SermonsPreview() {
  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-800 mb-4"
        >
          Recent <span className="text-green-600">Sermons</span>
        </motion.h2>
        <p className="text-green-700 max-w-2xl mx-auto mb-12">
          Stay inspired and encouraged through our weekly sermons. Hear the Word
          that transforms lives and strengthens faith.
        </p>

        {/* Sermon Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {sermons.map((sermon, index) => (
            <motion.div
              key={sermon.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={sermon.image}
                  alt={sermon.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0  group-hover:bg-green-700/40 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-14 h-14 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {sermon.title}
                </h3>
                <p className="text-green-700 text-sm mb-1">{sermon.speaker}</p>
                <p className="text-green-600 text-sm mb-4">{sermon.date}</p>
                <button className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-all">
                  Watch Sermon
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Centered View All Sermons Button */}
        <div className="flex justify-center">
          <Link
            to="/sermons"
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all shadow-md"
          >
            View All Sermons
          </Link>
        </div>
      </div>
    </section>
  );
}
