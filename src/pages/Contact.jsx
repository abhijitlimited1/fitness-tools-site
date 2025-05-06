// pages/Contact.jsx
import { Helmet } from "react-helmet";
import { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null },
    });

    const form = e.target;
    try {
      await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      setFormStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg: "Thank you for your message! We'll get back to you soon.",
        },
      });
      form.reset();
    } catch (error) {
      setFormStatus({
        submitted: false,
        submitting: false,
        info: {
          error: true,
          msg: "Something went wrong. Please try again later.",
        },
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Helmet>
        <title>Contact Fitness Experts - FitnessTools</title>
        <meta
          name="description"
          content="Get personalized fitness guidance from certified experts. Contact us for tool suggestions, partnerships, or health queries."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions about your fitness journey? Need personalized advice?
          Our team of certified fitness experts is here to help you achieve your
          health goals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Column - Why Contact Us */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-3 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Why Contact Us?
          </h2>

          <div className="space-y-8">
            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Expert Guidance
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Our certified fitness professionals can help you interpret
                  calculator results, create personalized fitness plans, and
                  suggest optimal nutrition strategies tailored to your unique
                  needs.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Tool Suggestions
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Have ideas for new calculators or improvements to existing
                  ones? We value your feedback and continuously enhance our
                  tools based on user suggestions to better serve your fitness
                  needs.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Partnership Opportunities
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  For fitness influencers, gyms, health brands, and wellness
                  professionals looking to collaborate, we offer various
                  partnership opportunities to reach our engaged audience of
                  health-conscious individuals.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Report Issues
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Found a bug or technical issue with our calculators? Let us
                  know so we can fix it promptly. We're committed to providing
                  accurate, reliable tools for your fitness journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send Us a Message
            </h2>

            {formStatus.info.error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
                <p className="font-medium">Error</p>
                <p>{formStatus.info.msg}</p>
              </div>
            )}

            {formStatus.submitted && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded">
                <p className="font-medium">Success!</p>
                <p>{formStatus.info.msg}</p>
              </div>
            )}

            <form
              action="https://formspree.io/f/mqapvrzd"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="_replyto"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="Fitness Advice">Fitness Advice</option>
                  <option value="Tool Suggestion">Tool Suggestion</option>
                  <option value="Partnership">Partnership Opportunity</option>
                  <option value="Technical Issue">Technical Issue</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="How can we help you?"
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
                disabled={formStatus.submitting}
                className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-colors ${
                  formStatus.submitting
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {formStatus.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Other Ways to Reach Us
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 mt-1 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-600">support@fitnesstools.com</span>
              </div>

              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 mt-1 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-600">
                  Response Time: Within 24-48 hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              How quickly will I receive a response?
            </h3>
            <p className="text-gray-600">
              We aim to respond to all inquiries within 24-48 hours during
              business days. For urgent matters, please indicate this in your
              subject line.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Do you offer personalized fitness plans?
            </h3>
            <p className="text-gray-600">
              Yes, our certified fitness experts can create customized fitness
              and nutrition plans based on your goals, current fitness level,
              and preferences. Contact us for more details about this service.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Can I suggest a new calculator tool?
            </h3>
            <p className="text-gray-600">
              Absolutely! We welcome suggestions for new calculator tools.
              Please provide as much detail as possible about the calculator
              you'd like to see, and our development team will evaluate the
              feasibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
