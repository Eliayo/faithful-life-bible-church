import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import event1 from "../../assets/event1.jpg";
import event2 from "../../assets/event2.jpg";
import event3 from "../../assets/event3.jpg";

const events = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "October 13, 2025",
    time: "9:00 AM",
    location: "Faithful Life Auditorium",
    image: event1,
    description:
      "Join us for a spirit-filled time of worship, word, and fellowship.",
  },
  {
    id: 2,
    title: "Midweek Prayer Night",
    date: "October 16, 2025",
    time: "6:00 PM",
    location: "Faithful Life Auditorium",
    image: event2,
    description:
      "Experience breakthrough as we come together to pray and intercede.",
  },
  {
    id: 3,
    title: "Youth Empowerment Conference",
    date: "October 20, 2025",
    time: "9:00 AM",
    location: "Faithful Life Auditorium",
    image: event3,
    description:
      "Empowering the next generation through faith, purpose, and leadership.",
  },
];

export default function EventsPreview() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-800 mb-4"
        >
          Upcoming <span className="text-green-600">Events</span>
        </motion.h2>
        <p className="text-green-700 max-w-2xl mx-auto mb-12">
          Stay connected and grow with us. Join any of our upcoming events and
          be part of what God is doing in our midst.
        </p>

        {/* Event Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 "></div>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-green-700 text-sm mb-4">
                  {event.description}
                </p>

                <div className="flex items-center text-green-600 text-sm mb-1">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  <span>
                    {event.date} • {event.time}
                  </span>
                </div>
                <div className="flex items-center text-green-600 text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.location}</span>
                </div>

                <button className="mt-5 px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-all cursor-pointer">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
