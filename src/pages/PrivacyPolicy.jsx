import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: "data-collection",
      title: "Data Collection",
      content:
        "We do not collect, store, or process any personal data from users.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      id: "calculator-usage",
      title: "Calculator Usage",
      content:
        "All calculations are performed locally in your browser. No input data leaves your device.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "cookies",
      title: "Cookies",
      content: "We do not use any tracking cookies or persistent identifiers.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: "server-logs",
      title: "Server Logs",
      content:
        "Our hosting provider may collect standard server logs (IP address, timestamps) for security purposes. These are automatically deleted after 30 days.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      content: (
        <span>
          For privacy questions:{" "}
          <Link
            to="/contact"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Contact Us
          </Link>
        </span>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const toggleSection = (id) => {
    if (activeSection === id) {
      setActiveSection(null);
    } else {
      setActiveSection(id);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Helmet>
        <title>Privacy Policy - FitnessTools</title>
        <meta
          name="description"
          content="Our data handling practices and commitment to your privacy"
        />
      </Helmet>

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-lg">
          Your privacy matters to us. Learn how we handle your data.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Last Updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>

      {/* Summary Card */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Summary
        </h2>
        <p className="text-gray-700">
          We prioritize your privacy. Our fitness calculators run entirely in
          your browser, and we don't collect personal data. There are no
          tracking cookies, and your inputs never leave your device.
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-10">
        <div className="divide-y divide-gray-200">
          {sections.map((section, index) => (
            <div key={section.id} className="cursor-pointer">
              <div
                className={`px-6 py-4 flex justify-between items-center hover:bg-gray-50 ${
                  activeSection === section.id ? "bg-gray-50" : ""
                }`}
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center">
                  <div className={`mr-4 text-blue-600`}>{section.icon}</div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {index + 1}. {section.title}
                  </h3>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                    activeSection === section.id ? "transform rotate-180" : ""
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
              </div>
              {activeSection === section.id && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <p className="text-gray-700">{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Why Privacy Matters to Us
        </h2>
        <p className="text-gray-700 mb-4">
          At FitnessTools, we believe your health and fitness data should remain
          private. Our calculators are designed to provide valuable insights
          without compromising your privacy.
        </p>
        <p className="text-gray-700">
          We've built our platform with a "privacy-first" approach, ensuring
          that your personal information and fitness data stay on your device
          and are never transmitted to our servers.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-gray-600 mb-4">
          Have questions about our privacy practices?
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Our Team
        </Link>
      </div>
    </div>
  );
}
