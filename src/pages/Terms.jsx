import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Terms() {
  const [activeTab, setActiveTab] = useState("acceptance");

  const tabs = [
    { id: "acceptance", label: "Acceptance" },
    { id: "medical", label: "Medical Disclaimer" },
    { id: "accuracy", label: "Calculator Accuracy" },
    { id: "permitted", label: "Permitted Use" },
    { id: "prohibited", label: "Prohibited Use" },
    { id: "changes", label: "Changes" },
  ];

  const tabContent = {
    acceptance: {
      title: "Acceptance of Terms",
      content: "By using this website, you agree to these terms.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    medical: {
      title: "Medical Disclaimer",
      content:
        "Our calculators provide general fitness information, not medical advice. Consult healthcare professionals before making health decisions.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    accuracy: {
      title: "Calculator Accuracy",
      content:
        "Results are estimates only. We make no guarantees about accuracy or suitability for your needs.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-yellow-600"
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
    permitted: {
      title: "Permitted Use",
      content: (
        <div>
          <p className="mb-4">You may:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Use calculators for personal purposes</li>
            <li>Reference results with proper attribution</li>
          </ul>
        </div>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    },
    prohibited: {
      title: "Prohibited Use",
      content: (
        <div>
          <p className="mb-4">You may not:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Reverse engineer our tools</li>
            <li>Use calculators for commercial purposes without permission</li>
          </ul>
        </div>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ),
    },
    changes: {
      title: "Changes to Terms",
      content:
        "We may update these terms at any time. Continued use constitutes acceptance.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Helmet>
        <title>Terms of Service - FitnessTools</title>
        <meta
          name="description"
          content="Rules and guidelines for using our fitness calculators and tools"
        />
      </Helmet>

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-600 text-lg">
          Please read these terms carefully before using our fitness tools.
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

      {/* Important Notice */}
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-yellow-600"
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
          Important Notice
        </h2>
        <p className="text-gray-700">
          Our fitness calculators provide estimates based on general formulas.
          They are not a substitute for professional medical advice. Always
          consult with healthcare professionals before making significant
          changes to your fitness or nutrition regimen.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6 overflow-x-auto">
        <div className="flex space-x-1 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
                activeTab === tab.id
                  ? "bg-white text-blue-600 border-t border-l border-r border-gray-200"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-10 border border-gray-200">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex-shrink-0">{tabContent[activeTab].icon}</div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {tabContent[activeTab].title}
            </h2>
            <div className="text-gray-700">{tabContent[activeTab].content}</div>
          </div>
        </div>
      </div>

      {/* Full Terms Section */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Complete Terms of Service
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              1. Acceptance
            </h3>
            <p className="text-gray-700">
              By accessing or using FitnessTools, you agree to be bound by these
              Terms of Service. If you do not agree to all the terms and
              conditions, you should not use our website.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2. Medical Disclaimer
            </h3>
            <p className="text-gray-700">
              The information provided by our calculators is for general
              informational and educational purposes only. It is not intended to
              be a substitute for professional medical advice, diagnosis, or
              treatment. Always seek the advice of your physician or other
              qualified health provider with any questions you may have
              regarding a medical condition or before beginning any fitness or
              nutrition program.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3. Calculator Accuracy
            </h3>
            <p className="text-gray-700">
              While we strive to provide accurate calculations based on
              established formulas, all results are estimates. Individual
              factors may affect actual outcomes. We make no guarantees about
              the accuracy, completeness, or reliability of our calculators, or
              their suitability for your specific needs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              4. Permitted Use
            </h3>
            <p className="text-gray-700 mb-3">You may:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Use our calculators for personal, non-commercial purposes</li>
              <li>
                Reference results from our calculators with proper attribution
                to FitnessTools
              </li>
              <li>Share links to our tools with others</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              5. Prohibited Use
            </h3>
            <p className="text-gray-700 mb-3">You may not:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>
                Reverse engineer, decompile, or attempt to extract the source
                code of our calculators
              </li>
              <li>
                Use our calculators for commercial purposes without explicit
                written permission
              </li>
              <li>Modify, adapt, or hack our website or its content</li>
              <li>
                Use our calculators in any way that could damage, disable, or
                impair the website
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              6. Changes to Terms
            </h3>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. We will
              provide notice of significant changes by updating the date at the
              top of this page. Your continued use of FitnessTools after such
              changes constitutes your acceptance of the new terms.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-gray-600 mb-4">Have questions about our terms?</p>
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
