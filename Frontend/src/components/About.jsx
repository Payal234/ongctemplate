import React from "react";
import Hand from "../assets/hand.jpg";


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
        <div className="text-slate-400 space-y-8">
          <p className="text-sm md:text-base leading-relaxed">
            The ONGC Workers Union is a representative body formed to safeguard
            the rights, welfare, and professional interests of employees working
            in Oil and Natural Gas Corporation (ONGC). The Union acts as a
            collective voice of the workforce and works in close coordination
            with management to ensure fair policies, safe working conditions,
            and inclusive growth.
          </p>

          <div>
            <h3 className="text-slate-600 font-semibold">Our Vision :</h3>
            <p className="mt-2 text-sm md:text-base leading-relaxed">
              To create a strong, united, and empowered workforce that thrives
              in a fair, safe, and respectful workplace, ensuring long-term
              welfare and professional development of all union members.
            </p>
          </div>

          <div>
            <h3 className="text-slate-600 font-semibold">Our Mission :</h3>
            <p className="mt-2 text-sm md:text-base leading-relaxed">
              To represent ONGC employees with integrity and unity, promote
              welfare and safety, address grievances effectively, and contribute
              positively to the organization’s growth while upholding
              employees’ rights and responsibilities.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
