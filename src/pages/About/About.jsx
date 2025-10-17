import { motion } from "framer-motion";
import churchImage from "../../assets/church-building.jpg";
import bgImage from "../../assets/church-community-bg2.jpg";
import pastorImage from "../../assets/pastor.jpg";
import { Link } from "react-router-dom";
import {
  Heart,
  Globe2,
  Cross,
  HeartHandshake,
  Star,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <HeartHandshake className="w-10 h-10 text-green-700 mb-4" />,
      title: "Love",
      text: "We serve others with compassion, humility, and the heart of Christ in all we do.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-green-700 mb-4" />,
      title: "Integrity",
      text: "We walk in honesty and purity, standing firm on God’s Word as our foundation.",
    },
    {
      icon: <Users className="w-10 h-10 text-green-700 mb-4" />,
      title: "Faithfulness",
      text: "We remain steadfast in our devotion to God, our calling, and one another.",
    },
    {
      icon: <Star className="w-10 h-10 text-green-700 mb-4" />,
      title: "Excellence",
      text: "We give our very best in everything we do, honoring God through quality and diligence.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* HERO */}
      <section className="bg-gradient-to-b from-green-50 to-white text-center py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
            About Faithful Life Bible Church
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are a Christ-centered family devoted to transforming lives
            through the power of God’s Word, passionate worship, and genuine
            love. At Faithful Life Bible Church, everyone is welcome to
            experience the presence of God and grow in faith.
          </p>
        </motion.div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 px-6 bg-green-50/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={churchImage}
              alt="Church building"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Our Story
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Faithful Life Bible Church began with a simple mission — to help
              people discover their purpose and live victoriously through faith
              in Jesus Christ. From humble beginnings, God has grown our church
              into a vibrant community of believers impacting lives across
              generations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe in building strong families, raising godly leaders, and
              spreading the Gospel to every corner of the world. Through
              worship, teaching, and outreach, we’re fulfilling the Great
              Commission one life at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-green-700 mb-4"
          >
            Our Mission & Vision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Everything we do is rooted in our calling to love God, love people,
            and make disciples. Our mission defines our purpose today, while our
            vision shapes the church we’re becoming tomorrow.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-green-50 rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <Heart className="mx-auto text-green-700 w-12 h-12 mb-4" />
              <h3 className="text-2xl font-semibold text-green-800 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To transform lives through the Word of God, nurture spiritual
                growth, and raise a generation of believers who walk in faith,
                love, and excellence.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-green-50 rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <Globe2 className="mx-auto text-green-700 w-12 h-12 mb-4" />
              <h3 className="text-2xl font-semibold text-green-800 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be a light to the nations, building a global community of
                believers committed to spreading the Gospel and living the
                abundant life in Christ.
              </p>
            </motion.div>

            {/* Core Beliefs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-8 bg-green-50 rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <Cross className="mx-auto text-green-700 w-12 h-12 mb-4" />
              <h3 className="text-2xl font-semibold text-green-800 mb-3">
                Our Belief
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We believe in the power of the cross, the authority of the Word,
                and the presence of the Holy Spirit guiding every step of our
                journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* MEET OUR PASTOR */}
      <section className="py-24 bg-green-50/60">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          {/* Pastor Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-green-100">
              <img
                src={pastorImage}
                alt="Lead Pastor"
                className="w-96 h-full object-contain object-center transform scale-150"
              />
            </div>
          </motion.div>

          {/* Pastor Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
              Meet Our Pastor
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              <span className="font-semibold text-green-800">
                Pastor Enoch Oluwatosin
              </span>{" "}
              is the founding pastor of Faithful Life Bible Church. With a deep
              passion for God’s Word and a heart for people, he has dedicated
              his life to teaching biblical truth, strengthening families, and
              raising believers who impact their communities with love and
              faith.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Through his Spirit-led ministry, Pastor Enoch continues to inspire
              hope, encourage growth, and remind every member of God’s purpose
              for their lives. His message is simple —{" "}
              <span className="italic text-green-800">
                to live faithfully and walk boldly in Christ every day.
              </span>
            </p>
            <div className="mt-8">
              <span className="block font-semibold text-green-800 text-lg">
                — Pastor Enoch Oluwatosin
              </span>
              <span className="text-gray-500">
                Setman, Faithful Life Bible Church
              </span>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-white to-green-50/40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            These values define who we are and guide how we serve God, one
            another, and our community every day.
          </p>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white shadow-sm hover:shadow-md rounded-2xl p-8 transition-all border border-green-100"
              >
                <div className="flex flex-col items-center">
                  {value.icon}
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <section
        className="relative py-20 text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Overlay for subtle green tint */}
        <div className="absolute inset-0 bg-green-900/60"></div>

        <div className="relative max-w-3xl mx-auto px-6 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us on This Journey of Faith
          </h2>
          <p className="text-lg mb-8 leading-relaxed text-green-100">
            At{" "}
            <span className="font-semibold text-white">
              Faithful Life Bible Church
            </span>
            , we’re more than a congregation — we’re a family. Together, we grow
            in faith, share love, and bring hope to our community. Whether
            you’re taking your first steps with God or deepening your walk,
            there’s a place for you here.
          </p>
          <Link
            to="/visit"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
