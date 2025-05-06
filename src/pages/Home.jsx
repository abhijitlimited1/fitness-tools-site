import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ToolCard from "../components/ToolCard";

export default function Home() {
  const popularTools = [
    {
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index to assess weight status",
      link: "/tools/bmi",
    },
    {
      title: "Calorie Calculator",
      description: "Determine your daily calorie needs for weight management",
      link: "/tools/calorie",
    },
    {
      title: "Body Fat Calculator",
      description: "Estimate your body fat percentage with scientific accuracy",
      link: "/tools/body-fat",
    },
    {
      title: "TDEE Calculator",
      description: "Calculate your Total Daily Energy Expenditure",
      link: "/tools/tdee",
    },
    {
      title: "Macro Calculator",
      description: "Get personalized macronutrient recommendations",
      link: "/tools/macros",
    },
    {
      title: "Protein Calculator",
      description: "Find your optimal daily protein intake",
      link: "/tools/protein",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>
          FitnessTools - Free Fitness Calculators & Health Assessment Tools
        </title>
        <meta
          name="description"
          content="Free, accurate fitness calculators for all your health needs. BMI, TDEE, body fat, macros, and more. Get personalized health insights instantly."
        />
        <meta
          name="keywords"
          content="fitness calculator, BMI calculator, TDEE calculator, body fat calculator, macro calculator, protein calculator, health tools"
        />
        <link rel="canonical" href="https://healthtoolkit.netlify.app/" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl mb-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Complete Fitness Toolkit
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Access 15+ professional-grade fitness calculators to optimize your
            health journey. Get instant, accurate results backed by scientific
            research.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/tools"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
            >
              Explore All Tools
            </Link>
            <Link
              to="/tools/bmi"
              className="bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-6 rounded-lg border border-blue-200 transition-colors shadow-sm"
            >
              Try BMI Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Tools Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Popular Tools</h2>
          <Link
            to="/tools"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularTools.map((tool, index) => (
            <ToolCard
              key={index}
              title={tool.title}
              description={tool.description}
              link={tool.link}
            />
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16 bg-white p-8 rounded-xl shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Why Use Our Fitness Tools?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-4">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
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
            </div>
            <h3 className="text-xl font-semibold mb-2">Scientific Accuracy</h3>
            <p className="text-gray-600">
              All calculations based on peer-reviewed scientific research and
              industry standards
            </p>
          </div>
          <div className="text-center p-4">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
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
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
            <p className="text-gray-600">
              Get immediate feedback and personalized recommendations in seconds
            </p>
          </div>
          <div className="text-center p-4">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">100% Free</h3>
            <p className="text-gray-600">
              All tools are completely free to use with no hidden fees or
              subscriptions
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              How accurate are these fitness calculators?
            </h3>
            <p className="text-gray-700">
              Our calculators use scientifically validated formulas that are
              widely accepted in the fitness and health industry. While they
              provide excellent estimates, individual results may vary based on
              factors like genetics and activity levels.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              Which calculator should I use first?
            </h3>
            <p className="text-gray-700">
              We recommend starting with the BMI calculator to assess your
              general weight status, followed by the Body Fat calculator for
              composition analysis, and then the TDEE calculator to determine
              your energy needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              How often should I recalculate my fitness metrics?
            </h3>
            <p className="text-gray-700">
              For most people, recalculating every 4-6 weeks is ideal to track
              progress and make necessary adjustments to your fitness or
              nutrition plan as your body changes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
