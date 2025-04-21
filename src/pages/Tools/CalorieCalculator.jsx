import { useState } from "react";
import { Helmet } from "react-helmet";
// import AdBanner from "../../components/AdBanner";

export default function CalorieCalculator() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState(1.2);
  const [result, setResult] = useState(null);

  const calculateCalories = (e) => {
    e.preventDefault();
    if (age && weight && height) {
      let bmr =
        gender === "male"
          ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
          : 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
      setResult(Math.round(bmr * activity));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>Calorie Calculator - FitnessTools</title>
        <meta
          name="description"
          content="Calculate your daily calorie needs based on age, gender, weight, height, and activity level using our scientific calculator."
        />
      </Helmet>

      {/* <AdBanner /> */}

      <h1 className="text-3xl font-bold mb-6">Calorie Calculator</h1>

      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={calculateCalories}>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>

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
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Activity Level</label>
            <select
              value={activity}
              onChange={(e) => setActivity(parseFloat(e.target.value))}
              className="w-full p-2 border rounded"
            >
              <option value={1.2}>Sedentary (little or no exercise)</option>
              <option value={1.375}>Light exercise (1-3 days/week)</option>
              <option value={1.55}>Moderate exercise (3-5 days/week)</option>
              <option value={1.725}>Heavy exercise (6-7 days/week)</option>
              <option value={1.9}>Athlete (2x trainings/day)</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full cursor-pointer"
          >
            Calculate Calories
          </button>
        </form>

        {result && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold">
              Daily Maintenance Calories: {result}
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div className="p-2 bg-gray-50 rounded">
                Mild weight loss: {Math.round(result * 0.9)}
              </div>
              <div className="p-2 bg-gray-50 rounded">
                Weight loss: {Math.round(result * 0.8)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
