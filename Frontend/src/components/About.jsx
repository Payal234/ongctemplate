import React from "react";
import Hand from "../assets/hand.jpg";
import Hand1 from "../assets/hand1.png";


const About = () => {
  return (
    <section id="about" className="py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* LEFT COLUMN */}
        <div className="space-y-8">
          <a href="#" className="text-sm text-sky-600 underline">
            ABOUT OUR UNION
          </a>

          <h2 className="text-2xl md:text-2xl lg:text-4xl font-extrabold mt-6 text-slate-700 leading-tight">
            With access to major suppliers and manufacturers around the globe.
          </h2>

          {/* TWO HAND IMAGES - layered: left in front & larger, right slightly back */}
          <div className="relative mt-6 md:mt-8 pt-6 h-44 md:h-52 lg:h-64">
            {/* Left hand — larger and in front (moved inwards) */}
            <img
              src={Hand}
              alt="Left raised hand"
              className="pointer-events-none absolute left-6 bottom-0 z-20 w-32 md:w-40 lg:w-48 transform scale-110 object-contain"
            />

            {/* Right hand — slightly smaller and positioned behind (flipped, moved inwards) */}
            <img
              src={Hand}
              alt="Right raised hand"
              style={{ transform: "scaleX(-1) scale(0.96)" }}
              className="pointer-events-none absolute right-6 bottom-0 z-10 w-28 md:w-36 lg:w-44 object-contain -translate-x-2"
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="text-slate-400 flex items-start space-x-8">
          <div className="flex-1 space-y-8">
            <p className="text-sm md:text-base leading-relaxed">
              All India SC & ST Employees Welfare Association (AISCSTEWA) is a registered organization dedicated to protecting the constitutional rights and promoting the welfare of Scheduled Caste and Scheduled Tribe employees working in ONGC and its affiliated establishments.
            </p>

            <div>
              <h3 className="text-slate-600 font-semibold">Our Vision :</h3>
              <p className="mt-2 text-sm md:text-base leading-relaxed">
                To safeguard the interests and rights of SC/ST employees through collective representation, policy advocacy, and continuous engagement with management. We are committed to ensuring proper implementation of reservation policies, addressing grievances, and fostering unity among our community members.
              </p>
            </div>

            <div>
              <h3 className="text-slate-600 font-semibold">Our Mission :</h3>
              <p className="mt-2 text-sm md:text-base leading-relaxed">
                To create an equitable and inclusive work environment where every SC/ST employee can thrive with dignity, respect, and equal opportunities. We envision a society where constitutional provisions are fully implemented and the principles of social justice are upheld at every level of the organization.
              </p>
            </div>
          </div>

          {/* Hand1 image positioned to touch the right border of the screen */}
          <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-10">
            <img
              src={Hand1}
              alt="Hand pointing left"
              className="w-24 md:w-32 lg:w-40 object-contain transform scaleX(-1)"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
