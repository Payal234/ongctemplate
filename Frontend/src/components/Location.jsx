import React from "react";
import earth from "../assets/earth.png"

const Location = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-10 lg:px-20">
      {/* Top Content */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold tracking-widest text-sky-500 uppercase underline cursor-pointer">
            Locations
          </p>
          <h2 className="mt-5 text-2xl md:text-2xl font-semibold text-gray-700">
            Location & Presence
          </h2>
        </div>

        {/* Right */}
        <div className="text-gray-400 text-sm md:text-base leading-relaxed mt-5">
          <p>
            The Union operates from its office located within the ONGC premises,
            ensuring easy accessibility for members and effective coordination
            with various departments. Our strategic location allows us to respond
            promptly to employee concerns and support union activities efficiently.
          </p>
        </div>
      </div>

      {/* World Map */}
      <div className="mt-16 flex justify-center">
        <img
          src={earth}
          alt="World Map"
          className="w-full max-w-3xl md:max-w-4xl object-contain opacity-80"
        />
      </div>
    </section>
  );
};

export default Location;
