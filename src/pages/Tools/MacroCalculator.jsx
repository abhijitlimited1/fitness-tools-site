import { useState } from "react";
import { Helmet } from "react-helmet";
// import AdBanner from "../../components/AdBanner";

export default function MacroCalculator() {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("sedentary");
  const [goal, setGoal] = useState("maintenance");
  const [macros, setMacros] = useState(null);

  const calculateMacros = (e) => {
    e.preventDefault();
    if (weight) {
      const protein = weight * 2.2;
      let fat, carbs;

      switch (activity) {
        case "sedentary":
          fat = weight * 0.8;
          carbs = weight * 2 + 50;
          break;
        case "active":
          fat = weight * 1;
          carbs = weight * 3 + 50;
          break;
        case "athlete":
          fat = weight * 1.2;
          carbs = weight * 4 + 50;
          break;
        default:
          fat = weight * 1;
          carbs = weight * 3;
      }

      if (goal === "cutting") {
        fat *= 0.8;
        carbs *= 0.9;
      } else if (goal === "bulking") {
        fat *= 1.1;
        carbs *= 1.2;
      }

      setMacros({
        protein: Math.round(protein),
        carbs: Math.round(carbs),
        fat: Math.round(fat),
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>Macronutrient Calculator - FitnessTools</title>
        <meta
          name="description"
          content="Calculate your optimal macronutrient intake for muscle gain, fat loss, or maintenance based on weight and activity level."
        />
      </Helmet>

      {/* <AdBanner /> */}

      <h1 className="text-3xl font-bold mb-6">Macro Calculator</h1>

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={calculateMacros} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 border rounded"
              min="40"
              max="150"
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
              <option value="sedentary">Sedentary</option>
              <option value="active">Active (3-5 workouts/week)</option>
              <option value="athlete">Athlete (2x daily training)</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Goal</label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="maintenance">Maintenance</option>
              <option value="cutting">Fat Loss</option>
              <option value="bulking">Muscle Gain</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full cursor-pointer"
          >
            Calculate Macros
          </button>
        </form>

        {macros && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Daily Macronutrients</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded">
                <p className="font-semibold">Protein</p>
                <p>{macros.protein}g</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <p className="font-semibold">Carbs</p>
                <p>{macros.carbs}g</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded">
                <p className="font-semibold">Fat</p>
                <p>{macros.fat}g</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Based on {activity} activity and {goal} goal
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
