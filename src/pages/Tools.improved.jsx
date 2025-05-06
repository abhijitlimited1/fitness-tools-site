import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ToolCard from "../components/ToolCard";

export default function Tools() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [popularTools, setPopularTools] = useState([]);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Tool categories with icons
  const categories = [
    {
      id: "all",
      name: "All Tools",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ),
    },
    {
      id: "body",
      name: "Body Composition",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      id: "nutrition",
      name: "Nutrition",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: "fitness",
      name: "Fitness & Performance",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];

  // Tools organized by category
  const toolsData = {
    body: [
      {
        title: "BMI Calculator",
        description: "Calculate your Body Mass Index to assess weight status",
        link: "/tools/bmi",
        popular: true,
      },
      {
        title: "Body Fat Calculator",
        description:
          "Estimate your body fat percentage with scientific accuracy",
        link: "/tools/body-fat",
        popular: true,
      },
      {
        title: "Body Type Calculator",
        description:
          "Determine if you're an Ectomorph, Mesomorph, or Endomorph",
        link: "/tools/body-type",
      },
      {
        title: "Waist-to-Hip Ratio",
        description: "Assess health risks based on fat distribution patterns",
        link: "/tools/whr",
      },
      {
        title: "Body Frame Calculator",
        description: "Analyze your bone structure for better health assessment",
        link: "/tools/body-frame",
      },
      {
        title: "Body Shape Calculator",
        description: "Identify your body shape: Apple, Pear, Hourglass, etc.",
        link: "/tools/body-shape",
      },
      {
        title: "Ideal Weight Calculator",
        description: "Find your ideal weight range based on height and frame",
        link: "/tools/ideal-weight",
      },
    ],
    nutrition: [
      {
        title: "Calorie Calculator",
        description: "Determine your daily calorie needs for weight management",
        link: "/tools/calorie",
        popular: true,
      },
      {
        title: "Macro Calculator",
        description: "Get personalized macronutrient recommendations",
        link: "/tools/macros",
        popular: true,
      },
      {
        title: "Protein Calculator",
        description: "Calculate your optimal daily protein intake",
        link: "/tools/protein",
      },
      {
        title: "Water Intake Calculator",
        description: "Determine your daily hydration needs for optimal health",
        link: "/tools/water",
      },
      {
        title: "Pregnancy Calories",
        description: "Calculate nutrition needs during pregnancy",
        link: "/tools/pregnancy-calories",
      },
    ],
    fitness: [
      {
        title: "BMR Calculator",
        description: "Calculate your Basal Metabolic Rate",
        link: "/tools/bmr",
      },
      {
        title: "TDEE Calculator",
        description: "Find your Total Daily Energy Expenditure",
        link: "/tools/tdee",
        popular: true,
      },
      {
        title: "One-Rep Max Calculator",
        description: "Estimate your maximum lifting strength",
        link: "/tools/one-rep-max",
      },
      {
        title: "Heart Rate Zones",
        description: "Calculate optimal heart rate zones for training",
        link: "/tools/heart-rate",
      },
      {
        title: "Fitness Age Calculator",
        description: "Determine your biological fitness age",
        link: "/tools/fitness-age",
      },
    ],
  };

  // Combine all tools for "all" category and search
  const allTools = [
    ...toolsData.body,
    ...toolsData.nutrition,
    ...toolsData.fitness,
  ];

  // Set up popular tools
  useEffect(() => {
    const popular = allTools.filter((tool) => tool.popular);
    setPopularTools(popular);
  }, []);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Filter tools based on active category and search term
  const getFilteredTools = () => {
    const toolsToFilter =
      activeCategory === "all" ? allTools : toolsData[activeCategory];

    if (!searchTerm.trim()) {
      return toolsToFilter;
    }

    const searchTermLower = searchTerm.toLowerCase();
    return toolsToFilter.filter(
      (tool) =>
        tool.title.toLowerCase().includes(searchTermLower) ||
        tool.description.toLowerCase().includes(searchTermLower)
    );
  };

  const filteredTools = getFilteredTools();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>All Fitness Calculators & Health Tools - FitnessTools</title>
        <meta
          name="description"
          content="Free, comprehensive collection of 15+ professional fitness calculators and health assessment tools. BMI, TDEE, body fat, macros, and more with instant results."
        />
        <meta
          name="keywords"
          content="fitness calculators, health tools, BMI calculator, body fat calculator, TDEE calculator, macro calculator, protein calculator, fitness assessment"
        />
        <link rel="canonical" href="https://healthtoolkit.netlify.app/tools" />
      </Helmet>

      {/* Hero Section with Gradient Background */}
      <div className="mb-12 text-center bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-4 rounded-xl shadow-sm">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Fitness & Health Calculators
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Access our complete collection of{" "}
          <span className="font-semibold text-blue-600">
            scientifically-backed
          </span>{" "}
          fitness calculators and health assessment tools. Get instant,
          personalized results to optimize your fitness journey.
        </p>
      </div>

      {/* Quick Access Popular Tools */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            Popular Tools
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {popularTools.map((tool, index) => (
            <Link
              key={index}
              to={tool.link}
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all text-center flex flex-col items-center justify-center"
            >
              <div className="bg-blue-100 p-3 rounded-full mb-3">
                {getToolIcon(tool.title)}
              </div>
              <h3 className="font-medium text-gray-900 mb-1 text-sm md:text-base">
                {tool.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="sticky top-16 z-10 bg-white py-4 border-b border-gray-200 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              className="block w-full p-3 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              placeholder="Search for calculators..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search calculators"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                aria-label="Clear search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex overflow-x-auto space-x-2 pb-2 md:pb-0 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap flex items-center ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } transition-all duration-200`}
                onClick={() => setActiveCategory(category.id)}
                aria-label={`Filter by ${category.name}`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Title */}
      {activeCategory !== "all" && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            {categories.find((cat) => cat.id === activeCategory)?.icon}
            {categories.find((cat) => cat.id === activeCategory)?.name} Tools
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded mt-2"></div>
        </div>
      )}

      {/* Tools Grid */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTools.map((tool, index) => (
            <ToolCard
              key={index}
              title={tool.title}
              description={tool.description}
              link={tool.link}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm mb-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            No tools found
          </h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search or filter criteria
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setActiveCategory("all");
            }}
            className="text-blue-600 font-medium hover:text-blue-800 flex items-center mx-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
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
            Reset filters
          </button>
        </div>
      )}

      {/* How to Use Section */}
      <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
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
          How to Use Our Calculators
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Choose a Calculator</h3>
            <p className="text-gray-600">
              Select the fitness or health calculator that matches your specific
              needs from our comprehensive collection.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Enter Your Data</h3>
            <p className="text-gray-600">
              Input your personal measurements and information into the
              calculator's simple and intuitive form fields.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Get Instant Results</h3>
            <p className="text-gray-600">
              Receive personalized, science-based results and recommendations to
              help guide your fitness and health decisions.
            </p>
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <section className="bg-white p-8 rounded-lg shadow-sm mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-green-600"
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
          Why Use Our Fitness Calculators?
        </h2>

        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
          Our fitness and health calculators provide accurate, science-based
          results to help you make informed decisions about your health journey.
          Whether you're looking to lose weight, gain muscle, or simply maintain
          a healthy lifestyle, our tools offer personalized insights tailored to
          your unique body and goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Body Composition Tools
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our body composition calculators help you understand your current
              physical state. From BMI to body fat percentage and body shape
              analysis, these tools provide a comprehensive picture of your
              body's composition and health status.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Nutrition Calculators
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Proper nutrition is essential for any fitness goal. Our nutrition
              calculators help you determine your calorie needs, macronutrient
              ratios, protein requirements, and hydration needs based on your
              body and activity level.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Fitness & Performance Tools
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Optimize your workouts with our fitness performance calculators.
              From determining your metabolic rate to calculating heart rate
              zones and estimating your one-rep max, these tools help you train
              smarter and more effectively.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Scientific Accuracy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              All our calculators use formulas and methodologies backed by
              scientific research and widely accepted in the fitness and medical
              communities. While no calculator can be 100% accurate for
              everyone, our tools provide reliable estimates to guide your
              fitness decisions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white p-8 rounded-lg shadow-sm mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-purple-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div className="p-5 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              How accurate are these fitness calculators?
            </h3>
            <p className="text-gray-700">
              Our calculators use scientifically validated formulas that are
              widely accepted in the fitness and health industry. While they
              provide excellent estimates, individual results may vary based on
              factors like genetics, body composition, and activity levels.
            </p>
          </div>

          <div className="p-5 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Do I need to create an account to use the calculators?
            </h3>
            <p className="text-gray-700">
              No, all of our calculators are completely free to use without any
              registration required. Simply select the calculator you need,
              input your data, and get instant results.
            </p>
          </div>

          <div className="p-5 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
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

      {/* Scroll to top button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
          aria-label="Scroll to top"
        >
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
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

// Helper function to get icon based on tool title
function getToolIcon(title) {
  const titleLower = title.toLowerCase();

  if (titleLower.includes("bmi")) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    );
  } else if (
    titleLower.includes("calorie") ||
    titleLower.includes("tdee") ||
    titleLower.includes("bmr")
  ) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    );
  } else if (
    titleLower.includes("body fat") ||
    titleLower.includes("body shape") ||
    titleLower.includes("body type")
  ) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    );
  } else if (
    titleLower.includes("macro") ||
    titleLower.includes("protein") ||
    titleLower.includes("nutrition")
  ) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-orange-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    );
  } else if (titleLower.includes("water")) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    );
  } else if (
    titleLower.includes("heart rate") ||
    titleLower.includes("fitness age")
  ) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    );
  } else if (
    titleLower.includes("one-rep max") ||
    titleLower.includes("rep max")
  ) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-purple-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-600"
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
    );
  }
}
