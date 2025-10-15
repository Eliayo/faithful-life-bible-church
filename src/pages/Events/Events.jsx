import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import eventsBg from "../../assets/events-bg.jpg";
import event5 from "../../assets/event5.jpg";
import event2 from "../../assets/event2.jpg";
import event4 from "../../assets/event4.jpg";
import event6 from "../../assets/event6.jpg";

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Faith and Family Conference",
      date: "November 25, 2025",
      time: "10:00 AM",
      location: "Church Auditorium",
      image: event5,
    },
    {
      id: 2,
      title: "Youth Empowerment Summit",
      date: "December 8, 2025",
      time: "9:00 AM",
      location: "Youth Hall",
      image: event4,
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Women's Prayer Retreat",
      date: "August 2025",
      image: event2,
    },
    {
      id: 2,
      title: "Men’s Conference 2025",
      date: "July 2025",
      image: event6,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Banner */}
      <section
        className="relative h-[40vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${eventsBg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-5xl font-bold mb-2">Upcoming Events</h1>
          <p className="text-lg opacity-90">
            Stay connected and be part of what God is doing at Faithful Life.
          </p>
        </motion.div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
          Upcoming Events
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {upcomingEvents.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                <div className="flex items-center gap-3 text-gray-600 mb-2">
                  <Calendar size={18} /> <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 mb-4">
                  <MapPin size={18} /> <span>{event.location}</span>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Join us for a powerful time of fellowship and renewal.
                </p>
                <Link
                  to="/visit"
                  className="inline-block bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Plan to Attend
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
            Past Events
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-44 w-full object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 bg-green-700 text-white text-center">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">
            Join Us for Our Next Event
          </h2>
          <p className="mb-8 opacity-90">
            There’s always something happening at Faithful Life Bible Church.
            We’d love to see you there.
          </p>
          <Link
            to="/visit"
            className="inline-block bg-white text-green-700 px-6 py-3 font-medium rounded-lg hover:bg-gray-100 transition"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
