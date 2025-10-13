import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/ministries", label: "Ministries" },
    { to: "/sermons", label: "Sermons" },
    { to: "/events", label: "Events" },
    { to: "/give", label: "Give" },
    { to: "/visit", label: "Visit Us" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 border-b border-green-100 font-pop">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-800">
          Faithful<span className="text-green-600">Life</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-green-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-700 font-semibold border-b-2 border-green-700 pb-1"
                    : "hover:text-green-700 transition"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white border-t text-left ps-4 py-4 space-y-4 shadow-lg">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className="block text-gray-700 hover:text-green-700 transition"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
