import { useState } from "react";
import { Helmet } from "react-helmet";
// import AdBanner from "../../components/AdBanner";

export default function OneRepMaxCalculator() {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [orm, setOrm] = useState(null);

  const calculateORM = (e) => {
    e.preventDefault();
    if (weight && reps) {
      const max = weight * (1 + reps / 30);
      setOrm(Math.round(max));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>One-Rep Max Calculator - Weightlifting Strength Tool</title>
        <meta
          name="description"
          content="Calculate your 1RM for any lift using the Epley formula. Essential for strength training program design and progression tracking."
        />
      </Helmet>

      {/* <AdBanner /> */}

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">1RM Calculator</h1>

        <form onSubmit={calculateORM} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">
                Weight Lifted (kg)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full p-2 border rounded"
                min="20"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Reps Completed</label>
              <input
                type="number"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                className="w-full p-2 border rounded"
                min="1"
                max="10"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full cursor-pointer"
          >
            Calculate 1RM
          </button>
        </form>

        {orm && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold">Estimated One-Rep Max</h3>
            <p className="text-3xl mt-2">{orm} kg</p>
            <div className="mt-4 text-sm text-gray-600">
              <p>Using Epley formula: Weight × (1 + Reps/30)</p>
            </div>
          </div>
        )}
      </div>

      {/* SEO Article */}
      <article className="prose max-w-3xl mx-auto mt-12">
        <h2>Why Knowing Your 1RM is Crucial for Strength Training</h2>
        <p>Your one-rep maximum (1RM) is the gold standard for measuring...</p>

        <h3>How to Use 1RM Safely</h3>
        <ul>
          <li>Never test true 1RM without spotter</li>
          <li>Use 3-5 rep range for estimations</li>
          <li>Re-calculate every 6-8 weeks</li>
        </ul>

        <h3>Programming Based on 1RM</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4>Strength Phase</h4>
            <p>80-90% of 1RM</p>
            <p>3-5 reps/set</p>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h4>Hypertrophy Phase</h4>
            <p>70-80% of 1RM</p>
            <p>8-12 reps/set</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded">
            <h4>Endurance Phase</h4>
            <p>50-70% of 1RM</p>
            <p>15+ reps/set</p>
          </div>
        </div>
      </article>
    </div>
  );
}
