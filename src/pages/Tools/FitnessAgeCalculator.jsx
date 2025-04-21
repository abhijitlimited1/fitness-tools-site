import { useState } from "react";
import { Helmet } from "react-helmet";
// import AdBanner from "../../components/AdBanner";

export default function FitnessAgeCalculator() {
  const [age, setAge] = useState("");
  const [restingHR, setRestingHR] = useState("");
  const [activity, setActivity] = useState("moderate");
  const [waist, setWaist] = useState("");
  const [fitnessAge, setFitnessAge] = useState(null);

  const calculateFitnessAge = (e) => {
    e.preventDefault();
    if (age && restingHR && waist) {
      const baseAge = parseInt(age);
      let ageAdjustment = 0;

      // Resting HR impact
      if (restingHR < 60) ageAdjustment -= 5;
      else if (restingHR < 70) ageAdjustment -= 3;
      else if (restingHR > 80) ageAdjustment += 5;
      else if (restingHR > 90) ageAdjustment += 8;

      // Activity level impact
      if (activity === "high") ageAdjustment -= 7;
      else if (activity === "moderate") ageAdjustment -= 3;
      else ageAdjustment += 2;

      // Waist circumference impact (cm)
      if (waist < 80) ageAdjustment -= 4;
      else if (waist > 94) ageAdjustment += 5;
      else if (waist > 102) ageAdjustment += 8;

      const calculatedAge = baseAge + ageAdjustment;
      setFitnessAge(Math.max(calculatedAge, 18));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>Fitness Age Calculator - Biological Age Test</title>
        <meta
          name="description"
          content="Calculate your fitness age based on resting heart rate, activity level, and body composition. Discover how young your body really is!"
        />
      </Helmet>

      {/* <AdBanner /> */}

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Fitness Age Calculator</h1>

        <form onSubmit={calculateFitnessAge} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Actual Age</label>
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
            <label className="block text-gray-700 mb-2">
              Resting Heart Rate (BPM)
            </label>
            <input
              type="number"
              value={restingHR}
              onChange={(e) => setRestingHR(e.target.value)}
              className="w-full p-2 border rounded"
              min="40"
              max="120"
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
              <option value="high">High (6+ hrs/week)</option>
              <option value="moderate">Moderate (3-5 hrs/week)</option>
              <option value="low">Low (0-2 hrs/week)</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Waist Circumference (cm)
            </label>
            <input
              type="number"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
              className="w-full p-2 border rounded"
              min="60"
              max="150"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full cursor-pointer"
          >
            Calculate Fitness Age
          </button>
        </form>

        {fitnessAge && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold">Your Fitness Age</h3>
            <p
              className={`text-4xl mt-2 ${
                fitnessAge < age ? "text-green-600" : "text-red-600"
              }`}
            >
              {fitnessAge}
            </p>
            <div className="mt-4">
              {fitnessAge < age ? (
                <p className="text-green-600">
                  Younger than your actual age! 🎉
                </p>
              ) : (
                <p className="text-red-600">
                  Focus on improving your fitness 💪
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* SEO Article */}
      <article className="prose max-w-3xl mx-auto mt-12">
        <h2>Why Fitness Age Matters More Than Chronological Age</h2>
        <p>
          Studies show fitness age predicts longevity better than actual age...
        </p>

        <h3>Key Factors Affecting Fitness Age</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4>Cardiovascular Health</h4>
            <ul>
              <li>Resting heart rate</li>
              <li>VO2 max</li>
              <li>Blood pressure</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h4>Body Composition</h4>
            <ul>
              <li>Waist circumference</li>
              <li>Muscle mass</li>
              <li>Body fat %</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded">
            <h4>Lifestyle Factors</h4>
            <ul>
              <li>Physical activity</li>
              <li>Sleep quality</li>
              <li>Stress levels</li>
            </ul>
          </div>
        </div>

        <h3>Improvement Strategies</h3>
        <ol>
          <li>High-intensity interval training</li>
          <li>Mediterranean diet</li>
          <li>Stress management techniques</li>
        </ol>
      </article>
    </div>
  );
}
