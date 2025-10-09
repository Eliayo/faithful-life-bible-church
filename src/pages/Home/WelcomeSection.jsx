import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import churchImg from "../../assets/church-worship.jpg";

export default function WelcomeSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={churchImg}
              alt="Faithful Life Church"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-green-600/10 rounded-2xl"></div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            About <span className="text-green-600">Us</span>
          </h2>
          <p className="text-green-700 leading-relaxed mb-6">
            Faithful Life Bible Church is a family of believers dedicated to
            spreading the love and truth of Jesus Christ. Our heart is to see
            lives transformed through the Word of God and the power of the Holy
            Spirit.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-2">
                Our Mission
              </h3>
              <p className="text-green-600 leading-relaxed">
                To preach the Gospel to all nations, nurture disciples, and
                empower believers to live victoriously through faith in Christ.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-2">
                Our Vision
              </h3>
              <p className="text-green-600 leading-relaxed">
                To build a community where the love of Christ transforms lives,
                families, and generations through worship, service, and
                outreach.
              </p>
            </div>
          </div>

          <Link
            to="/about"
            className="inline-block mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all shadow-md"
          >
            Learn More About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
