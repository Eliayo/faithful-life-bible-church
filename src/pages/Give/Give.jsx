import { motion } from "framer-motion";
import { Heart, CreditCard, Banknote, HandCoins } from "lucide-react";
import giveBg from "../../assets/give-bg.jpg";
import { Link } from "react-router-dom";
import GiveModal from "../../components/Give/GiveModal";
import PaystackModal from "../../components/Give/PaystackModal";
import { useState } from "react";

export default function Give() {
  const [showModal, setShowModal] = useState(false);
  const [showPaystackModal, setShowPaystackModal] = useState(false);

  return (
    <div className="bg-white text-gray-800">
      {/* HERO */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-center py-32 px-6"
        style={{
          backgroundImage: `url(${giveBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Giving Makes a Difference
          </h1>
          <p className="text-lg text-gray-100 leading-relaxed">
            Every gift helps us share God’s love, support our community, and
            reach the world with the message of faith and hope.
          </p>
        </motion.div>
      </section>

      {/* WHY WE GIVE */}
      <section className="py-20 px-6 text-center bg-green-50/50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-green-700 mb-6"
        >
          Why We Give
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-700 max-w-2xl mx-auto mb-6"
        >
          Giving is an act of worship and gratitude — a way to honor God for His
          blessings and help others experience His love. Together, we’re
          building His kingdom on earth.
        </motion.p>
        <p className="text-green-800 italic font-medium">
          “Each one must give as he has decided in his heart, not reluctantly or
          under compulsion, for God loves a cheerful giver.” – 2 Corinthians 9:7
        </p>
      </section>

      {/* WAYS TO GIVE */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-green-700 mb-12"
          >
            Ways to Give
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Online Giving */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-green-100 bg-green-50"
            >
              <CreditCard className="mx-auto text-green-700 w-12 h-12 mb-4" />
              <h3 className="text-2xl font-semibold text-green-800 mb-3">
                Online Giving
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Give securely online from anywhere, anytime. Your generosity
                fuels our mission to impact lives for Christ.
              </p>
              <motion.button
                onClick={() => setShowPaystackModal(true)}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all cursor-pointer"
              >
                Give Now (Paystack)
              </motion.button>
            </motion.div>

            {/* Bank Transfer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-green-100 bg-green-50"
            >
              <Banknote className="mx-auto text-green-700 w-12 h-12 mb-4" />
              <h3 className="text-2xl font-semibold text-green-800 mb-3">
                Bank Transfer
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can give directly via bank transfer. Please contact the
                church office for account details and instructions.
              </p>
              <motion.button
                onClick={() => setShowModal(true)}
                className="inline-block mt-3 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Details
              </motion.button>
            </motion.div>

            {/* In-Person Giving */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-green-100 bg-green-50"
            >
              <HandCoins className="mx-auto text-green-700 w-12 h-12 mb-4" />
              <h3 className="text-2xl font-semibold text-green-800 mb-3">
                In-Person Giving
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Prefer giving during service? You can use offering envelopes
                during any of our worship gatherings.
              </p>
              <Link
                to="/visit"
                className="inline-block mt-3 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-all"
              >
                Plan a Visit
              </Link>
            </motion.div>
          </div>
        </div>
        {showModal && <GiveModal onClose={() => setShowModal(false)} />}
        {showPaystackModal && (
          <PaystackModal onClose={() => setShowPaystackModal(false)} />
        )}
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-24 bg-green-700 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 bg-cover bg-center"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <Heart className="w-12 h-12 mx-auto mb-4 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Thank You for Partnering with Us
          </h2>
          <p className="text-gray-100 leading-relaxed mb-6">
            Every seed you sow helps advance God’s kingdom through this
            ministry. Together, we’re making an eternal impact.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-green-50 transition-all"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
