import { useState } from "react";
import { Helmet } from "react-helmet";
// import AdBanner from "../../components/AdBanner";

export default function TdeeCalculator() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState(1.375);
  const [tdee, setTdee] = useState(null);

  const calculateTDEE = (e) => {
    e.preventDefault();
    if (age && weight && height) {
      let bmr =
        gender === "male"
          ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
          : 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
      setTdee(Math.round(bmr * activity));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>TDEE Calculator - Total Daily Energy Expenditure</title>
        <meta
          name="description"
          content="Calculate your total daily calorie needs including exercise and activity. Accurate TDEE calculator for weight loss or muscle gain."
        />
      </Helmet>

      {/* <AdBanner /> */}

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">TDEE Calculator</h1>

        <form onSubmit={calculateTDEE} className="space-y-4">
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
              <option value={1.2}>Sedentary (office job)</option>
              <option value={1.375}>Light Exercise (1-3 days/week)</option>
              <option value={1.55}>Moderate Exercise (3-5 days/week)</option>
              <option value={1.725}>Heavy Exercise (6-7 days/week)</option>
              <option value={1.9}>Athlete (2x daily)</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full cursor-pointer"
          >
            Calculate TDEE
          </button>
        </form>

        {tdee && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold">Your Daily Calorie Needs</h3>
            <p className="text-3xl mt-2">{tdee} Calories</p>
            <div className="mt-4 text-sm text-gray-600">
              <p>Maintenance: {tdee}</p>
              <p>Weight Loss: {tdee - 500}</p>
              <p>Muscle Gain: {tdee + 300}</p>
            </div>
          </div>
        )}
      </div>

      {/* SEO Article */}
      <article className="prose max-w-3xl mx-auto mt-12">
        <h2>Understanding TDEE for Effective Weight Management</h2>
        <p>Your Total Daily Energy Expenditure (TDEE) represents...</p>

        <h3>How TDEE is Calculated</h3>
        <p>
          We use the Harris-Benedict equation validated by 2022 NIH study...
        </p>

        <h3>4 Practical Applications</h3>
        <ol>
          <li>Weight loss: Eat 500 below TDEE</li>
          <li>Muscle gain: Eat 300 above TDEE</li>
          <li>Maintenance: Match TDEE</li>
          <li>Recomp: Cycle around TDEE</li>
        </ol>

        <div className="bg-orange-50 p-4 rounded-lg">
          <h4>Pro Tip:</h4>
          <p>Recalculate TDEE every 4-6 weeks or after 5kg weight change</p>
        </div>
      </article>
    </div>
  );
}
