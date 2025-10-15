import { X, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PaystackModal({ onClose }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate Paystack API loading (for demo)
    setTimeout(() => {
      setLoading(false);
      alert("Payment initialized (Paystack integration goes here).");
      onClose();
    }, 2000);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center">
          Give Online via Paystack
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Use the secure Paystack payment gateway to give your offering, tithe,
          or donation.
        </p>

        {/* Payment Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount (₦)
            </label>
            <input
              type="number"
              required
              placeholder="Enter amount"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Processing...
              </>
            ) : (
              "Give Now"
            )}
          </button>
        </form>

        {/* Note */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          All transactions are encrypted and secured via{" "}
          <span className="font-medium text-green-700">Paystack</span>.
        </p>
      </motion.div>
    </motion.div>
  );
}
