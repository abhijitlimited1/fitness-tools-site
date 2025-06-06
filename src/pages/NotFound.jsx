import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <Helmet>
        <title>Page Not Found - FitnessTools</title>
        <meta
          name="description"
          content="The page you are looking for could not be found. Please navigate to our homepage to find the content you need."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Return to Homepage
          </Link>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Popular Calculators</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/tools/bmi"
                className="bg-gray-100 hover:bg-gray-200 text-blue-600 px-4 py-2 rounded-lg transition-colors"
              >
                BMI Calculator
              </Link>
              <Link
                to="/tools/calorie"
                className="bg-gray-100 hover:bg-gray-200 text-blue-600 px-4 py-2 rounded-lg transition-colors"
              >
                Calorie Calculator
              </Link>
              <Link
                to="/tools/body-fat"
                className="bg-gray-100 hover:bg-gray-200 text-blue-600 px-4 py-2 rounded-lg transition-colors"
              >
                Body Fat Calculator
              </Link>
              <Link
                to="/tools/tdee"
                className="bg-gray-100 hover:bg-gray-200 text-blue-600 px-4 py-2 rounded-lg transition-colors"
              >
                TDEE Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
