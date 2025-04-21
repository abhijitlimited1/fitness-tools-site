import { useState } from "react";
import { Helmet } from "react-helmet";
// import AdBanner from "../../components/AdBanner";

export default function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(1));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>BMI Calculator - FitnessTools</title>
        <meta
          name="description"
          content="Calculate your Body Mass Index (BMI) to assess weight status. Get instant results and health recommendations."
        />
      </Helmet>

      {/* <AdBanner /> */}

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">BMI Calculator</h1>

        <form onSubmit={calculateBMI} className="space-y-4">
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

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full cursor-pointer"
          >
            Calculate BMI
          </button>
        </form>

        {bmi && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold">Your BMI: {bmi}</h3>
            <p
              className={`mt-2 ${
                bmi < 18.5
                  ? "text-blue-600"
                  : bmi < 25
                  ? "text-green-600"
                  : bmi < 30
                  ? "text-orange-600"
                  : "text-red-600"
              }`}
            >
              {bmi < 18.5
                ? "Underweight"
                : bmi < 25
                ? "Normal Weight"
                : bmi < 30
                ? "Overweight"
                : "Obese"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
