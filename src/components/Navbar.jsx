import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Popular tools for dropdown
  const popularTools = [
    { name: "BMI Calculator", path: "/tools/bmi" },
    { name: "TDEE Calculator", path: "/tools/tdee" },
    { name: "Body Fat Calculator", path: "/tools/body-fat" },
    { name: "Calorie Calculator", path: "/tools/calorie" },
    { name: "Macro Calculator", path: "/tools/macros" },
    { name: "Protein Calculator", path: "/tools/protein" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsToolsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsToolsDropdownOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">
              FitnessTools
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Tools
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transition-transform ${
                    isToolsDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Tools Dropdown */}
              {isToolsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Popular Tools
                    </div>
                    {popularTools.map((tool, index) => (
                      <Link
                        key={index}
                        to={tool.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {tool.name}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 my-1"></div>
                    <Link
                      to="/tools"
                      className="block px-4 py-2 text-sm font-medium text-blue-600 hover:bg-gray-100"
                    >
                      View All Tools
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className={`text-gray-700 hover:text-blue-600 font-medium transition-colors ${
                location.pathname === "/blog" ? "text-blue-600" : ""
              }`}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={`text-gray-700 hover:text-blue-600 font-medium transition-colors ${
                location.pathname === "/contact" ? "text-blue-600" : ""
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div>
              <button
                onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                <span>Tools</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform ${
                    isToolsDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isToolsDropdownOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  {popularTools.map((tool, index) => (
                    <Link
                      key={index}
                      to={tool.path}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                    >
                      {tool.name}
                    </Link>
                  ))}
                  <Link
                    to="/tools"
                    className="block px-3 py-2 text-sm font-medium text-blue-600 hover:bg-gray-50 rounded-md"
                  >
                    View All Tools
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
