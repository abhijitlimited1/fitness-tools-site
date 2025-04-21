import { useState } from "react";
import { Helmet } from "react-helmet";
// import AdBanner from "../../components/AdBanner";

export default function HeartRateCalculator() {
  const [age, setAge] = useState("");
  const [restingHR, setRestingHR] = useState("");
  const [result, setResult] = useState(null);

  const calculateHR = (e) => {
    e.preventDefault();
    if (age && restingHR) {
      const maxHR = 220 - age;
      const reserve = maxHR - restingHR;
      const moderateMin = Math.round(reserve * 0.5 + restingHR);
      const moderateMax = Math.round(reserve * 0.7 + restingHR);
      const vigorousMin = Math.round(reserve * 0.7 + restingHR);
      const vigorousMax = Math.round(reserve * 0.85 + restingHR);

      setResult({
        zones: {
          moderate: `${moderateMin}-${moderateMax}`,
          vigorous: `${vigorousMin}-${vigorousMax}`,
        },
        maxHR,
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>Target Heart Rate Calculator - Exercise Intensity Zones</title>
        <meta
          name="description"
          content="Calculate your target heart rate zones for optimal cardio training. Use the Karvonen formula for personalized intensity ranges."
        />
      </Helmet>

      {/* <AdBanner /> */}

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Heart Rate Calculator</h1>

        <form onSubmit={calculateHR} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-2 border rounded"
                min="18"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Resting HR</label>
              <input
                type="number"
                value={restingHR}
                onChange={(e) => setRestingHR(e.target.value)}
                className="w-full p-2 border rounded"
                min="40"
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
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Maximum Heart Rate</h3>
              <p className="text-2xl">{result.maxHR} BPM</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-medium mb-2">Moderate Intensity</h4>
                <p className="text-xl">{result.zones.moderate} BPM</p>
                <p className="text-sm text-gray-600 mt-2">
                  50-70% of HR Reserve
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded">
                <h4 className="font-medium mb-2">Vigorous Intensity</h4>
                <p className="text-xl">{result.zones.vigorous} BPM</p>
                <p className="text-sm text-gray-600 mt-2">
                  70-85% of HR Reserve
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SEO Article */}
      <article className="prose max-w-3xl mx-auto mt-12">
        <h2>Optimizing Cardio Training Through Heart Rate Zones</h2>
        <p>
          Training at proper intensities maximizes fat burn and improves
          cardiovascular health...
        </p>

        <h3>The Science Behind Zones</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4>Moderate Zone (50-70%)</h4>
            <ul>
              <li>Best for fat burning</li>
              <li>Improves endurance</li>
              <li>Safe for beginners</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <h4>Vigorous Zone (70-85%)</h4>
            <ul>
              <li>Boosts VO2 max</li>
              <li>Enhances performance</li>
              <li>Limit to 20-30 mins</li>
            </ul>
          </div>
        </div>

        <h3>How to Measure Accurately</h3>
        <ol>
          <li>Take resting HR in morning</li>
          <li>Use chest strap monitor</li>
          <li>Average over 3 days</li>
        </ol>
      </article>
    </div>
  );
}
