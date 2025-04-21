import { useState } from "react";
import { Helmet } from "react-helmet";
// import AdBanner from "../../components/AdBanner";

export default function PregnancyCalorieCalculator() {
  const [weight, setWeight] = useState("");
  const [trimester, setTrimester] = useState("1");
  const [activity, setActivity] = useState("sedentary");
  const [calories, setCalories] = useState(null);

  const calculateCalories = (e) => {
    e.preventDefault();
    if (weight) {
      let base = weight * 30; // Base metabolic rate
      let additional = 0;

      // Activity multiplier
      if (activity === "light") base *= 1.2;
      if (activity === "active") base *= 1.35;

      // Trimester needs
      if (trimester === "2") additional = 340;
      if (trimester === "3") additional = 452;

      setCalories(Math.round(base + additional));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>Pregnancy Calorie Calculator - Nutritional Needs</title>
        <meta
          name="description"
          content="Calculate optimal calorie intake during pregnancy. Get trimester-specific nutritional guidance for healthy fetal development."
        />
      </Helmet>

      {/* <AdBanner /> */}

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Pregnancy Calories</h1>

        <form onSubmit={calculateCalories} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">
              Pre-pregnancy Weight (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 border rounded"
              min="40"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Trimester</label>
            <select
              value={trimester}
              onChange={(e) => setTrimester(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="1">First Trimester</option>
              <option value="2">Second Trimester</option>
              <option value="3">Third Trimester</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Activity Level</label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="sedentary">Sedentary</option>
              <option value="light">Light Activity</option>
              <option value="active">Active</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full cursor-pointer"
          >
            Calculate
          </button>
        </form>

        {calories && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold">Daily Calorie Needs</h3>
            <p className="text-3xl mt-2">{calories} kcal</p>
            <div className="mt-4 text-sm text-gray-600">
              <p>
                Includes {calories - Math.round(weight * 30)} kcal pregnancy
                addition
              </p>
            </div>
          </div>
        )}
      </div>

      {/* SEO Article */}
      <article className="prose max-w-3xl mx-auto mt-12">
        <h2>Nutrition During Pregnancy: Science-Based Guide</h2>
        <p>
          Proper calorie intake supports fetal growth while maintaining maternal
          health...
        </p>

        <h3>Trimester Breakdown</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-pink-50 p-4 rounded">
            <h4>First Trimester</h4>
            <ul>
              <li>Focus on quality</li>
              <li>+0-100 kcal/day</li>
              <li>Folic acid crucial</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <h4>Second Trimester</h4>
            <ul>
              <li>+340 kcal/day</li>
              <li>Iron requirements ↑</li>
              <li>Protein needs ↑</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded">
            <h4>Third Trimester</h4>
            <ul>
              <li>+452 kcal/day</li>
              <li>Calcium needs ↑</li>
              <li>Frequent small meals</li>
            </ul>
          </div>
        </div>

        <h3>Essential Nutrients</h3>
        <ul>
          <li>Omega-3 for brain development</li>
          <li>Choline for neural tube</li>
          <li>Vitamin D for bones</li>
        </ul>
      </article>
    </div>
  );
}
