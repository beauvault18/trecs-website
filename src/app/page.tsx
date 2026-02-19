import Link from "next/link";
import CurveDivider from "@/components/CurveDivider";

export default function Home() {
  return (
    <div>
      {/* Hero - Dark Green */}
      <section className="bg-green-dark text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            The TRECS Institute
          </h1>
          <p className="text-xl md:text-2xl text-white/85 leading-relaxed max-w-3xl mx-auto">
            A nonprofit, 501(c)(3) organization established in 2004 and
            dedicated to improving care for our nation&apos;s seniors while
            saving money for our health care system.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/studies"
              className="inline-block px-10 py-4 bg-white text-green-dark font-semibold text-base tracking-wide rounded-full hover:bg-gray-100 transition-colors"
            >
              View Our Research
            </Link>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 border-2 border-white text-white font-semibold text-base tracking-wide rounded-full hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Curve: Green to Beige */}
      <CurveDivider from="#023131" to="#d5cfc7" />

      {/* Mission Statement - Beige */}
      <section className="bg-beige py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-green-accent mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            TRECS&apos; primary goal is to identify new programs, services and
            technologies that can effectively address complex problems within our
            health care system that are negatively impacting seniors and adding
            unnecessary costs to our health care system.
          </p>
        </div>
      </section>

      {/* Curve: Beige to White */}
      <CurveDivider from="#d5cfc7" to="#ffffff" flip />

      {/* Current Research Areas - White */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-5xl font-serif text-center mb-12">
            Current Research Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center px-4">
              <div className="w-20 h-20 bg-green-dark rounded-full flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-serif mb-3">Social Robots</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Utilizing social robots to support isolated seniors, promoting
                social interaction, reducing loneliness, and enabling remote
                patient monitoring.
              </p>
            </div>

            <div className="text-center px-4">
              <div className="w-20 h-20 bg-green-dark rounded-full flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-serif mb-3">New Technologies</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tools that help seniors remain independent at home while
                complementing the work of staff in care facilities.
              </p>
            </div>

            <div className="text-center px-4">
              <div className="w-20 h-20 bg-green-dark rounded-full flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-serif mb-3">
                Facility Model Innovation
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Redesigning senior care facilities to improve accessibility,
                enhance quality of care, and reduce costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats - Dark Green */}
      <section className="bg-green-dark text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-10">
            Proven Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-6xl font-serif text-white/90">646</p>
              <p className="mt-2 text-lg text-white/70">
                Seniors avoided hospital readmission
              </p>
            </div>
            <div>
              <p className="text-6xl font-serif text-white/90">$6.4M+</p>
              <p className="mt-2 text-lg text-white/70">
                Estimated CMS savings
              </p>
            </div>
            <div>
              <p className="text-6xl font-serif text-white/90">28</p>
              <p className="mt-2 text-lg text-white/70">
                Florida skilled nursing facilities
              </p>
            </div>
          </div>
          <p className="mt-10 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Our 2022 telemedicine study demonstrated that nationwide
            implementation across 15,000 facilities could prevent over 300,000
            unnecessary admissions annually, generating CMS savings surpassing $3
            billion.
          </p>
          <Link
            href="/studies"
            className="inline-block mt-8 px-10 py-4 bg-white text-green-dark font-semibold text-base tracking-wide rounded-full hover:bg-gray-100 transition-colors"
          >
            Read the Full Study
          </Link>
        </div>
      </section>

      {/* Curve: Green to White */}
      <CurveDivider from="#023131" to="#ffffff" flip />
    </div>
  );
}
