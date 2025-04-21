import { useState } from "react";
import { Helmet } from "react-helmet";
// import AdBanner from "../../components/AdBanner";

export default function WaterIntakeCalculator() {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("moderate");
  const [result, setResult] = useState(null);

  const calculateWater = (e) => {
    e.preventDefault();
    if (weight) {
      let base = weight * 0.033;
      if (activity === "high") base += 0.5;
      if (activity === "athlete") base += 0.7;
      setResult(base.toFixed(1));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>Daily Water Intake Calculator - Stay Hydrated</title>
        <meta
          name="description"
          content="Calculate your ideal water intake based on body weight and activity level. Professional hydration calculator with scientific formula."
        />
      </Helmet>

      {/* <AdBanner /> */}

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Water Calculator</h1>

        <form onSubmit={calculateWater} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 border rounded"
              min="30"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Activity Level</label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="moderate">Moderate Exercise</option>
              <option value="high">Intense Exercise</option>
              <option value="athlete">Athlete Training</option>
            </select>
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
            <h3 className="text-xl font-semibold">Daily Water Requirement</h3>
            <p className="text-3xl mt-2">{result} Liters</p>
          </div>
        )}
      </div>

      {/* SEO Article Section */}
      <article className="prose max-w-3xl mx-auto mt-12">
        <h2>Why Proper Hydration is Crucial for Fitness</h2>
        <p>Water makes up 60% of your body weight and is essential for...</p>

        <h3>How We Calculate Your Water Needs</h3>
        <p>Formula based on European Food Safety Authority guidelines:</p>
        <ul>
          <li>Base: 33ml per kg of body weight</li>
          <li>+500ml for intense exercise</li>
          <li>+700ml for athlete training</li>
        </ul>

        <h3>5 Hydration Tips</h3>
        <ol>
          <li>Drink 500ml upon waking</li>
          <li>Carry a reusable water bottle</li>
          <li>Monitor urine color</li>
        </ol>
      </article>
    </div>
  );
}
