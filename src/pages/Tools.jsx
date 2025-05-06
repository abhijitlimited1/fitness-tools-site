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

      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Fitness & Health Calculators
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Access our complete collection of scientifically-backed fitness
          calculators and health assessment tools. Get instant, personalized
          results to optimize your fitness journey.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
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
              className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for calculators..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Tabs */}
          <div className="flex overflow-x-auto space-x-2 pb-2 md:pb-0">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="text-center py-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mx-auto text-gray-400 mb-4"
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
          <p className="text-gray-600">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}

      {/* SEO Content */}
      <section className="mt-16 bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why Use Our Fitness Calculators?
        </h2>
        <p className="text-gray-700 mb-6">
          Our fitness and health calculators provide accurate, science-based
          results to help you make informed decisions about your health journey.
          Whether you're looking to lose weight, gain muscle, or simply maintain
          a healthy lifestyle, our tools offer personalized insights tailored to
          your unique body and goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Body Composition Tools
            </h3>
            <p className="text-gray-700">
              Our body composition calculators help you understand your current
              physical state. From BMI to body fat percentage and body shape
              analysis, these tools provide a comprehensive picture of your
              body's composition and health status.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Nutrition Calculators
            </h3>
            <p className="text-gray-700">
              Proper nutrition is essential for any fitness goal. Our nutrition
              calculators help you determine your calorie needs, macronutrient
              ratios, protein requirements, and hydration needs based on your
              body and activity level.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Fitness & Performance Tools
            </h3>
            <p className="text-gray-700">
              Optimize your workouts with our fitness performance calculators.
              From determining your metabolic rate to calculating heart rate
              zones and estimating your one-rep max, these tools help you train
              smarter and more effectively.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Scientific Accuracy
            </h3>
            <p className="text-gray-700">
              All our calculators use formulas and methodologies backed by
              scientific research and widely accepted in the fitness and medical
              communities. While no calculator can be 100% accurate for
              everyone, our tools provide reliable estimates to guide your
              fitness decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
