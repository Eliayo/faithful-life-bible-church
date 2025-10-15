import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Heart, BookOpen, Sun } from "lucide-react";
import ministriesBg from "../../assets/ministries-bg.jpg";

export default function Ministries() {
  const ministries = [
    {
      icon: <Users size={40} className="text-green-600" />,
      title: "Men’s Ministry",
      description:
        "Empowering men to lead in faith, family, and purpose through fellowship, study, and mentorship.",
    },
    {
      icon: <Heart size={40} className="text-green-600" />,
      title: "Women’s Ministry",
      description:
        "Inspiring women to grow spiritually, build community, and serve with grace and strength.",
    },
    {
      icon: <Sun size={40} className="text-green-600" />,
      title: "Youth Ministry",
      description:
        "Equipping the next generation to live boldly for Christ through discipleship, worship, and service.",
    },
    {
      icon: <BookOpen size={40} className="text-green-600" />,
      title: "Children’s Ministry",
      description:
        "Nurturing young hearts with the love of Jesus through stories, songs, and fun-filled learning.",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero / Intro Section */}
      <section className="bg-green-700 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Ministries
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-green-100 text-lg"
          >
            At Faithful Life Bible Church, every ministry is an opportunity to
            serve God, grow in faith, and impact lives. Find your place in God’s
            house.
          </motion.p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {ministries.map((ministry, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex justify-center mb-4">{ministry.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                {ministry.title}
              </h3>
              <p className="text-gray-600">{ministry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="relative bg-green-700 text-white py-20 mt-10 overflow-hidden">
        {/* ✅ Imported image used here */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 bg-cover bg-center"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join a Ministry and Be Part of the Mission
          </h2>
          <p className="text-green-100 mb-8 leading-relaxed">
            Every member has a role to play in advancing God’s kingdom. Whether
            it’s serving, mentoring, teaching, or worshipping — your gift can
            make a difference.
          </p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/visit"
              className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-100 transition-all"
            >
              Get Involved
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
