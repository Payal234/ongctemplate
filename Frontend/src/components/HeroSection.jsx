import React from "react";
import HeroImage from "../assets/Hero.png";

const HeroSection = () => {
  return (
    <section className="px-4 py-10">
      <div
        className="relative mx-auto max-w-7xl min-h-[75vh] md:min-h-[85vh]
                   bg-cover bg-center rounded-[3rem] overflow-hidden"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-200/70 via-sky-400/60 to-slate-900/70" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-between h-full text-center px-6 py-16">
          
          {/* Top */}
          <p className="text-xs tracking-widest text-white/80 underline">
            WHO ARE WE
          </p>

          {/* Middle */}
          <div>
            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl mt-5 lg:text-5xl drop-shadow-lg">
              Empowering ONGC Workforce
            </h1>

            <button className="mt-6 px-15 py-3 rounded-full
                               bg-gradient-to-r from-sky-400 to-sky-300
                               text-slate-900 font-semibold shadow-xl">
              Register
            </button>
          </div>

          {/* Bottom Quote */}
         <p className="mt-65 max-w-6xl text-white font-semibold  md:text-xl lg:text-3xl drop-shadow">
  “ONGC Employees Welfare & Development Union – Empowering Workforce,
  Ensuring Welfare.”
</p>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;
