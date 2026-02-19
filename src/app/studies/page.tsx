import type { Metadata } from "next";
import CurveDivider from "@/components/CurveDivider";

export const metadata: Metadata = {
  title: "Health Care Impact Studies | The TRECS Institute",
  description:
    "Explore TRECS Institute research on telemedicine, social robots, senior independence technologies, and facility innovation.",
};

export default function StudiesPage() {
  return (
    <div>
      {/* Hero - Dark Green */}
      <section className="bg-green-dark text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">
            Health Care Impact Studies
          </h1>
          <p className="text-xl md:text-2xl text-white/85 leading-relaxed max-w-3xl mx-auto">
            TRECS primary goal is to identify new programs, services and
            technologies that can effectively address complex problems within our
            health care system that are negatively impacting seniors and adding
            unnecessary costs to our health care system.
          </p>
        </div>
      </section>

      {/* Curve: Green to Beige */}
      <CurveDivider from="#023131" to="#d5cfc7" />

      {/* Process & Current Areas - Beige Background */}
      <section className="bg-beige py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Process Box - Dark Green */}
            <div className="bg-green-dark text-white p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-serif mb-8">
                Our Process in Completing Health Care Impact Studies
              </h2>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-3xl font-serif shrink-0 text-white/70">
                    1.
                  </span>
                  <p className="text-lg leading-relaxed">
                    Identify specific programs, services, or technologies that
                    can help improve the quality of care for seniors and help
                    reduce costs for our health care system.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="text-3xl font-serif shrink-0 text-white/70">
                    2.
                  </span>
                  <p className="text-lg leading-relaxed">
                    Identify and secure pilot sites and funding sources to
                    implement the potential solution identified and evaluate the
                    impact through real time observational studies
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="text-3xl font-serif shrink-0 text-white/70">
                    3.
                  </span>
                  <p className="text-lg leading-relaxed">
                    Report on the findings of the study and if positive, offer
                    recommendations for expanding the availability of that
                    solution throughout the healthcare system.
                  </p>
                </li>
              </ol>
            </div>

            {/* Current Areas */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-green-accent mb-8">
                Current areas being evaluated:
              </h2>
              <ul className="space-y-6">
                <li className="flex gap-3 items-start">
                  <span className="text-green-accent text-xl mt-1 shrink-0">
                    &bull;
                  </span>
                  <p className="text-lg leading-relaxed">
                    <strong className="text-foreground">Social Robots</strong>:
                    Utilizing social robots to support both socially isolated
                    seniors living alone and residents in senior care
                    facilities, by promoting social interaction, reducing
                    loneliness, and enabling remote patient monitoring and
                    medication compliance.
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-green-accent text-xl mt-1 shrink-0">
                    &bull;
                  </span>
                  <p className="text-lg leading-relaxed">
                    <strong className="text-foreground">
                      New Technologies
                    </strong>
                    : Implementing tools that help seniors remain independent in
                    their homes while also complementing (not replacing) the work
                    of staff in personal care and skilled nursing facilities.
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-green-accent text-xl mt-1 shrink-0">
                    &bull;
                  </span>
                  <p className="text-lg leading-relaxed">
                    <strong className="text-foreground">
                      Echoes Between Ages
                    </strong>
                    : An eight-week intergenerational program pairing high
                    school students with seniors in skilled nursing facilities
                    for weekly, face-to-face interviews about their life
                    stories. The program fosters meaningful social connection
                    and memory engagement for seniors while giving students a
                    powerful perspective on the depth and value of lived
                    experience. At the end, students create written narratives
                    that are compiled into a hardcover book and gifted to each
                    participating senior as a lasting tribute to their legacy.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curve: Beige to White */}
      <CurveDivider from="#d5cfc7" to="#ffffff" flip />

      {/* Sponsored Focus Groups - White */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-6">
            Sponsored Focus Groups
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-10">
            The TRECS Institute has hosted a series of focus groups with support
            from the Leonard Davis Institute at the University of Pennsylvania.
            These focus groups invite national leaders representing all aspects
            of the topic being discussed with the goal of identifying realistic
            opportunities, to make improvements, and increase care for our
            nation&apos;s seniors.
          </p>

          <h3 className="text-2xl md:text-3xl font-serif text-green-accent text-center mb-8">
            Past Focus Groups have included:
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-green-dark text-white p-8">
              <p className="text-lg leading-relaxed">
                Improving Dental Care in our Nation&apos;s Skilled Nursing
                Facilities
              </p>
            </div>
            <div className="bg-green-dark text-white p-8">
              <p className="text-lg leading-relaxed">
                The Availability of Behavioral Health Services in Long Term Care
              </p>
            </div>
            <div className="bg-green-dark text-white p-8">
              <p className="text-lg leading-relaxed">
                Low Income Senior Housing in America
              </p>
            </div>
            <div className="bg-green-dark text-white p-8">
              <p className="text-lg leading-relaxed">
                The &ldquo;No Brainers&rdquo; in Long Term Care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Health Care Impact Studies - White (continues) */}
      <section className="bg-white py-16 md:py-22">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-4">
            Past Health Care Impact Studies
          </h2>

          {/* 2022 Telemedicine Study */}
          <p className="text-center text-xl italic text-gray-700 mb-10">
            Telemedicine in Long Term Care to Reduce Unnecessary and Avoidable
            SNF to Hospital Admissions (2022)
          </p>

          <div className="space-y-10 max-w-3xl mx-auto">
            {/* Initial Case Study */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-center mb-3">
                Initial Case Study
              </h3>
              <ul className="list-disc list-outside pl-6 space-y-2 text-lg text-gray-700">
                <li>
                  A study to evaluate if the use of telemedicine could help
                  reduce unnecessary and avoidable SNF to hospital transfers,
                  especially during evening and weekend hours. A total of 28
                  Florida SNFs implemented telemedicine services and the results
                  were track over 12 months.
                </li>
              </ul>
            </div>

            {/* Discoveries */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-center mb-3">
                Discoveries
              </h3>
              <ul className="list-disc list-outside pl-6 space-y-3 text-lg text-gray-700">
                <li>
                  A total of 646 seniors were identified as having avoided a
                  hospital readmission as a direct result of the telemedicine
                  intervention
                </li>
                <li className="ml-6">
                  Savings to CMS from these avoided hospitalizations was
                  estimated at Over $6.4 million dollars
                </li>
                <li className="ml-6">
                  For the participating facilities, an average of over $40,000 of
                  added revenue was achieved with several closer ot $100,000.
                </li>
              </ul>
            </div>

            {/* Recommendations */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-center mb-3">
                Recommendations
              </h3>
              <ul className="list-disc list-outside pl-6 space-y-3 text-lg text-gray-700">
                <li>
                  Telemedicine should be made available in skilled nursing
                  facilities across America
                </li>
                <li className="ml-6">
                  If telemedicine was available in all 15,000 SNFs across
                  America, it could prevent well over 300,000 unnecessary and
                  avoidable admissions a year generating a savings for CMS in
                  excess of $3billion dollars.
                </li>
              </ul>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center mt-10">
            <a
              href="/reports/telemedicine-final-report-florida-2022.pdf"
              download
              className="inline-block px-12 py-4 bg-foreground text-white text-base tracking-wide rounded-full hover:bg-gray-800 transition-colors"
            >
              Download the Full Report Here
            </a>
          </div>
        </div>
      </section>

      {/* Curve: White to Beige */}
      <CurveDivider from="#ffffff" to="#d5cfc7" flip />

      {/* Past Studies Conducted - Beige */}
      <section className="bg-beige py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-serif mb-10">
            Past Health Care Studies Conducted
          </h2>
          <ul className="list-disc list-outside pl-6 space-y-4 text-lg leading-relaxed">
            <li>
              Improving Dental and Oral Care Services for Nursing Facility
              Residents Funded by CMS (2006)
            </li>
            <li>
              Reducing CNA Turnover Utilizing Nurse Practitioners in SNFs Funded
              by CMS (2010)
            </li>
            <li>
              Amazing Stories to Be Told. A program designed to connect high
              school juniors with seniors in SNFs. Funded by TRECS (Started in
              2015 and continues annually)
            </li>
            <li>
              Advancing Quality of Care for Nursing Facility Residents through
              Telemedicine Funded by CMS in Florida with 28 participating SNFs
              (2022)
            </li>
            <li>
              Advancing Quality of Care for Nursing Facility Residents through
              Telemedicine Funded by CMS in North Carolina with 10 participating
              SNFs (2023)
            </li>
            <li>
              Improving Dental and Oral Care Services for Nursing Facility
              Residents &ndash; An update of the original study in 2006. Funded
              by Citizens Security Insurance Company
            </li>
          </ul>
        </div>
      </section>

      {/* Curve: Beige to White */}
      <CurveDivider from="#d5cfc7" to="#ffffff" />
    </div>
  );
}
