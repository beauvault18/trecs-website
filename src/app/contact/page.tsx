import type { Metadata } from "next";
import CurveDivider from "@/components/CurveDivider";

export const metadata: Metadata = {
  title: "Contact | The TRECS Institute",
  description:
    "Get in touch with The TRECS Institute. Contact us about our senior care research and health care impact studies.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero - Dark Green */}
      <section className="bg-green-dark text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Contact</h1>
          <p className="text-xl md:text-2xl text-white/85 leading-relaxed max-w-3xl mx-auto">
            We&apos;d love to hear from you. Reach out to learn more about our
            research and initiatives.
          </p>
        </div>
      </section>

      {/* Curve: Green to Beige */}
      <CurveDivider from="#2d4a2d" to="#d5cfc7" />

      {/* Contact Info - Beige */}
      <section className="bg-beige py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-serif text-green-accent mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif mb-1">Email</h3>
                  <a
                    href="mailto:Johnwhitman@thetrecsinstitue.com"
                    className="text-lg text-gray-700 hover:text-green-dark transition-colors"
                  >
                    Johnwhitman@thetrecsinstitue.com
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-1">Phone</h3>
                  <a
                    href="tel:4845576980"
                    className="text-lg text-gray-700 hover:text-green-dark transition-colors"
                  >
                    (484) 557-6980
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-1">Address</h3>
                  <p className="text-lg text-gray-700">
                    163 Marienstein Rd
                    <br />
                    New York, NY 18972
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10">
              <h2 className="text-2xl font-serif mb-6">Send a Message</h2>
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-base text-gray-600 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 text-base border border-gray-300 bg-white focus:ring-2 focus:ring-green-dark focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-base text-gray-600 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 text-base border border-gray-300 bg-white focus:ring-2 focus:ring-green-dark focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-base text-gray-600 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 text-base border border-gray-300 bg-white focus:ring-2 focus:ring-green-dark focus:border-transparent outline-none transition resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-green-dark text-white text-base tracking-wide hover:bg-green-900 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Curve: Beige to White */}
      <CurveDivider from="#d5cfc7" to="#ffffff" />
    </div>
  );
}
