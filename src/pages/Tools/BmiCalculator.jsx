import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [unit, setUnit] = useState("metric");
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const [healthRisk, setHealthRisk] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (weight && height) {
      let bmiValue;

      if (unit === "metric") {
        const heightInMeters = height / 100;
        bmiValue = weight / (heightInMeters * heightInMeters);
      } else {
        // Imperial formula: BMI = (weight in pounds * 703) / (height in inches)²
        bmiValue = (weight * 703) / (height * height);
      }

      setBmi(bmiValue.toFixed(1));

      // Set BMI category
      if (bmiValue < 18.5) {
        setBmiCategory("Underweight");
        setHealthRisk(
          "Higher risk for some health issues including nutritional deficiencies and osteoporosis."
        );
      } else if (bmiValue < 25) {
        setBmiCategory("Normal Weight");
        setHealthRisk("Lower risk for most weight-related health conditions.");
      } else if (bmiValue < 30) {
        setBmiCategory("Overweight");
        setHealthRisk(
          "Increased risk for heart disease, high blood pressure, type 2 diabetes, and more."
        );
      } else if (bmiValue < 35) {
        setBmiCategory("Obese (Class 1)");
        setHealthRisk(
          "High risk for heart disease, high blood pressure, type 2 diabetes, and more."
        );
      } else if (bmiValue < 40) {
        setBmiCategory("Obese (Class 2)");
        setHealthRisk(
          "Very high risk for serious health conditions including heart disease and diabetes."
        );
      } else {
        setBmiCategory("Obese (Class 3)");
        setHealthRisk(
          "Extremely high risk for serious health conditions. Medical consultation strongly advised."
        );
      }
    }
  };

  const resetCalculator = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setBmi(null);
    setBmiCategory("");
    setHealthRisk("");
  };

  // Handle unit change
  const handleUnitChange = (newUnit) => {
    if (newUnit !== unit) {
      setUnit(newUnit);
      setWeight("");
      setHeight("");
      setBmi(null);
      setBmiCategory("");
      setHealthRisk("");
    }
  };

  // Related tools
  const relatedTools = [
    { name: "Body Fat Calculator", path: "/tools/body-fat" },
    { name: "TDEE Calculator", path: "/tools/tdee" },
    { name: "Ideal Weight Calculator", path: "/tools/ideal-weight" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>
          BMI Calculator - Calculate Your Body Mass Index | FitnessTools
        </title>
        <meta
          name="description"
          content="Calculate your Body Mass Index (BMI) with our free, accurate BMI calculator. Get instant results, health category classification, and personalized recommendations."
        />
        <meta
          name="keywords"
          content="BMI calculator, body mass index, weight status calculator, healthy weight calculator, obesity calculator, BMI chart"
        />
        <link
          rel="canonical"
          href="https://healthtoolkit.netlify.app/tools/bmi"
        />
      </Helmet>

      <div className="mb-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="text-sm text-gray-500 hover:text-blue-600"
              >
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <Link
                  to="/tools"
                  className="text-sm text-gray-500 hover:text-blue-600 ml-1"
                >
                  Tools
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="text-sm text-gray-700 ml-1">
                  BMI Calculator
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h1 className="text-3xl font-bold mb-2">BMI Calculator</h1>
            <p className="text-gray-600 mb-6">
              Calculate your Body Mass Index (BMI) to determine if you're at a
              healthy weight for your height.
            </p>

            {/* Unit Toggle */}
            <div className="flex mb-6 bg-gray-100 rounded-md p-1 w-fit">
              <button
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  unit === "metric" ? "bg-white shadow-sm" : "text-gray-600"
                }`}
                onClick={() => handleUnitChange("metric")}
              >
                Metric (kg/cm)
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  unit === "imperial" ? "bg-white shadow-sm" : "text-gray-600"
                }`}
                onClick={() => handleUnitChange("imperial")}
              >
                Imperial (lb/in)
              </button>
            </div>

            <form onSubmit={calculateBMI} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    {unit === "metric" ? "Weight (kg)" : "Weight (lb)"}
                  </label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder={unit === "metric" ? "e.g., 70" : "e.g., 154"}
                    required
                    min="1"
                    step="0.1"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    {unit === "metric" ? "Height (cm)" : "Height (in)"}
                  </label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder={unit === "metric" ? "e.g., 175" : "e.g., 69"}
                    required
                    min="1"
                    step="0.1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Age (optional)
                  </label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., 30"
                    min="1"
                    max="120"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Gender (optional)
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium flex-grow"
                >
                  Calculate BMI
                </button>
                <button
                  type="button"
                  onClick={resetCalculator}
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors font-medium"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          {/* Results Section */}
          {bmi && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-t-4 border-blue-600">
              <h2 className="text-2xl font-bold mb-4">Your BMI Results</h2>

              <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <span className="block text-sm text-gray-500 mb-1">
                    Your BMI
                  </span>
                  <span className="text-4xl font-bold text-gray-900">
                    {bmi}
                  </span>
                </div>

                <div className="text-center md:text-left mb-4 md:mb-0">
                  <span className="block text-sm text-gray-500 mb-1">
                    Category
                  </span>
                  <span
                    className={`text-xl font-semibold ${
                      bmiCategory === "Normal Weight"
                        ? "text-green-600"
                        : bmiCategory === "Underweight"
                        ? "text-blue-600"
                        : bmiCategory.includes("Obese")
                        ? "text-red-600"
                        : "text-orange-600"
                    }`}
                  >
                    {bmiCategory}
                  </span>
                </div>

                <div className="hidden md:block h-16 w-px bg-gray-200"></div>

                <div className="text-center md:text-right">
                  <span className="block text-sm text-gray-500 mb-1">
                    Healthy BMI Range
                  </span>
                  <span className="text-lg font-medium text-gray-900">
                    18.5 - 24.9
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      bmiCategory === "Normal Weight"
                        ? "bg-green-500"
                        : bmiCategory === "Underweight"
                        ? "bg-blue-500"
                        : bmiCategory.includes("Obese")
                        ? "bg-red-500"
                        : "bg-orange-500"
                    }`}
                    style={{
                      width: `${Math.min(Math.max((bmi / 50) * 100, 5), 100)}%`,
                    }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Underweight</span>
                  <span>Normal</span>
                  <span>Overweight</span>
                  <span>Obese</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-md mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Health Risk Assessment:
                </h3>
                <p className="text-gray-700">{healthRisk}</p>
              </div>

              <div className="text-sm text-gray-500">
                <p>
                  Note: BMI is a screening tool, not a diagnostic tool. Consult
                  with a healthcare provider for a complete health assessment.
                </p>
              </div>
            </div>
          )}

          {/* Information Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Understanding BMI</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">What is BMI?</h3>
                <p className="text-gray-700">
                  Body Mass Index (BMI) is a numerical value calculated from
                  your weight and height. It provides a simple way to classify
                  weight status that may indicate whether you're at a healthy
                  weight for your height.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">BMI Categories</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b text-left">
                          BMI Range
                        </th>
                        <th className="py-2 px-4 border-b text-left">
                          Weight Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">Below 18.5</td>
                        <td className="py-2 px-4 border-b">Underweight</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">18.5 - 24.9</td>
                        <td className="py-2 px-4 border-b">Normal Weight</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">25.0 - 29.9</td>
                        <td className="py-2 px-4 border-b">Overweight</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">30.0 - 34.9</td>
                        <td className="py-2 px-4 border-b">Obese (Class 1)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">35.0 - 39.9</td>
                        <td className="py-2 px-4 border-b">Obese (Class 2)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">40.0 and above</td>
                        <td className="py-2 px-4 border-b">Obese (Class 3)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Limitations of BMI
                </h3>
                <p className="text-gray-700 mb-4">
                  While BMI is useful for most people, it does have limitations:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    It may overestimate body fat in athletes and others with
                    muscular builds
                  </li>
                  <li>
                    It may underestimate body fat in older adults who have lost
                    muscle mass
                  </li>
                  <li>
                    It doesn't account for differences in body composition
                    between ethnicities
                  </li>
                  <li>
                    It doesn't distinguish between fat, muscle, and bone mass
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">BMI Formula</h3>
                <p className="text-gray-700 mb-2">
                  The BMI calculation uses the following formulas:
                </p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="font-medium mb-2">Metric Units:</p>
                  <p className="text-gray-700">
                    BMI = weight (kg) / [height (m)]²
                  </p>
                  <p className="font-medium mt-4 mb-2">Imperial Units:</p>
                  <p className="text-gray-700">
                    BMI = [weight (lb) / height (in)²] × 703
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Related Tools */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-lg font-semibold mb-4">Related Tools</h3>
            <ul className="space-y-3">
              {relatedTools.map((tool, index) => (
                <li key={index}>
                  <Link
                    to={tool.path}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">
              Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  Is BMI accurate for everyone?
                </h4>
                <p className="text-sm text-gray-700">
                  BMI is a useful screening tool for most people, but it has
                  limitations. It may not be as accurate for athletes, elderly
                  individuals, pregnant women, or certain ethnic groups.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  How often should I check my BMI?
                </h4>
                <p className="text-sm text-gray-700">
                  For most adults, checking BMI once or twice a year is
                  sufficient. If you're actively trying to lose or gain weight,
                  you might want to check more frequently.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  What should I do if my BMI is outside the normal range?
                </h4>
                <p className="text-sm text-gray-700">
                  If your BMI is outside the normal range (18.5-24.9), consider
                  consulting with a healthcare provider. They can help determine
                  if your weight poses health risks and suggest appropriate
                  actions.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  Is BMI the same for men and women?
                </h4>
                <p className="text-sm text-gray-700">
                  The BMI calculation and categories are the same for both men
                  and women. However, men typically have more muscle mass and
                  less body fat than women at the same BMI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
