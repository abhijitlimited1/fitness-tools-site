import { Helmet } from "react-helmet";
// import AdBanner from "../components/AdBanner";
import ToolCard from "../components/ToolCard";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>FitnessTools - Your Complete Fitness Solution</title>
        <meta
          name="description"
          content="Free fitness calculators and tools for all your health needs. BMI calculator, calorie calculator, body fat calculator, and more."
        />
      </Helmet>

      {/* <AdBanner /> */}

      <section className="my-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          Your Complete Fitness Toolkit
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ToolCard
            title="BMI Calculator"
            description="Calculate your Body Mass Index"
            link="/tools/bmi"
          />
          <ToolCard
            title="Calorie Calculator"
            description="Calculate your daily calorie needs"
            link="/tools/calorie"
          />
          <ToolCard
            title="Body Fat Calculator"
            description="Estimate your body fat percentage"
            link="/tools/body-fat"
          />
        </div>
      </section>
    </div>
  );
}
