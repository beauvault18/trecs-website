import type { Metadata } from "next";
import CurveDivider from "@/components/CurveDivider";
import ContactForm from "@/components/ContactForm";

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
            You can contact The TRECS Institute by mailing, emailing or
            calling:
          </p>
        </div>
      </section>

      {/* Curve: Green to Beige */}
      <CurveDivider from="#023131" to="#d5cfc7" />

      {/* Contact Info - Beige */}
      <section className="bg-beige py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-serif text-green-accent mb-8">
                Get in Touch
              </h2>
              <div className="space-y-2 text-lg text-gray-700">
                <p className="text-xl font-serif font-bold text-foreground">
                  John Whitman
                </p>
                <p>Executive Director</p>
                <p>The TRECS Institute</p>
                <p>163 Marienstein Road</p>
                <p>Upper Black Eddy, PA 18972</p>
                <p className="mt-4">
                  <a
                    href="mailto:JohnWhitman@theTRECSinstitute.org"
                    className="hover:text-green-dark transition-colors"
                  >
                    JohnWhitman@theTRECSinstitute.org
                  </a>
                </p>
                <p>
                  <a
                    href="tel:4845576980"
                    className="hover:text-green-dark transition-colors"
                  >
                    484-557-6980
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Curve: Beige to White */}
      <CurveDivider from="#d5cfc7" to="#ffffff" />
    </div>
  );
}
