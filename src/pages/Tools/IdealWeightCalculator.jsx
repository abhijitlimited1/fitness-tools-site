import { useState } from "react";
import { Helmet } from "react-helmet";
// import AdBanner from "../../components/AdBanner";

export default function IdealWeightCalculator() {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateIdealWeight = (e) => {
    e.preventDefault();
    if (height) {
      const heightInCm = parseInt(height);
      const idealWeight =
        gender === "male"
          ? 50 + 0.9 * (heightInCm - 152)
          : 45.5 + 0.9 * (heightInCm - 152);
      setResult(idealWeight.toFixed(1));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>
          Ideal Weight Calculator - Find Your Healthy Weight Range |
          FitnessTools
        </title>
        <meta
          name="description"
          content="Calculate your ideal body weight based on height and gender using scientific formulas. Find your healthy weight range for optimal fitness and wellbeing."
        />
        <meta
          name="keywords"
          content="ideal weight calculator, healthy weight calculator, weight range calculator, body weight calculator, height weight calculator, BMI weight calculator"
        />
        <link
          rel="canonical"
          href="https://healthtoolkit.netlify.app/tools/ideal-weight"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Ideal Weight Calculator",
              "url": "https://healthtoolkit.netlify.app/tools/ideal-weight",
              "description": "Free online ideal weight calculator to determine your healthy weight range based on height, gender, and body frame using scientific formulas.",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }
          `}
        </script>
      </Helmet>

      {/* <AdBanner /> */}

      <h1 className="text-3xl font-bold mb-6">Ideal Weight Calculator</h1>

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={calculateIdealWeight} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 border rounded"
              min="100"
              max="250"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full cursor-pointer"
          >
            Calculate Ideal Weight
          </button>
        </form>

        {result && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold">Ideal Weight: {result} kg</h3>
            <div className="mt-4 space-y-2 text-sm">
              <p className="bg-gray-50 p-2 rounded">
                Based on {gender === "male" ? "Hamwi" : "Devine"} formula
              </p>
              <p className="bg-gray-50 p-2 rounded">
                ±5% variation is considered normal
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
