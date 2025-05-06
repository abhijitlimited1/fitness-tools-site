import { Link } from "react-router-dom";

export default function Footer() {
  const popularTools = [
    { name: "BMI Calculator", path: "/tools/bmi" },
    { name: "TDEE Calculator", path: "/tools/tdee" },
    { name: "Body Fat Calculator", path: "/tools/body-fat" },
    { name: "Calorie Calculator", path: "/tools/calorie" },
    { name: "Macro Calculator", path: "/tools/macros" },
  ];

  const bodyCompositionTools = [
    { name: "Body Fat Calculator", path: "/tools/body-fat" },
    { name: "Body Type Calculator", path: "/tools/body-type" },
    { name: "Body Shape Calculator", path: "/tools/body-shape" },
    { name: "Waist-Hip Ratio", path: "/tools/whr" },
    { name: "Body Frame Calculator", path: "/tools/body-frame" },
  ];

  const nutritionTools = [
    { name: "Calorie Calculator", path: "/tools/calorie" },
    { name: "Macro Calculator", path: "/tools/macros" },
    { name: "Protein Calculator", path: "/tools/protein" },
    { name: "Water Intake Calculator", path: "/tools/water" },
    { name: "Pregnancy Calories", path: "/tools/pregnancy-calories" },
  ];

  const fitnessTools = [
    { name: "BMR Calculator", path: "/tools/bmr" },
    { name: "TDEE Calculator", path: "/tools/tdee" },
    { name: "One-Rep Max Calculator", path: "/tools/one-rep-max" },
    { name: "Heart Rate Zones", path: "/tools/heart-rate" },
    { name: "Fitness Age Calculator", path: "/tools/fitness-age" },
  ];

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-xl font-bold text-blue-600">FitnessTools</h3>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed max-w-md">
              Your complete fitness solution. Empowering your health journey
              with accurate calculations and personalized insights based on
              scientific research.
            </p>
            <div className="pt-4">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} FitnessTools. All rights reserved.
              </p>
            </div>
          </div>

          {/* Popular Tools Section */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">
              Popular Tools
            </h4>
            <ul className="space-y-2">
              {popularTools.map((tool, index) => (
                <li key={index}>
                  <Link
                    to={tool.path}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/tools"
                  className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View All Tools →
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">
              Tool Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    document
                      .getElementById("body-composition")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Body Composition
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document
                      .getElementById("nutrition")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Nutrition
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document
                      .getElementById("fitness")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Fitness & Performance
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Legal Section */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li className="pt-4">
                <Link
                  to="/privacy-policy"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tool Categories for SEO */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div id="body-composition" className="mb-8">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">
              Body Composition Tools
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {bodyCompositionTools.map((tool, index) => (
                <Link
                  key={index}
                  to={tool.path}
                  className="text-xs text-gray-500 hover:text-blue-600 transition-colors"
                >
                  {tool.name}
                </Link>
              ))}
            </div>
          </div>

          <div id="nutrition" className="mb-8">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">
              Nutrition Tools
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {nutritionTools.map((tool, index) => (
                <Link
                  key={index}
                  to={tool.path}
                  className="text-xs text-gray-500 hover:text-blue-600 transition-colors"
                >
                  {tool.name}
                </Link>
              ))}
            </div>
          </div>

          <div id="fitness" className="mb-8">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">
              Fitness & Performance Tools
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {fitnessTools.map((tool, index) => (
                <Link
                  key={index}
                  to={tool.path}
                  className="text-xs text-gray-500 hover:text-blue-600 transition-colors"
                >
                  {tool.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
