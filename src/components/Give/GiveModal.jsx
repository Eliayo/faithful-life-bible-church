import { X, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function GiveModal({ onClose }) {
  const [copied, setCopied] = useState(false);

  const accountDetails = `
Faithful Life Bible Church
Account Number: 0123456789
Bank: Guaranty Trust Bank
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(accountDetails);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Church Account Details
        </h2>
        <p className="text-gray-700 mb-6">
          Thank you for your willingness to give. Kindly use the account details
          below for your offering, tithe, or donation.
        </p>

        {/* Account Details */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200 text-left relative">
          <p className="font-medium text-gray-900">Account Name:</p>
          <p className="text-gray-700">Faithful Life Bible Church</p>

          <p className="font-medium text-gray-900 mt-3">Account Number:</p>
          <p className="text-gray-700">0123456789</p>

          <p className="font-medium text-gray-900 mt-3">Bank Name:</p>
          <p className="text-gray-700">Guaranty Trust Bank</p>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 flex items-center gap-1 text-sm text-green-600 hover:text-green-700 transition"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" /> Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" /> Copy
              </>
            )}
          </button>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500">
          For inquiries, please contact our finance department via{" "}
          <a
            href="mailto:faithfullifebiblechurch@gmail.com"
            className="text-green-600 hover:underline"
          >
            faithfullifebiblechurch@gmail.com
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
}
