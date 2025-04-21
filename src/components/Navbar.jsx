import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            FitnessTools
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/tools" className="text-gray-600 hover:text-gray-900">
              Tools
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/tools"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              Tools
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
