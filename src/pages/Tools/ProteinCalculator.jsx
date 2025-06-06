import { useState } from "react";
import { Helmet } from "react-helmet";
// import AdBanner from "../../components/AdBanner";

export default function ProteinCalculator() {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("sedentary");
  const [goal, setGoal] = useState("maintain");
  const [protein, setProtein] = useState(null);

  const calculateProtein = (e) => {
    e.preventDefault();
    if (weight) {
      let multiplier = 1.6; // Base for sedentary
      if (activity === "active") multiplier = 1.8;
      if (activity === "athlete") multiplier = 2.2;
      if (goal === "gain") multiplier += 0.2;
      if (goal === "lose") multiplier -= 0.2;

      setProtein(Math.round(weight * multiplier));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>
          Protein Calculator - Daily Protein Intake Calculator | FitnessTools
        </title>
        <meta
          name="description"
          content="Calculate your optimal daily protein intake based on body weight, activity level, and fitness goals. Essential for muscle growth, recovery, and weight loss."
        />
        <meta
          name="keywords"
          content="protein calculator, protein intake calculator, daily protein calculator, muscle building calculator, weight loss calculator, nutrition calculator, macronutrient calculator"
        />
        <link
          rel="canonical"
          href="https://healthtoolkit.netlify.app/tools/protein"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Protein Calculator",
              "url": "https://healthtoolkit.netlify.app/tools/protein",
              "description": "Free online protein calculator to determine your optimal daily protein intake based on your weight, activity level, and fitness goals.",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }
          `}
        </script>
      </Helmet>

      {/* <AdBanner /> */}

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Protein Calculator</h1>

        <form onSubmit={calculateProtein} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Weight (kg)</label>
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
            <label className="block text-gray-700 mb-2">Activity Level</label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="sedentary">Sedentary</option>
              <option value="active">Active (3-5 workouts/week)</option>
              <option value="athlete">Athlete (Intense training)</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Fitness Goal</label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="maintain">Maintain Weight</option>
              <option value="gain">Build Muscle</option>
              <option value="lose">Lose Fat</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full cursor-pointer"
          >
            Calculate
          </button>
        </form>

        {protein && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold">Daily Protein Target</h3>
            <p className="text-3xl mt-2">{protein} grams</p>
            <div className="mt-4 text-sm text-gray-600">
              <p>
                Based on {activity} activity and {goal} goal
              </p>
            </div>
          </div>
        )}
      </div>

      {/* SEO Article */}
      <article className="prose max-w-3xl mx-auto mt-12">
        <h2>Why Protein is Crucial for Body Composition</h2>
        <p>Protein plays vital roles in muscle repair, hormone production...</p>

        <h3>Science-Backed Recommendations</h3>
        <ul>
          <li>Sedentary: 1.6g/kg</li>
          <li>Active: 1.8g/kg</li>
          <li>Athletes: 2.2g/kg</li>
        </ul>

        <h3>Best Protein Sources</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4>Animal Sources</h4>
            <ul>
              <li>Chicken breast</li>
              <li>Salmon</li>
              <li>Eggs</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h4>Plant Sources</h4>
            <ul>
              <li>Lentils</li>
              <li>Tofu</li>
              <li>Quinoa</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded">
            <h4>Supplements</h4>
            <ul>
              <li>Whey protein</li>
              <li>Casein</li>
              <li>Pea protein</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}
