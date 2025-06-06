import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function HowManyCalories() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>
          How Many Calories Should I Consume in a Day? | FitnessTools
        </title>
        <meta
          name="description"
          content="Learn how many calories you should consume in a day based on your age, gender, weight, height, and activity level. Free calorie calculator for weight loss, maintenance, and muscle gain."
        />
        <meta
          name="keywords"
          content="how many calories should i consume in a day, how many cal should i eat a day, how many calories should i intake a day, calorie calculator, calorie estimator, weight loss calculator"
        />
        <link
          rel="canonical"
          href="https://healthtoolkit.netlify.app/tools/how-many-calories"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How many calories should I consume in a day?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The number of calories you should consume daily depends on factors like age, gender, weight, height, and activity level. For weight maintenance, women typically need 1,600-2,400 calories and men need 2,000-3,000 calories daily. For weight loss, you need a calorie deficit, and for muscle gain, a calorie surplus."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I calculate my daily calorie needs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can calculate your daily calorie needs using our Calorie Calculator or TDEE Calculator. These tools use formulas that account for your BMR (Basal Metabolic Rate) and activity level to determine your maintenance calories."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How many calories should I eat to lose weight?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To lose weight, you should consume 500-1000 calories less than your maintenance level. This creates a deficit that leads to 1-2 pounds of weight loss per week, which is considered safe and sustainable."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">
        How Many Calories Should I Consume in a Day?
      </h1>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <p className="text-lg mb-4">
          Determining how many calories you should eat daily depends on several
          factors including your age, gender, weight, height, and activity
          level.
        </p>
        <div className="flex justify-center">
          <Link
            to="/tools/calorie"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Calculate Your Daily Calories Now
          </Link>
        </div>
      </div>

      <div className="prose max-w-none">
        <h2>Understanding Your Daily Calorie Needs</h2>
        <p>
          The number of calories you should consume each day varies based on
          whether you want to maintain, lose, or gain weight. Here's a general
          guideline:
        </p>

        <ul>
          <li>
            <strong>Weight Maintenance:</strong> Women typically need between
            1,600-2,400 calories, while men need about 2,000-3,000 calories
            daily.
          </li>
          <li>
            <strong>Weight Loss:</strong> Consume 500-1000 fewer calories than
            your maintenance level to lose 1-2 pounds per week.
          </li>
          <li>
            <strong>Weight Gain:</strong> Eat 300-500 calories above your
            maintenance level to gain weight in the form of muscle (when
            combined with strength training).
          </li>
        </ul>

        <h2>Factors That Affect Your Calorie Needs</h2>

        <h3>1. Basal Metabolic Rate (BMR)</h3>
        <p>
          Your BMR is the number of calories your body needs to perform basic
          functions at rest. It accounts for 60-70% of your total daily calorie
          expenditure. You can calculate your BMR using our{" "}
          <Link to="/tools/bmr" className="text-blue-600 hover:underline">
            BMR Calculator
          </Link>
          .
        </p>

        <h3>2. Physical Activity Level</h3>
        <p>
          The more active you are, the more calories you need. Activity levels
          are typically categorized as:
        </p>
        <ul>
          <li>
            <strong>Sedentary:</strong> Little to no exercise (BMR × 1.2)
          </li>
          <li>
            <strong>Lightly active:</strong> Light exercise 1-3 days/week (BMR ×
            1.375)
          </li>
          <li>
            <strong>Moderately active:</strong> Moderate exercise 3-5 days/week
            (BMR × 1.55)
          </li>
          <li>
            <strong>Very active:</strong> Hard exercise 6-7 days/week (BMR ×
            1.725)
          </li>
          <li>
            <strong>Extra active:</strong> Very hard exercise and physical job
            (BMR × 1.9)
          </li>
        </ul>

        <h3>3. Age</h3>
        <p>
          Calorie needs typically decrease as you age due to loss of muscle mass
          and slower metabolism.
        </p>

        <h3>4. Body Composition</h3>
        <p>
          Muscle tissue burns more calories than fat tissue. People with more
          muscle mass have higher calorie needs. Check your body composition
          with our{" "}
          <Link to="/tools/body-fat" className="text-blue-600 hover:underline">
            Body Fat Calculator
          </Link>
          .
        </p>

        <h2>How to Calculate Your Daily Calorie Intake</h2>
        <p>
          The most accurate way to determine how many calories you should
          consume daily is to use a calculator that accounts for all these
          factors. Our{" "}
          <Link to="/tools/calorie" className="text-blue-600 hover:underline">
            Calorie Calculator
          </Link>{" "}
          and{" "}
          <Link to="/tools/tdee" className="text-blue-600 hover:underline">
            TDEE Calculator
          </Link>{" "}
          provide personalized estimates based on your specific information.
        </p>

        <h2>Macronutrient Distribution</h2>
        <p>
          Once you know how many calories you should eat, it's important to
          consider the distribution of macronutrients (proteins, carbohydrates,
          and fats):
        </p>
        <ul>
          <li>
            <strong>Protein:</strong> 10-35% of daily calories (4 calories per
            gram)
          </li>
          <li>
            <strong>Carbohydrates:</strong> 45-65% of daily calories (4 calories
            per gram)
          </li>
          <li>
            <strong>Fats:</strong> 20-35% of daily calories (9 calories per
            gram)
          </li>
        </ul>
        <p>
          Use our{" "}
          <Link to="/tools/macros" className="text-blue-600 hover:underline">
            Macro Calculator
          </Link>{" "}
          to determine your optimal macronutrient distribution based on your
          goals.
        </p>

        <h2>Calorie Needs for Weight Loss</h2>
        <p>
          If you're wondering how many calories you should eat to lose weight,
          the general recommendation is to create a deficit of 500-1000 calories
          per day, which should result in 1-2 pounds of weight loss per week.
          This is considered a safe and sustainable rate of weight loss.
        </p>
        <p>
          However, it's important not to reduce your calorie intake too
          drastically. Women should generally not consume fewer than 1,200
          calories per day, and men should not go below 1,500 calories, unless
          under medical supervision.
        </p>

        <h2>Monitoring and Adjusting</h2>
        <p>
          Remember that calorie calculators provide estimates. You may need to
          adjust your intake based on how your body responds. If you're not
          seeing the desired results after a few weeks, consider recalculating
          your needs or consulting with a healthcare professional.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-4">
            Ready to find out exactly how many calories you should consume?
          </h3>
          <p className="mb-4">
            Use our free, science-based calculators to get personalized
            recommendations based on your unique characteristics and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/tools/calorie"
              className="bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-2 px-4 rounded transition-colors"
            >
              Calorie Calculator
            </Link>
            <Link
              to="/tools/tdee"
              className="bg-green-600 hover:bg-green-700 text-white text-center font-medium py-2 px-4 rounded transition-colors"
            >
              TDEE Calculator
            </Link>
            <Link
              to="/tools/macros"
              className="bg-purple-600 hover:bg-purple-700 text-white text-center font-medium py-2 px-4 rounded transition-colors"
            >
              Macro Calculator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
