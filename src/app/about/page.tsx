import type { Metadata } from "next";
import CurveDivider from "@/components/CurveDivider";

export const metadata: Metadata = {
  title: "Our Mission | The TRECS Institute",
  description:
    "Learn about The TRECS Institute's mission to improve senior care through innovative research and technology evaluation.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero - Dark Green */}
      <section className="bg-green-dark text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Our Mission</h1>
          <p className="text-xl md:text-2xl text-white/85 leading-relaxed max-w-3xl mx-auto">
            Dedicated to improving care for our nation&apos;s seniors through
            research, innovation, and advocacy.
          </p>
        </div>
      </section>

      {/* Curve: Green to Beige */}
      <CurveDivider from="#023131" to="#d5cfc7" />

      {/* Who We Are - Beige */}
      <section className="bg-beige py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-serif text-green-accent mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            The TRECS Institute is a nonprofit, 501(c)(3) organization
            established in 2004. We are dedicated to identifying and evaluating
            new programs, services, and technologies that can effectively address
            complex problems within our health care system.
          </p>
        </div>
      </section>

      {/* Curve: Beige to White */}
      <CurveDivider from="#d5cfc7" to="#ffffff" flip />

      {/* What We Do - White */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">What We Do</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-10">
            Through rigorous operational research, we evaluate innovations that
            could enhance senior care while reducing costs. Our work spans
            telemedicine, social robotics, facility design, and technology
            solutions for aging in place.
          </p>

          <h2 className="text-3xl md:text-4xl font-serif text-green-accent mb-8">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-dark text-white p-8">
              <h3 className="text-2xl font-serif mb-3">Research</h3>
              <p className="text-lg text-white/85 leading-relaxed">
                We conduct comprehensive studies across skilled nursing
                facilities and senior care settings to identify what works.
              </p>
            </div>
            <div className="bg-green-dark text-white p-8">
              <h3 className="text-2xl font-serif mb-3">Evaluate</h3>
              <p className="text-lg text-white/85 leading-relaxed">
                We rigorously test new technologies and programs to measure their
                impact on care quality and cost.
              </p>
            </div>
            <div className="bg-green-dark text-white p-8">
              <h3 className="text-2xl font-serif mb-3">Convene</h3>
              <p className="text-lg text-white/85 leading-relaxed">
                We bring together national experts through our Senior Care
                Leadership Summits to develop actionable recommendations.
              </p>
            </div>
            <div className="bg-green-dark text-white p-8">
              <h3 className="text-2xl font-serif mb-3">Advocate</h3>
              <p className="text-lg text-white/85 leading-relaxed">
                We share our findings with policymakers and industry leaders to
                drive systemic improvements in senior care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
