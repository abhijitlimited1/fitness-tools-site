import { Helmet } from "react-helmet";
import ToolCard from "../components/ToolCard";
// import AdBanner from "../components/AdBanner";

export default function Tools() {
  const toolsList = [
    {
      title: "BMI Calculator",
      description: "Body Mass Index calculation",
      link: "/tools/bmi",
    },
    {
      title: "BMR Calculator",
      description: "Basal metabolic rate",
      link: "/tools/bmr",
    },
    {
      title: "Calorie Calculator",
      description: "Daily calorie needs",
      link: "/tools/calorie",
    },
    {
      title: "Body Fat Calculator",
      description: "Body fat percentage",
      link: "/tools/body-fat",
    },
    {
      title: "Water Intake Calculator", // New
      description: "Daily hydration needs",
      link: "/tools/water",
    },
    {
      title: "TDEE Calculator", // New
      description: "Total daily energy expenditure",
      link: "/tools/tdee",
    },
    {
      title: "Body Type Calculator", // New
      description: "Ectomorph/Mesomorph/Endomorph",
      link: "/tools/body-type",
    },
    {
      title: "One-Rep Max Calculator", // New
      description: "Weightlifting strength estimation",
      link: "/tools/one-rep-max",
    },
    // Add more tools here as you create them
    {
      title: "Protein Calculator",
      description: "Daily protein requirements",
      link: "/tools/protein",
    },
    {
      title: "Waist-to-Hip Ratio",
      description: "Health risk assessment",
      link: "/tools/whr",
    },
    {
      title: "Body Frame Calculator",
      description: "Bone structure analysis",
      link: "/tools/body-frame",
    },
    {
      title: "Pregnancy Calories",
      description: "Pregnancy nutrition needs",
      link: "/tools/pregnancy-calories",
    },
    {
      title: "Heart Rate Zones",
      description: "Exercise intensity calculator",
      link: "/tools/heart-rate",
    },
    {
      title: "Fitness Age Calculator",
      description: "Biological age assessment",
      link: "/tools/fitness-age",
    },
    {
      title: "Body Shape Calculator",
      description: "Apple, Pear, Hourglass",
      link: "/tools/body-shape",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>All Fitness Calculators - FitnessTools</title>
        <meta
          name="description"
          content="Comprehensive collection of professional fitness calculators and health assessment tools. BMI, TDEE, body fat, macros, and more."
        />
      </Helmet>

      {/* <AdBanner /> */}

      <h1 className="text-3xl font-bold mb-8">All Fitness Calculators</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {toolsList.map((tool, index) => (
          <ToolCard
            key={index}
            title={tool.title}
            description={tool.description}
            link={tool.link}
          />
        ))}
      </div>
    </div>
  );
}
