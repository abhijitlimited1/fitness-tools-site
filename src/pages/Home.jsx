import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ToolCard from "../components/ToolCard";

export default function Home() {
  const popularTools = [
    {
      title: "BMI Calculator",
      description:
        "Calculate your Body Mass Index (BMI) to assess weight status and health risks",
      link: "/tools/bmi",
    },
    {
      title: "Calorie Calculator",
      description:
        "Find out how many calories you should consume daily for your weight goals",
      link: "/tools/calorie",
    },
    {
      title: "Body Fat Calculator",
      description:
        "Estimate your body fat percentage accurately for better fitness tracking",
      link: "/tools/body-fat",
    },
    {
      title: "TDEE Calculator",
      description:
        "Calculate your Total Daily Energy Expenditure for precise calorie planning",
      link: "/tools/tdee",
    },
    {
      title: "Macro Calculator",
      description:
        "Get personalized protein, carb, and fat recommendations for your diet",
      link: "/tools/macros",
    },
    {
      title: "BMR Calculator",
      description:
        "Determine your Basal Metabolic Rate - calories needed at complete rest",
      link: "/tools/bmr",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>
          FitnessTools - Free BMI, Calorie & Macro Calculators | Health Tools
        </title>
        <meta
          name="description"
          content="Free, accurate fitness calculators for all your health needs. BMI calculator, calorie calculator, body mass index calculator, TDEE, macro calculator and more. Calculate how many calories you should consume daily."
        />
        <meta
          name="keywords"
          content="bmi calculator, bmi index calculator, body index calculator, body bmi calculator, body weight index calculator, calorie calculator, calorie estimator, bmr calculator, macro calculator, weight loss calculator, tdee, how many calories should i consume in a day, how many cal should i eat a day, how many calories should i intake a day"
        />
        <link rel="canonical" href="https://healthtoolkit.netlify.app/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "FitnessTools",
              "url": "https://healthtoolkit.netlify.app/",
              "description": "Free, accurate fitness calculators for all your health needs including BMI calculator, calorie calculator, and macro calculator.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://healthtoolkit.netlify.app/tools?search={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "hasPart": [
                {
                  "@type": "WebApplication",
                  "name": "BMI Calculator",
                  "url": "https://healthtoolkit.netlify.app/tools/bmi",
                  "description": "Calculate your Body Mass Index (BMI) with our free, accurate BMI calculator. Body mass index calculator for weight assessment."
                },
                {
                  "@type": "WebApplication",
                  "name": "Body Mass Index Calculator",
                  "url": "https://healthtoolkit.netlify.app/tools/body-mass-index",
                  "description": "Learn about Body Mass Index (BMI) and calculate your BMI with our free BMI index calculator. Understand what your BMI means for your health."
                },
                {
                  "@type": "WebApplication",
                  "name": "Calorie Calculator",
                  "url": "https://healthtoolkit.netlify.app/tools/calorie",
                  "description": "Calculate how many calories you should consume in a day based on your age, gender, weight, height, and activity level."
                },
                {
                  "@type": "WebApplication",
                  "name": "How Many Calories Calculator",
                  "url": "https://healthtoolkit.netlify.app/tools/how-many-calories",
                  "description": "Find out exactly how many calories you should consume in a day for weight loss, maintenance, or muscle gain."
                },
                {
                  "@type": "WebApplication",
                  "name": "TDEE Calculator",
                  "url": "https://healthtoolkit.netlify.app/tools/tdee",
                  "description": "Calculate your total daily energy expenditure (TDEE) to determine your daily calorie needs."
                },
                {
                  "@type": "WebApplication",
                  "name": "Macro Calculator",
                  "url": "https://healthtoolkit.netlify.app/tools/macros",
                  "description": "Calculate your optimal macronutrient intake for weight loss, muscle gain, or maintenance."
                },
                {
                  "@type": "WebApplication",
                  "name": "BMR Calculator",
                  "url": "https://healthtoolkit.netlify.app/tools/bmr",
                  "description": "Calculate your basal metabolic rate (BMR) - the calories your body needs at rest."
                }
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl mb-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Free BMI, Calorie & Fitness Calculators
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Access 15+ professional-grade fitness calculators including BMI
            calculator, calorie calculator, and macro calculator. Find out how
            many calories you should consume daily and track your fitness goals
            with accurate, science-backed tools.
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

      {/* Essential Calculators Section - Added for SEO */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Essential Health & Fitness Calculators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              <Link to="/tools/bmi" className="text-blue-600 hover:underline">
                BMI Calculator
              </Link>
            </h3>
            <p className="text-gray-700 mb-4">
              Our BMI calculator (body mass index calculator) helps you
              determine if your weight is in a healthy range for your height.
              BMI is a widely used screening tool that categorizes individuals
              as underweight, normal weight, overweight, or obese.
            </p>
            <div className="flex flex-col space-y-2">
              <Link
                to="/tools/bmi"
                className="text-blue-600 font-medium hover:underline"
              >
                Calculate your BMI →
              </Link>
              <Link
                to="/tools/body-mass-index"
                className="text-blue-500 text-sm hover:underline"
              >
                Learn more about Body Mass Index
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              <Link
                to="/tools/calorie"
                className="text-blue-600 hover:underline"
              >
                Calorie Calculator
              </Link>
            </h3>
            <p className="text-gray-700 mb-4">
              Wondering how many calories you should consume in a day? Our
              calorie calculator and calorie estimator provides personalized
              recommendations based on your age, gender, weight, height, and
              activity level to help you achieve your weight goals.
            </p>
            <div className="flex flex-col space-y-2">
              <Link
                to="/tools/calorie"
                className="text-blue-600 font-medium hover:underline"
              >
                Calculate your daily calories →
              </Link>
              <Link
                to="/tools/how-many-calories"
                className="text-blue-500 text-sm hover:underline"
              >
                How many calories should I consume?
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              <Link to="/tools/tdee" className="text-blue-600 hover:underline">
                TDEE Calculator
              </Link>
            </h3>
            <p className="text-gray-700 mb-4">
              The TDEE (Total Daily Energy Expenditure) calculator determines
              how many calories you burn each day, accounting for your basal
              metabolic rate and physical activity. Essential for weight
              management and fitness planning.
            </p>
            <Link
              to="/tools/tdee"
              className="text-blue-600 font-medium hover:underline"
            >
              Calculate your TDEE →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              <Link
                to="/tools/macros"
                className="text-blue-600 hover:underline"
              >
                Macro Calculator
              </Link>
            </h3>
            <p className="text-gray-700 mb-4">
              Our macro calculator provides personalized recommendations for
              your daily intake of proteins, carbohydrates, and fats based on
              your calorie needs and fitness goals. Perfect for optimizing your
              nutrition plan.
            </p>
            <Link
              to="/tools/macros"
              className="text-blue-600 font-medium hover:underline"
            >
              Calculate your macros →
            </Link>
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
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              How many calories should I consume in a day?
            </h3>
            <p className="text-gray-700">
              The number of calories you should consume daily depends on several
              factors including your age, gender, weight, height, and activity
              level. Our Calorie Calculator and TDEE Calculator can provide
              personalized estimates based on your specific information and
              goals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              What is BMI and how is it calculated?
            </h3>
            <p className="text-gray-700">
              BMI (Body Mass Index) is a numerical value calculated from your
              weight and height that provides a simple measure of your body
              fatness. Our BMI calculator uses the formula: BMI = weight(kg) /
              height²(m²). It helps categorize individuals as underweight,
              normal weight, overweight, or obese.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              What's the difference between BMR and TDEE calculators?
            </h3>
            <p className="text-gray-700">
              BMR (Basal Metabolic Rate) calculates the calories your body needs
              at complete rest to maintain basic functions. TDEE (Total Daily
              Energy Expenditure) builds on BMR by factoring in your activity
              level to determine your total daily calorie needs. For weight
              management, TDEE is typically more useful.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
