import { useState } from "react";
import { Helmet } from "react-helmet";
// import AdBanner from "../../components/AdBanner";

export default function BodyTypeCalculator() {
  const [wrist, setWrist] = useState("");
  const [hip, setHip] = useState("");
  const [result, setResult] = useState(null);

  const calculateBodyType = (e) => {
    e.preventDefault();
    if (wrist && hip) {
      const ratio = hip / wrist;
      let bodyType = "";

      if (ratio > 10.4) bodyType = "Endomorph";
      else if (ratio > 9.6) bodyType = "Mesomorph";
      else bodyType = "Ectomorph";

      setResult(bodyType);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>Body Type Calculator - Ectomorph/Mesomorph/Endomorph</title>
        <meta
          name="description"
          content="Determine your body type (somatotype) using wrist-to-hip ratio. Get customized workout and diet recommendations based on your body type."
        />
      </Helmet>

      {/* <AdBanner /> */}

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Body Type Calculator</h1>

        <form onSubmit={calculateBodyType} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">
              Wrist Circumference (cm)
            </label>
            <input
              type="number"
              value={wrist}
              onChange={(e) => setWrist(e.target.value)}
              className="w-full p-2 border rounded"
              step="0.1"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Hip Circumference (cm)
            </label>
            <input
              type="number"
              value={hip}
              onChange={(e) => setHip(e.target.value)}
              className="w-full p-2 border rounded"
              step="0.1"
              required
            />
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
            <h3 className="text-xl font-semibold">Your Body Type</h3>
            <p className="text-3xl mt-2">{result}</p>
            <div className="mt-4 text-sm text-gray-600">
              <p>Based on Carter-Heath somatotype method</p>
            </div>
          </div>
        )}
      </div>

      {/* SEO Article */}
      <article className="prose max-w-3xl mx-auto mt-12">
        <h2>Understanding Your Body Type for Optimal Fitness</h2>
        <p>First identified by Dr. William Sheldon in 1940s, body types...</p>

        <h3>Characteristics of Each Type</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4>Ectomorph</h4>
            <ul>
              <li>Lean and long</li>
              <li>Fast metabolism</li>
              <li>Hard to gain weight</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h4>Mesomorph</h4>
            <ul>
              <li>Muscular build</li>
              <li>Gains muscle easily</li>
              <li>Medium metabolism</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded">
            <h4>Endomorph</h4>
            <ul>
              <li>Rounder physique</li>
              <li>Slower metabolism</li>
              <li>Gains fat easily</li>
            </ul>
          </div>
        </div>

        <h3>Training Recommendations</h3>
        <ol>
          <li>Ectomorph: Focus on compound lifts</li>
          <li>Mesomorph: Balanced cardio/weights</li>
          <li>Endomorph: High-intensity interval training</li>
        </ol>
      </article>
    </div>
  );
}
