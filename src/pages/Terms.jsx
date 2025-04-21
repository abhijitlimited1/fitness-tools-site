import { Helmet } from "react-helmet";

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 prose">
      <Helmet>
        <title>Terms of Service - FitnessTools</title>
        <meta name="description" content="Rules for using our calculators" />
      </Helmet>

      <h1>Terms of Service</h1>
      <p>Effective: {new Date().getFullYear()}</p>

      <h2>1. Acceptance</h2>
      <p>By using this website, you agree to these terms.</p>

      <h2>2. Medical Disclaimer</h2>
      <p>
        Our calculators provide general fitness information, not medical advice.
        Consult healthcare professionals before making health decisions.
      </p>

      <h2>3. Calculator Accuracy</h2>
      <p>
        Results are estimates only. We make no guarantees about accuracy or
        suitability for your needs.
      </p>

      <h2>4. Permitted Use</h2>
      <p>You may:</p>
      <ul>
        <li>Use calculators for personal purposes</li>
        <li>Reference results with proper attribution</li>
      </ul>

      <h2>5. Prohibited Use</h2>
      <p>You may not:</p>
      <ul>
        <li>Reverse engineer our tools</li>
        <li>Use calculators for commercial purposes without permission</li>
      </ul>

      <h2>6. Changes</h2>
      <p>
        We may update these terms at any time. Continued use constitutes
        acceptance.
      </p>
    </div>
  );
}
