import { useState } from "react";
import { Helmet } from "react-helmet";
// import AdBanner from "../../components/AdBanner";

export default function BodyFatCalculator() {
  const [gender, setGender] = useState("male");
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateBodyFat = (e) => {
    e.preventDefault();
    if (waist && neck && height) {
      const logHeight = Math.log(height);
      const logDifference = Math.log(waist - neck);
      const bodyFat =
        gender === "male"
          ? 495 / (1.0324 - 0.19077 * logDifference + 0.15456 * logHeight) - 450
          : 495 / (1.29579 - 0.35004 * logDifference + 0.221 * logHeight) - 450;
      setResult(bodyFat.toFixed(1));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>
          Body Fat Calculator - Body Fat Percentage Calculator | FitnessTools
        </title>
        <meta
          name="description"
          content="Calculate your body fat percentage using the US Navy method with waist, neck, and height measurements. Free, accurate body composition analysis for weight loss tracking."
        />
        <meta
          name="keywords"
          content="body fat calculator, body fat percentage calculator, body composition calculator, weight loss calculator, navy method calculator, body fat measurement"
        />
        <link
          rel="canonical"
          href="https://healthtoolkit.netlify.app/tools/body-fat"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Body Fat Calculator",
              "url": "https://healthtoolkit.netlify.app/tools/body-fat",
              "description": "Free online body fat percentage calculator using the US Navy method. Calculate your body composition for fitness and weight loss tracking.",
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

      <h1 className="text-3xl font-bold mb-6">Body Fat Calculator</h1>

      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={calculateBodyFat}>
          <div className="mb-4">
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

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">Waist (cm)</label>
              <input
                type="number"
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Neck (cm)</label>
              <input
                type="number"
                value={neck}
                onChange={(e) => setNeck(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full cursor-pointer"
          >
            Calculate Body Fat
          </button>
        </form>

        {result && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold">
              Body Fat Percentage: {result}%
            </h3>
            <div className="mt-4 space-y-2 text-sm">
              <p className="bg-gray-50 p-2 rounded">
                Essential fat: {gender === "male" ? "2-5%" : "10-13%"}
              </p>
              <p className="bg-gray-50 p-2 rounded">
                Healthy range: {gender === "male" ? "6-24%" : "14-31%"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
