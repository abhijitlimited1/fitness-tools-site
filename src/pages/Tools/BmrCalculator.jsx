import { useState } from "react";
import { Helmet } from "react-helmet";
// import AdBanner from "../../components/AdBanner";

export default function BmrCalculator() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmr, setBmr] = useState(null);
  const [activity, setActivity] = useState(1.2);

  const calculateBMR = (e) => {
    e.preventDefault();
    if (age && weight && height) {
      // Mifflin-St Jeor Equation
      let bmrValue =
        gender === "male"
          ? 10 * weight + 6.25 * height - 5 * age + 5
          : 10 * weight + 6.25 * height - 5 * age - 161;

      setBmr({
        base: Math.round(bmrValue),
        tdee: Math.round(bmrValue * activity),
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>BMR Calculator - Basal Metabolic Rate</title>
        <meta
          name="description"
          content="Calculate your basal metabolic rate (BMR) - the calories your body needs at rest. Essential for weight management and diet planning."
        />
      </Helmet>

      {/* <AdBanner /> */}

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">BMR Calculator</h1>

        <form onSubmit={calculateBMR} className="space-y-4">
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

          <div className="grid grid-cols-2 gap-4">
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

          <div>
            <label className="block text-gray-700 mb-2">Activity Level</label>
            <select
              value={activity}
              onChange={(e) => setActivity(parseFloat(e.target.value))}
              className="w-full p-2 border rounded"
            >
              <option value={1.2}>Sedentary (little/no exercise)</option>
              <option value={1.375}>Light (1-3 days/week)</option>
              <option value={1.55}>Moderate (3-5 days/week)</option>
              <option value={1.725}>Active (6-7 days/week)</option>
              <option value={1.9}>Athlete (2x daily)</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full cursor-pointer"
          >
            Calculate BMR
          </button>
        </form>

        {bmr && (
          <div className="mt-6 text-center">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Basal Metabolic Rate</h3>
              <p className="text-2xl">{bmr.base} calories/day</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-medium mb-2">Daily Maintenance (TDEE)</h4>
              <p className="text-xl">{bmr.tdee} calories</p>
              <p className="text-sm text-gray-600 mt-2">
                For weight maintenance
              </p>
            </div>
          </div>
        )}
      </div>

      {/* SEO Article */}
      <article className="prose max-w-3xl mx-auto mt-12">
        <h2>Understanding Your Basal Metabolic Rate</h2>
        <p>
          BMR accounts for 60-75% of daily calorie expenditure and represents...
        </p>

        <h3>Factors Affecting BMR</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4>Body Composition</h4>
            <ul>
              <li>Muscle burns more than fat</li>
              <li>Each kg muscle burns 13kcal/day</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h4>Age</h4>
            <ul>
              <li>Decreases 1-2% per decade after 20</li>
              <li>Maintain with strength training</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded">
            <h4>Hormones</h4>
            <ul>
              <li>Thyroid function critical</li>
              <li>Cortisol impacts metabolism</li>
            </ul>
          </div>
        </div>

        <h3>5 Ways to Boost BMR</h3>
        <ol>
          <li>Build muscle through resistance training</li>
          <li>Stay hydrated (500ml water ↑ BMR 30% for 1hr)</li>
          <li>Eat protein-rich meals (↑ TEF by 15-30%)</li>
          <li>Include HIIT workouts</li>
          <li>Get quality sleep (7-9 hours)</li>
        </ol>

        <div className="bg-purple-50 p-4 rounded-lg mt-4">
          <h4>Pro Tip:</h4>
          <p>
            Recalculate BMR after 5kg weight change or significant muscle gain
          </p>
        </div>
      </article>
    </div>
  );
}
