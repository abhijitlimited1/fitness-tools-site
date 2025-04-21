import { Link } from "react-router-dom";

export default function Footer() {
  const tools = [
    { name: "BMI Calculator", path: "/tools/bmi" },
    { name: "Calorie Calculator", path: "/tools/calorie" },
    { name: "Body Fat Calculator", path: "/tools/body-fat" },
  ];

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">FitnessTools</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Your complete fitness solution. Empowering your health journey
              with accurate calculations and personalized insights.
            </p>
          </div>

          {/* Tools Section */}
          <div className="md:justify-self-center">
            <h4 className="text-base font-semibold text-gray-900 mb-4">
              Tools
            </h4>
            <ul className="space-y-3">
              {tools.map((tool, index) => (
                <li key={index}>
                  <Link
                    to={tool.path}
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div className="md:justify-self-end">
            <h4 className="text-base font-semibold text-gray-900 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} FitnessTools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
