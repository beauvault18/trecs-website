import type { Metadata } from "next";
import CurveDivider from "@/components/CurveDivider";

export const metadata: Metadata = {
  title: "Senior Care Leadership Summits | The TRECS Institute",
  description:
    "Learn about TRECS Institute's one-day leadership summits addressing key senior care issues, convened at the University of Pennsylvania.",
};

export default function SummitsPage() {
  const summits = [
    {
      title: "The Future of Long-Term-Care in America",
      year: 2014,
      fundedBy: "TRECS and LDI",
    },
    {
      title: "The Need for Low Income Senior Housing in America",
      year: 2016,
      fundedBy: "TRECS and LDI",
    },
    {
      title: "The Need for Improved Gero Psych Services in Long Term Care",
      year: 2018,
      fundedBy: "TRECS and LDI",
    },
    {
      title: 'Identifying the "No Brainers" in Long Term Care',
      year: 2020,
      fundedBy: "TRECS and LDI",
    },
  ];

  return (
    <div>
      {/* Hero - Dark Green */}
      <section className="bg-green-dark text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">
            Senior Care Leadership Summits
          </h1>
          <p className="text-xl md:text-2xl text-white/85 leading-relaxed max-w-3xl mx-auto">
            One-day leadership summits addressing key senior care issues in
            America, bringing together national experts to develop actionable
            recommendations.
          </p>
        </div>
      </section>

      {/* Curve: Green to Beige */}
      <CurveDivider from="#023131" to="#d5cfc7" />

      {/* About Summits - Beige */}
      <section className="bg-beige py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="bg-green-dark text-white p-8 md:p-10">
            <h2 className="text-3xl font-serif mb-5">About Our Summits</h2>
            <p className="text-xl text-white/85 leading-relaxed">
              These events were convened at the Leonard Davis Institute (LDI) at
              the University of Pennsylvania and received partial funding from
              both organizations. The summits brought together national experts
              to examine critical issues and develop actionable recommendations
              for improving senior care in America.
            </p>
          </div>
        </div>
      </section>

      {/* Curve: Beige to White */}
      <CurveDivider from="#d5cfc7" to="#ffffff" flip />

      {/* Past Summits - White */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-5xl font-serif text-center mb-12">
            Past Summits
          </h2>
          <div className="space-y-6">
            {summits.map((summit) => (
              <div
                key={summit.year}
                className="flex gap-6 items-center border-b border-gray-200 pb-6 last:border-0"
              >
                <div className="shrink-0 w-20 h-20 bg-green-dark rounded-full flex items-center justify-center">
                  <span className="text-white font-serif text-xl">
                    {summit.year}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif mb-1">
                    {summit.title}
                  </h3>
                  <p className="text-lg text-gray-500">
                    Funded by {summit.fundedBy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
