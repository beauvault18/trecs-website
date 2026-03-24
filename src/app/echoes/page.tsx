"use client";

import { useActionState, useRef, useEffect } from "react";
import CurveDivider from "@/components/CurveDivider";
import { sendEchoesInterest } from "./actions";

const focusAreas = [
  {
    title: "Personalized Socialization",
    description:
      "Combating isolation by creating meaningful one-on-one connections between generations, fostering genuine relationships that enrich daily life for seniors.",
  },
  {
    title: "Memory Therapy",
    description:
      "Structured storytelling sessions that stimulate cognitive recall, helping seniors revisit and share cherished memories in a supportive environment.",
  },
  {
    title: "Legacy Storytelling",
    description:
      "Each senior's life stories are captured and compiled into a professionally bound keepsake book — a lasting legacy for their family.",
  },
  {
    title: "Youth Empathy Development",
    description:
      "High school students develop deep empathy, communication skills, and respect for older adults through sustained, personal engagement.",
  },
];

const metrics = [
  { value: "15", label: "Years of Proven Success" },
  { value: "8", label: "Weekly In-Person Sessions" },
  { value: "12", label: "Week Total Program Duration" },
  { value: "$0", label: "Cost to Participating Facilities" },
];

const steps = [
  {
    number: "01",
    title: "Match & Prepare",
    description:
      "Two high school juniors are carefully paired with cognitively capable seniors in a skilled nursing facility. Students receive orientation and training on interview techniques and sensitivity.",
  },
  {
    number: "02",
    title: "Interview & Discover",
    description:
      "Over eight weekly in-person sessions, students conduct structured yet personal interviews, drawing out life stories, memories, and experiences that define each senior's unique journey.",
  },
  {
    number: "03",
    title: "Celebrate & Share",
    description:
      "Students write and compile the stories into a professionally bound keepsake book, presented to the senior and their family at a celebration event — a lasting legacy gift.",
  },
];

