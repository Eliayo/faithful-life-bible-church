import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import contactBg from "../../assets/contact-bg.jpg";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    prayerRequest: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
      prayerRequest: false,
    });
  };

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-center bg-cover py-24 text-white"
        style={{
          backgroundImage: `url(${contactBg})`,
        }}
      >
        <div className="absolute inset-0 bg-green-900/70" />
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-lg text-gray-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We’d love to hear from you. Whether you have questions, prayer
            requests, or need someone to talk to, we’re here to connect and
            support you.
          </motion.p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 py-20 px-6">
        {/* Form */}
        <div>
          <h2 className="text-3xl font-semibold text-green-900 mb-6">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-700 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-700 outline-none"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-700 outline-none"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message..."
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-700 outline-none"
              required
            />

            {/* Prayer Request Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="prayerRequest"
                name="prayerRequest"
                checked={form.prayerRequest}
                onChange={handleChange}
                className="mt-1 w-5 h-5 text-green-700 border-gray-300 rounded focus:ring-green-700"
              />
              <label
                htmlFor="prayerRequest"
                className="text-gray-700 leading-snug"
              >
                This message is a{" "}
                <span className="font-semibold">prayer request</span>. Our
                prayer team will lift your concern before God in prayer.
              </label>
            </div>

            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Send Message
            </button>
          </form>

          {submitted && (
            <motion.p
              className="mt-4 text-green-700 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✅ Thank you! Your message has been sent successfully.
            </motion.p>
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-green-900 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-700 mb-4">
            You can reach us directly through any of the channels below or visit
            our church in person — we’re always happy to welcome you.
          </p>

          <div className="flex items-center space-x-3">
            <Phone className="text-green-700" />
            <span>+234 803 390 7258, +234 705 502 8378, +234 812 767 5640</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="text-green-700" />
            <span>faithfullifebiblechurch@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="text-green-700 h-12 w-12 md:h-10 md:w-10" />
            <span>
              1, Anifowose Street, Off Ejio Road, Arigbajo B/Stop, Ifo, Ewekoro
              LGA, Ogun State, Nigeria
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="text-green-700" />
            <span>Sunday Service: 8:00 AM – 10:00 AM</span>
          </div>

          {/* Social Media */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-green-900 mb-4">
              Connect With Us
            </h3>
            <p className="text-gray-700 mb-4">
              Stay inspired and updated by following our ministry online.
            </p>
            <div className="flex space-x-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-100 rounded-full text-green-700 hover:bg-green-700 hover:text-white transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-100 rounded-full text-green-700 hover:bg-green-700 hover:text-white transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-100 rounded-full text-green-700 hover:bg-green-700 hover:text-white transition"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
