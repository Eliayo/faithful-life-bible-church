import React from "react";
import { motion } from "framer-motion";
import { Users, Heart, Sparkles, Baby } from "lucide-react";

const ministries = [
  {
    name: "Men’s Fellowship",
    description:
      "Empowering men to lead their families and communities in faith, love, and purpose.",
    icon: Users,
    color: "from-green-600 to-green-800",
  },
  {
    name: "Women’s Fellowship",
    description:
      "Raising godly women of strength and virtue through prayer, service, and sisterhood.",
    icon: Heart,
    color: "from-green-500 to-green-700",
  },
  {
    name: "Youth Ministry",
    description:
      "Building a generation of passionate young believers on fire for Jesus Christ.",
    icon: Sparkles,
    color: "from-green-400 to-green-600",
  },
  {
    name: "Children’s Church",
    description:
      "Nurturing young hearts with the love of Christ and the joy of God’s Word.",
    icon: Baby,
    color: "from-green-300 to-green-500",
  },
];

export default function MinistriesPreview() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-800 mb-4"
        >
          Our Ministries
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-green-700 max-w-2xl mx-auto mb-12"
        >
          We are one body in Christ, serving different roles but united in love
          and purpose. Explore the ministries that help shape lives and
          strengthen our church family.
        </motion.p>

        {/* Ministries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-green-100"
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${ministry.color} flex items-center justify-center text-white shadow-lg`}
                >
                  <Icon size={30} />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mt-6 mb-2">
                  {ministry.name}
                </h3>
                <p className="text-green-700 text-sm leading-relaxed">
                  {ministry.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
