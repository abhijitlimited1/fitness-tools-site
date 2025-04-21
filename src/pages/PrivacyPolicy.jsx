import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 prose">
      <Helmet>
        <title>Privacy Policy - FitnessTools</title>
        <meta name="description" content="Our data handling practices" />
      </Helmet>

      <h1>Privacy Policy</h1>
      <p>Effective: {new Date().getFullYear()}</p>

      <h2>1. Data Collection</h2>
      <p>We do not collect, store, or process any personal data from users.</p>

      <h2>2. Calculator Usage</h2>
      <p>
        All calculations are performed locally in your browser. No input data
        leaves your device.
      </p>

      <h2>3. Cookies</h2>
      <p>We do not use any tracking cookies or persistent identifiers.</p>

      <h2>4. Server Logs</h2>
      <p>
        Our hosting provider may collect standard server logs (IP address,
        timestamps) for security purposes. These are automatically deleted after
        30 days.
      </p>

      <h2>5. Contact</h2>
      <p>
        For privacy questions:{" "}
        <Link to="/contact" className="underline decoration-1">
          Contact Us
        </Link>
      </p>
    </div>
  );
}
