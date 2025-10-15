import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { PlayCircle, X } from "lucide-react";

import sermonHero from "../../assets/sermons-bg.jpg";
import sermon1 from "../../assets/sermon1.jpg";
import sermon2 from "../../assets/sermon2.jpg";
import sermon8 from "../../assets/sermon8.jpg";
import sermon4 from "../../assets/sermon4.jpg";
import sermon5 from "../../assets/sermon5.jpg";
import sermon7 from "../../assets/sermon7.jpg";

export default function Sermons() {
  const [active, setActive] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const sermons = [
    {
      id: 1,
      title: "Walking in Faith",
      preacher: "Pastor John Doe",
      date: "September 14, 2025",
      category: "Sunday Message",
      image: sermon1,
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "The Power of Prayer",
      preacher: "Rev. Sarah Olatunde",
      date: "September 7, 2025",
      category: "Bible Study",
      image: sermon2,
      youtubeId: "kXYiU_JCYtU",
    },
    {
      id: 3,
      title: "Living with Purpose",
      preacher: "Pastor James Okoro",
      date: "August 31, 2025",
      category: "Sunday Message",
      image: sermon8,
      youtubeId: "3JZ_D3ELwOQ",
    },
    {
      id: 4,
      title: "Anchored in Hope",
      preacher: "Pastor John Doe",
      date: "August 24, 2025",
      category: "Special",
      image: sermon4,
      youtubeId: "fJ9rUzIMcZQ",
    },
    {
      id: 5,
      title: "Grace That Frees",
      preacher: "Rev. Sarah Olatunde",
      date: "August 17, 2025",
      category: "Bible Study",
      image: sermon5,
      youtubeId: "hY7m5jjJ9mM",
    },
    {
      id: 6,
      title: "Rise Up: Youth Message",
      preacher: "Youth Pastor",
      date: "August 10, 2025",
      category: "Youth",
      image: sermon7,
      youtubeId: "6_b7RDuLwcI",
    },
  ];

  const filteredSermons =
    filter === "All" ? sermons : sermons.filter((s) => s.category === filter);

  const openSermon = (sermon) => {
    setActive(sermon);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setTimeout(() => setActive(null), 300);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const categories = [
    "All",
    "Sunday Message",
    "Bible Study",
    "Youth",
    "Special",
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section
        className="relative bg-cover bg-center text-white py-28 px-6"
        style={{ backgroundImage: `url(${sermonHero})` }}
      >
        <div className="absolute inset-0 bg-green-900/75"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Watch & Listen to Our Sermons
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg text-green-100 max-w-3xl mx-auto"
          >
            Be inspired, encouraged, and strengthened through the Word of God.
            Browse our sermon library below — watch or listen to messages for
            every season of life.
          </motion.p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="py-5 px-4 bg-green-50 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-3 overflow-x-auto scrollbar-none w-full md:w-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
                  filter === cat
                    ? "bg-green-700 text-white shadow-md"
                    : "bg-green-50 text-green-700 hover:bg-green-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-sm text-gray-500 hidden md:block">
            {filteredSermons.length} Sermons
          </div>
        </div>
      </section>

      {/* SERMON GRID */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            {filteredSermons.map((s) => (
              <motion.article
                key={s.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden "
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-56">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-800/30 to-transparent"></div>

                  <button
                    onClick={() => openSermon(s)}
                    aria-label={`Play ${s.title}`}
                    className="absolute left-4 bottom-4 inline-flex items-center gap-2 bg-white/90 text-green-700 px-3 py-2 rounded-full shadow-md hover:scale-105 transition cursor-pointer"
                  >
                    <PlayCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Watch</span>
                  </button>

                  <div className="absolute right-3 top-3 bg-white/90 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {s.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    {s.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div>{s.preacher}</div>
                    <div>{s.date}</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* No results */}
          {filteredSermons.length === 0 && (
            <div className="text-center text-gray-500 mt-12">
              No sermons found in this category.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-green-50">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-3">
            Join us this Sunday
          </h3>
          <p className="text-gray-700 mb-6">
            Come experience worship, community, and life-changing teaching in
            person.
          </p>
          <Link
            to="/visit"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-green-700 transition"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>

      {/* SERMON MODAL */}
      <AnimatePresence>
        {isOpen && active && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              onClick={close}
              className="absolute inset-0 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 max-w-4xl w-full bg-transparent rounded-xl overflow-hidden"
            >
              <div className="bg-white rounded-t-xl overflow-hidden">
                <div className="flex items-center justify-between p-3 border-b">
                  <div className="text-sm font-semibold text-gray-800">
                    {active.title} —{" "}
                    <span className="text-gray-500">{active.preacher}</span>
                  </div>
                  <button
                    onClick={close}
                    aria-label="Close"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 transition"
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                <div className="aspect-video bg-black">
                  <iframe
                    title={active.title}
                    src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1&rel=0`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-600">
                    {active.date} · {active.category}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
