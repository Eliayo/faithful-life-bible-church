import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12 font-pop">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Church Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">
            Faithful Life Bible Church
          </h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            A place where lives are transformed by the power of God’s Word and
            the love of His people.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <Link to="/" className="hover:text-green-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-300 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/ministries"
                className="hover:text-green-300 transition"
              >
                Ministries
              </Link>
            </li>
            <li>
              <Link to="/sermons" className="hover:text-green-300 transition">
                Sermons
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-green-300 transition">
                Events
              </Link>
            </li>
            <li>
              <Link to="/visit" className="hover:text-green-300 transition">
                Visit
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Contact</h3>
          <ul className="space-y-3 text-gray-200 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-7 h-7 md:h-9 md:w-9 mt-1 text-green-400" />
              1, Anifowose Street, Off Ejio Road, Arigbajo B/Stop, Ifo, Ewekoro
              LGA, Ogun State, Nigeria
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-5 h-5 md:w-6 md:h-6 mt-1 text-green-400" />
              +234 803 390 7258, +234 705 502 8378, +234 812 767 5640
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-1 text-green-400" />
              faithfullifebiblechurch@gmail.com
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-300 transition">
              <Facebook />
            </a>
            <a href="#" className="hover:text-green-300 transition">
              <Instagram />
            </a>
            <a href="#" className="hover:text-green-300 transition">
              <Youtube />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-green-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Faithful Life Bible Church. All rights
        reserved.
      </div>
    </footer>
  );
}
