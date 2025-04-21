import { useState } from "react";
import { Helmet } from "react-helmet";
// import AdBanner from "../../components/AdBanner";

export default function BodyFrameCalculator() {
  const [wrist, setWrist] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");
  const [frame, setFrame] = useState(null);

  const calculateFrame = (e) => {
    e.preventDefault();
    if (wrist && height) {
      const ratio = wrist / (height / 100);
      let frameSize = "";

      if (gender === "male") {
        frameSize = ratio < 9.6 ? "Small" : ratio < 10.4 ? "Medium" : "Large";
      } else {
        frameSize = ratio < 9.9 ? "Small" : ratio < 10.9 ? "Medium" : "Large";
      }

      setFrame(frameSize);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>Body Frame Size Calculator - Bone Structure Analysis</title>
        <meta
          name="description"
          content="Determine your body frame size (small, medium, large) using wrist circumference and height. Important for ideal weight calculations."
        />
      </Helmet>

      {/* <AdBanner /> */}

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Frame Size Calculator</h1>

        <form onSubmit={calculateFrame} className="space-y-4">
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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Wrist (cm)</label>
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

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full cursor-pointer"
          >
            Calculate
          </button>
        </form>

        {frame && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold">Body Frame Size</h3>
            <p className="text-3xl mt-2">{frame}</p>
            <div className="mt-4 text-sm text-gray-600">
              <p>Based on {gender === "male" ? "male" : "female"} formula</p>
            </div>
          </div>
        )}
      </div>

      {/* SEO Article */}
      <article className="prose max-w-3xl mx-auto mt-12">
        <h2>Why Frame Size Matters in Health Assessments</h2>
        <p>Your bone structure affects ideal weight calculations and...</p>

        <h3>Frame Size Characteristics</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4>Small Frame</h4>
            <ul>
              <li>Delicate joints</li>
              <li>Narrow shoulders</li>
              <li>Fast metabolism</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h4>Medium Frame</h4>
            <ul>
              <li>Proportional build</li>
              <li>Average joints</li>
              <li>Versatile training</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded">
            <h4>Large Frame</h4>
            <ul>
              <li>Sturdy bones</li>
              <li>Broad shoulders</li>
              <li>Higher muscle potential</li>
            </ul>
          </div>
        </div>

        <h3>Training Recommendations</h3>
        <ul>
          <li>Small frames: Focus on endurance</li>
          <li>Large frames: Leverage strength potential</li>
          <li>All frames: Adjust calorie needs accordingly</li>
        </ul>
      </article>
    </div>
  );
}
