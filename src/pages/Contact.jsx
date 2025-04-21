// pages/Contact.jsx
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>Contact Fitness Experts - FitnessTools</title>
        <meta
          name="description"
          content="Get personalized fitness guidance from certified experts. Contact us for tool suggestions, partnerships, or health queries."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Why Contact Us?</h1>

        <div className="prose mb-12">
          <h2 className="text-xl font-semibold">Professional Guidance</h2>
          <p>Our certified fitness experts can help you:</p>
          <ul>
            <li>Interpret calculator results</li>
            <li>Create personalized fitness plans</li>
            <li>Suggest optimal nutrition strategies</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">
            Partnership Opportunities
          </h2>
          <p>For fitness influencers, gyms, and health brands...</p>
        </div>

        <form
          action="https://formspree.io/f/mqapvrzd"
          method="POST"
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="_replyto"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              className="w-full p-2 border rounded"
              required
            ></textarea>
          </div>

          <input
            type="hidden"
            name="_subject"
            value="New Contact Form Submission"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
