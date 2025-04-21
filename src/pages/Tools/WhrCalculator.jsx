import { useState } from "react";
import { Helmet } from "react-helmet";
// import AdBanner from "../../components/AdBanner";

export default function WhrCalculator() {
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(null);

  const calculateWHR = (e) => {
    e.preventDefault();
    if (waist && hip) {
      const ratio = (waist / hip).toFixed(2);
      let risk = "";

      if (gender === "male") {
        risk = ratio < 0.9 ? "Low" : ratio < 1.0 ? "Moderate" : "High";
      } else {
        risk = ratio < 0.8 ? "Low" : ratio < 0.85 ? "Moderate" : "High";
      }

      setResult({ ratio, risk });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>Waist-to-Hip Ratio Calculator - Health Risk Assessment</title>
        <meta
          name="description"
          content="Calculate your waist-hip ratio (WHR) to assess obesity-related health risks. Understand optimal ratios for men and women."
        />
      </Helmet>

      {/* <AdBanner /> */}

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">WHR Calculator</h1>

        <form onSubmit={calculateWHR} className="space-y-4">
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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Waist (cm)</label>
              <input
                type="number"
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
                className="w-full p-2 border rounded"
                step="0.1"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Hip (cm)</label>
              <input
                type="number"
                value={hip}
                onChange={(e) => setHip(e.target.value)}
                className="w-full p-2 border rounded"
                step="0.1"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full cursor-pointer"
          >
            Calculate
          </button>
        </form>

        {result && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold">Waist-to-Hip Ratio</h3>
            <p className="text-3xl mt-2">{result.ratio}</p>
            <div className="mt-4">
              <p className="font-medium">Health Risk: {result.risk}</p>
              <p className="text-sm text-gray-600 mt-2">
                {gender === "male"
                  ? "(Normal < 0.9, High ≥ 1.0)"
                  : "(Normal < 0.8, High ≥ 0.85)"}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* SEO Article */}
      <article className="prose max-w-3xl mx-auto mt-12">
        <h2>Why Waist-to-Hip Ratio Matters More Than BMI</h2>
        <p>
          WHO considers WHR the best obesity indicator for cardiovascular
          risk...
        </p>

        <h3>How to Measure Correctly</h3>
        <ul>
          <li>Waist: Narrowest part above belly button</li>
          <li>Hip: Widest part of buttocks</li>
          <li>Use non-stretch measuring tape</li>
        </ul>

        <h3>Health Implications</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded">
            <h4>High WHR Risks</h4>
            <ul>
              <li>Heart disease</li>
              <li>Type 2 diabetes</li>
              <li>Certain cancers</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h4>Improvement Strategies</h4>
            <ul>
              <li>Visceral fat reduction</li>
              <li>Strength training</li>
              <li>Balanced diet</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}
