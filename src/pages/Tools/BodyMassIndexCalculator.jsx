import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function BodyMassIndexCalculator() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>
          Body Mass Index Calculator - BMI Index Calculator | FitnessTools
        </title>
        <meta
          name="description"
          content="Calculate your Body Mass Index (BMI) with our free, accurate BMI index calculator. Learn what your BMI means for your health and get personalized recommendations."
        />
        <meta
          name="keywords"
          content="bmi calculator, bmi index calculator, body index calculator, body bmi calculator, body weight index calculator, body mass index calculator"
        />
        <link
          rel="canonical"
          href="https://healthtoolkit.netlify.app/tools/body-mass-index"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Body Mass Index (BMI)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Body Mass Index (BMI) is a numerical value calculated from a person's weight and height. It provides a simple measure to categorize individuals as underweight, normal weight, overweight, or obese based on tissue mass (muscle, fat, and bone)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is BMI calculated?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BMI is calculated by dividing a person's weight in kilograms by the square of their height in meters: BMI = weight(kg) / height²(m²). In the imperial system, the formula is: BMI = 703 × weight(lb) / height²(in²)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the BMI categories?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BMI categories for adults are: Underweight (BMI < 18.5), Normal weight (BMI 18.5-24.9), Overweight (BMI 25-29.9), and Obese (BMI ≥ 30). These categories may vary slightly for different populations."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">
        Body Mass Index (BMI) Calculator
      </h1>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <p className="text-lg mb-4">
          Calculate your Body Mass Index (BMI) to assess if your weight is in a
          healthy range for your height.
        </p>
        <div className="flex justify-center">
          <Link
            to="/tools/bmi"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Use Our BMI Calculator Now
          </Link>
        </div>
      </div>

      <div className="prose max-w-none">
        <h2>What is Body Mass Index (BMI)?</h2>
        <p>
          Body Mass Index, or BMI, is a numerical value calculated from a
          person's weight and height. It was developed in the 1830s by Belgian
          mathematician Adolphe Quetelet as a simple way to assess body weight
          relative to height. Today, it's widely used as a screening tool to
          categorize individuals as underweight, normal weight, overweight, or
          obese.
        </p>

        <h2>How to Calculate BMI</h2>
        <p>The BMI formula is:</p>
        <div className="bg-gray-50 p-4 rounded-lg my-4">
          <p className="font-bold">BMI = weight(kg) / height²(m²)</p>
          <p>Or in imperial units:</p>
          <p className="font-bold">BMI = 703 × weight(lb) / height²(in²)</p>
        </div>
        <p>
          For example, if you weigh 70 kg and are 1.75 meters tall:
          <br />
          BMI = 70 / (1.75 × 1.75) = 70 / 3.0625 = 22.9
        </p>

        <h2>BMI Categories for Adults</h2>
        <table className="min-w-full bg-white border border-gray-300 my-6">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">BMI Range</th>
              <th className="py-2 px-4 border-b">Weight Category</th>
              <th className="py-2 px-4 border-b">Health Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Below 18.5</td>
              <td className="py-2 px-4 border-b">Underweight</td>
              <td className="py-2 px-4 border-b">
                Increased risk for nutritional deficiencies and osteoporosis
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">18.5 - 24.9</td>
              <td className="py-2 px-4 border-b">Normal weight</td>
              <td className="py-2 px-4 border-b">
                Lowest risk for health problems
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">25.0 - 29.9</td>
              <td className="py-2 px-4 border-b">Overweight</td>
              <td className="py-2 px-4 border-b">
                Increased risk for heart disease, diabetes, and high blood
                pressure
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">30.0 - 34.9</td>
              <td className="py-2 px-4 border-b">Obesity (Class 1)</td>
              <td className="py-2 px-4 border-b">
                High risk for health problems
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">35.0 - 39.9</td>
              <td className="py-2 px-4 border-b">Obesity (Class 2)</td>
              <td className="py-2 px-4 border-b">
                Very high risk for health problems
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">40.0 and above</td>
              <td className="py-2 px-4 border-b">Obesity (Class 3)</td>
              <td className="py-2 px-4 border-b">
                Extremely high risk for health problems
              </td>
            </tr>
          </tbody>
        </table>

        <h2>Limitations of BMI</h2>
        <p>While BMI is a useful screening tool, it has several limitations:</p>
        <ul>
          <li>It doesn't distinguish between fat, muscle, and bone mass</li>
          <li>It doesn't account for body fat distribution</li>
          <li>
            It may not be accurate for athletes, elderly individuals, or
            pregnant women
          </li>
          <li>
            Different ethnic groups may have different BMI thresholds for health
            risks
          </li>
        </ul>
        <p>
          For a more comprehensive assessment of your body composition, consider
          using our{" "}
          <Link to="/tools/body-fat" className="text-blue-600 hover:underline">
            Body Fat Calculator
          </Link>{" "}
          alongside the BMI calculator.
        </p>

        <h2>Why BMI Matters</h2>
        <p>Despite its limitations, BMI remains a valuable tool for:</p>
        <ul>
          <li>
            Screening for weight categories that may lead to health problems
          </li>
          <li>Tracking weight changes over time</li>
          <li>Comparing your weight status to the general population</li>
          <li>Assessing the need for further health assessments</li>
        </ul>

        <h2>Beyond BMI: A Comprehensive Approach to Health</h2>
        <p>
          For a more complete picture of your health, consider using BMI
          alongside other measurements:
        </p>
        <ul>
          <li>
            Waist circumference (abdominal fat is a better predictor of health
            risks)
          </li>
          <li>Body fat percentage</li>
          <li>Blood pressure, cholesterol, and blood sugar levels</li>
          <li>Physical fitness assessments</li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-4">
            Ready to calculate your BMI?
          </h3>
          <p className="mb-4">
            Use our free, science-based BMI calculator to get instant results
            and personalized health insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/tools/bmi"
              className="bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-2 px-4 rounded transition-colors"
            >
              BMI Calculator
            </Link>
            <Link
              to="/tools/body-fat"
              className="bg-green-600 hover:bg-green-700 text-white text-center font-medium py-2 px-4 rounded transition-colors"
            >
              Body Fat Calculator
            </Link>
            <Link
              to="/tools/ideal-weight"
              className="bg-purple-600 hover:bg-purple-700 text-white text-center font-medium py-2 px-4 rounded transition-colors"
            >
              Ideal Weight Calculator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