export default function EchoesPage() {
  const [state, formAction, isPending] = useActionState(sendEchoesInterest, {
    success: false,
    error: null,
  });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <div>
      {/* Hero - Dark Green */}
      <section className="bg-green-dark text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">
            Echoes Between Ages
          </h1>
          <p className="text-xl md:text-2xl text-white/85 leading-relaxed max-w-3xl mx-auto">
            A proven intergenerational program connecting high school students
            with seniors in skilled nursing facilities through storytelling,
            memory therapy, and meaningful human connection.
          </p>
        </div>
      </section>

      {/* Curve: Green to Beige */}
      <CurveDivider from="#023131" to="#d5cfc7" />

      {/* Program Overview - Beige */}
      <section className="bg-beige py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-serif text-green-accent mb-6">
            About the Program
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            For over 15 years, Echoes Between Ages has brought together high
            school juniors and cognitively capable seniors living in skilled
            nursing facilities. The program pairs two students with a senior
            resident for eight weekly in-person interview sessions, during which
            students draw out life stories, cherished memories, and personal
            experiences.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            At the end of the 12-week program, students write and compile these
            stories into a professionally bound keepsake book — a lasting legacy
            gift presented to the senior and their family. The result is a
            powerful experience that combats isolation, stimulates memory, and
            builds empathy across generations.
          </p>
        </div>
      </section>

      {/* Curve: Beige to White */}
      <CurveDivider from="#d5cfc7" to="#ffffff" flip />

      {/* Program Focus Areas - White */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-10">
            Program Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {focusAreas.map((area) => (
              <div key={area.title} className="bg-green-dark text-white p-8">
                <h3 className="text-2xl font-serif mb-3">{area.title}</h3>
                <p className="text-lg text-white/85 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curve: White to Green */}
      <CurveDivider from="#ffffff" to="#023131" />

      {/* Program at a Glance - Dark Green */}
      <section className="bg-green-dark text-white py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-12">
            Program at a Glance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-4xl md:text-5xl font-serif mb-2">
                  {metric.value}
                </div>
                <p className="text-lg text-white/85">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curve: Green to Beige */}
      <CurveDivider from="#023131" to="#d5cfc7" flip />

      {/* How It Works - Beige */}
      <section className="bg-beige py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-serif text-green-accent mb-10">
            How It Works
          </h2>
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 items-start">
                <span className="text-4xl font-serif text-green-dark/40 shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-2xl font-serif text-green-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curve: Beige to Cream */}
      <CurveDivider from="#d5cfc7" to="#f5f2ed" />

      {/* Participation Form - Cream */}
      <section className="bg-cream py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-6">
            Participate at No Cost
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-10">
            If you would like to participate in this program at no cost to your
            facility, please complete the form below and email a Letter of
            Support on your facility&apos;s stationery to{" "}
            <a
              href="mailto:johnwhitman@theTRECSinstitute.org"
              className="text-green-dark underline"
            >
              johnwhitman@theTRECSinstitute.org
            </a>{" "}
            before April 10th.
          </p>

          <div className="bg-white p-8 md:p-10">
            {state.success && (
              <div className="mb-5 p-4 bg-green-50 border border-green-200 text-green-800 text-base">
                Thank you! Your participation interest has been submitted
                successfully. We will be in touch soon.
              </div>
            )}

            {state.error && (
              <div className="mb-5 p-4 bg-red-50 border border-red-200 text-red-800 text-base">
                {state.error}
              </div>
            )}

            <form ref={formRef} action={formAction} className="space-y-5">
              <div>
                <label
                  htmlFor="facilityName"
                  className="block text-base text-gray-600 mb-1"
                >
                  Facility Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="facilityName"
                  name="facilityName"
                  required
                  className="w-full px-4 py-3 text-base border border-gray-300 bg-white focus:ring-2 focus:ring-green-dark focus:border-transparent outline-none transition"
                  placeholder="Facility name"
                />
              </div>
              <div>
                <label
                  htmlFor="contactName"
                  className="block text-base text-gray-600 mb-1"
                >
                  Contact Person Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  required
                  className="w-full px-4 py-3 text-base border border-gray-300 bg-white focus:ring-2 focus:ring-green-dark focus:border-transparent outline-none transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block text-base text-gray-600 mb-1"
                >
                  Title / Position <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="w-full px-4 py-3 text-base border border-gray-300 bg-white focus:ring-2 focus:ring-green-dark focus:border-transparent outline-none transition"
                  placeholder="Your title or position"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-base text-gray-600 mb-1"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 text-base border border-gray-300 bg-white focus:ring-2 focus:ring-green-dark focus:border-transparent outline-none transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-base text-gray-600 mb-1"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 text-base border border-gray-300 bg-white focus:ring-2 focus:ring-green-dark focus:border-transparent outline-none transition"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-base text-gray-600 mb-1"
                >
                  Facility Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  className="w-full px-4 py-3 text-base border border-gray-300 bg-white focus:ring-2 focus:ring-green-dark focus:border-transparent outline-none transition"
                  placeholder="Full facility address"
                />
              </div>
              <div>
                <label
                  htmlFor="seniorCount"
                  className="block text-base text-gray-600 mb-1"
                >
                  Number of Potential Senior Participants
                </label>
                <input
                  type="number"
                  id="seniorCount"
                  name="seniorCount"
                  min="1"
                  className="w-full px-4 py-3 text-base border border-gray-300 bg-white focus:ring-2 focus:ring-green-dark focus:border-transparent outline-none transition"
                  placeholder="Optional"
                />
              </div>
              <div>
                <label
                  htmlFor="comments"
                  className="block text-base text-gray-600 mb-1"
                >
                  Additional Comments / Questions
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={4}
                  className="w-full px-4 py-3 text-base border border-gray-300 bg-white focus:ring-2 focus:ring-green-dark focus:border-transparent outline-none transition resize-y min-h-[120px]"
                  placeholder="Any additional information or questions"
                />
              </div>
              <button
                type="submit"
                disabled={isPending}
                className="w-full px-6 py-4 bg-green-dark text-white text-base tracking-wide hover:bg-green-900 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isPending ? "Submitting..." : "Submit Participation Interest"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
