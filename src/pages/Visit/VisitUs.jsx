import { motion } from "framer-motion";
import { MapPin, Clock, Users, Coffee } from "lucide-react";
import churchBg from "../../assets/church-bg.jpg";
import { Link } from "react-router-dom";

export default function VisitUs() {
  return (
    <section
      className="relative bg-green-50/80 text-gray-800 overflow-hidden"
      style={{
        backgroundImage: `url(${churchBg})`,
        backgroundSize: "contain",
        backgroundPosition: "top",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900/40" />

      <div className="relative z-10 max-w-6xl mx-auto py-24 px-6 text-center text-white">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold mb-4 text-white"
        >
          Plan Your Visit
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg text-green-100 leading-relaxed mb-10">
          We’d love to meet you! Whether you’re new to church or looking for a
          place to call home, we’re excited to welcome you to Faithful Life
          Bible Church.
        </p>

        {/* Visit Info Grid */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {/* Service Times */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/90 text-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            <Clock className="mx-auto text-green-700 w-10 h-10 mb-3" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Service Times
            </h3>
            <p>Sunday Worship – 8:00 AM</p>
            <p>Midweek Service – Thursday 5:00 PM</p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/90 text-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            <MapPin className="mx-auto text-green-700 w-10 h-10 mb-3" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Our Location
            </h3>
            <p>Faithful Life Bible Church</p>
            <p>
              1, Anifowose Street, Off Ejio Road, Arigbajo B/Stop, Ifo, Ewekoro
              LGA, Ogun State, Nigeria
            </p>
          </motion.div>

          {/* What to Expect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/90 text-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            <Users className="mx-auto text-green-700 w-10 h-10 mb-3" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              What to Expect
            </h3>
            <p>
              A friendly environment, uplifting worship, and a message of hope
              that speaks to your heart.
            </p>
          </motion.div>

          {/* Refreshments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/90 text-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            <Coffee className="mx-auto text-green-700 w-10 h-10 mb-3" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              After Service
            </h3>
            <p>
              Join us for light refreshments and fellowship with our church
              family.
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Link
            to="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg transition-all"
          >
            Let Us Know You’re Coming
          </Link>
        </motion.div>
      </div>
      {/* Google Map */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <iframe
          title="Faithful Life Bible Church Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d304.64033508300196!2d3.208091076702295!3d6.855625715264444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sng!4v1760368283759!5m2!1sen!2sng"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="border-0 w-full"
        ></iframe>
      </motion.div>
    </section>
  );
}
