import { useState } from "react";
import { Helmet } from "react-helmet";
// import AdBanner from "../../components/AdBanner";

export default function BodyShapeCalculator() {
  const [bust, setBust] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [shoulder, setShoulder] = useState("");
  const [shape, setShape] = useState(null);

  const calculateShape = (e) => {
    e.preventDefault();
    if (bust && waist && hip && shoulder) {
      const waistHipRatio = waist / hip;
      const bustWaistRatio = bust / waist;
      const shoulderHipRatio = shoulder / hip;

      let bodyShape = "";

      if (waistHipRatio < 0.75 && bustWaistRatio > 1.1) {
        bodyShape = "Hourglass";
      } else if (shoulderHipRatio > 1.05 && waistHipRatio < 0.85) {
        bodyShape = "Inverted Triangle";
      } else if (waistHipRatio > 0.85 && bustWaistRatio < 1.05) {
        bodyShape = "Apple";
      } else if (waistHipRatio < 0.75 && bustWaistRatio < 1.05) {
        bodyShape = "Pear";
      } else {
        bodyShape = "Rectangle";
      }

      setShape(bodyShape);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>Body Shape Calculator - Apple, Pear, Hourglass</title>
        <meta
          name="description"
          content="Determine your body shape based on bust, waist, and hip measurements. Get personalized fitness and style recommendations."
        />
      </Helmet>

      {/* <AdBanner /> */}

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Body Shape Calculator</h1>

        <form onSubmit={calculateShape} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Bust (cm)</label>
              <input
                type="number"
                value={bust}
                onChange={(e) => setBust(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Waist (cm)</label>
              <input
                type="number"
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Hip (cm)</label>
              <input
                type="number"
                value={hip}
                onChange={(e) => setHip(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Shoulder (cm)</label>
              <input
                type="number"
                value={shoulder}
                onChange={(e) => setShoulder(e.target.value)}
                className="w-full p-2 border rounded"
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

        {shape && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold">Your Body Shape</h3>
            <p className="text-3xl mt-2">{shape}</p>
            <div className="mt-4 text-sm text-gray-600">
              <p>Based on international anthropometric standards</p>
            </div>
          </div>
        )}
      </div>

      {/* SEO Article */}
      <article className="prose max-w-3xl mx-auto mt-12">
        <h2>Understanding Body Shapes for Better Fitness Results</h2>
        <p>
          Your body shape influences where you store fat and how you build
          muscle...
        </p>

        <h3>Common Body Types Explained</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-pink-50 p-4 rounded">
            <h4>Hourglass</h4>
            <ul>
              <li>Balanced proportions</li>
              <li>Accentuated waist</li>
              <li>Focus on maintenance</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h4>Apple</h4>
            <ul>
              <li>Upper body weight</li>
              <li>Focus on core strength</li>
              <li>Cardio benefits</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded">
            <h4>Pear</h4>
            <ul>
              <li>Lower body weight</li>
              <li>Strength training focus</li>
              <li>HIIT benefits</li>
            </ul>
          </div>
        </div>

        <h3>Training Recommendations</h3>
        <ul>
          <li>Apple: Core work + cardio</li>
          <li>Pear: Lower body strength</li>
          <li>Hourglass: Full-body balance</li>
        </ul>
      </article>
    </div>
  );
}
