// Update App.jsx
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BmiCalculator from "./pages/Tools/BmiCalculator";
import CalorieCalculator from "./pages/Tools/CalorieCalculator";
import BodyFatCalculator from "./pages/Tools/BodyFatCalculator";
import BmrCalculator from "./pages/Tools/BmrCalculator";
import IdealWeightCalculator from "./pages/Tools/IdealWeightCalculator";
import Terms from "./pages/Terms";
import MacroCalculator from "./pages/Tools/MacroCalculator";
import WaterIntakeCalculator from "./pages/Tools/WaterIntakeCalculator";
import TdeeCalculator from "./pages/Tools/TdeeCalculator";
import BodyTypeCalculator from "./pages/Tools/BodyTypeCalculator";
import OneRepMaxCalculator from "./pages/Tools/OneRepMaxCalculator";
import ProteinCalculator from "./pages/Tools/ProteinCalculator";
import WhrCalculator from "./pages/Tools/WhrCalculator";
import BodyFrameCalculator from "./pages/Tools/BodyFrameCalculator";
import PregnancyCalorieCalculator from "./pages/Tools/PregnancyCalorieCalculator";
import HeartRateCalculator from "./pages/Tools/HeartRateCalculator";
import FitnessAgeCalculator from "./pages/Tools/FitnessAgeCalculator";
import BodyShapeCalculator from "./pages/Tools/BodyShapeCalculator";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/bmi" element={<BmiCalculator />} />
          <Route path="/tools/calorie" element={<CalorieCalculator />} />
          <Route path="/tools/body-fat" element={<BodyFatCalculator />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          // Add new routes
          <Route path="/terms" element={<Terms />} />
          <Route path="/tools/bmr" element={<BmrCalculator />} />
          <Route
            path="/tools/ideal-weight"
            element={<IdealWeightCalculator />}
          />
          <Route path="/tools/macros" element={<MacroCalculator />} />
          <Route path="/tools/water" element={<WaterIntakeCalculator />} />
          <Route path="/tools/tdee" element={<TdeeCalculator />} />
          <Route path="/tools/body-type" element={<BodyTypeCalculator />} />
          <Route path="/tools/one-rep-max" element={<OneRepMaxCalculator />} />
          <Route path="/tools/protein" element={<ProteinCalculator />} />
          <Route path="/tools/whr" element={<WhrCalculator />} />
          <Route path="/tools/body-frame" element={<BodyFrameCalculator />} />
          <Route
            path="/tools/pregnancy-calories"
            element={<PregnancyCalorieCalculator />}
          />
          <Route path="/tools/heart-rate" element={<HeartRateCalculator />} />
          <Route path="/tools/fitness-age" element={<FitnessAgeCalculator />} />
          <Route path="/tools/body-shape" element={<BodyShapeCalculator />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
