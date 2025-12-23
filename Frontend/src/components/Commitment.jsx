import React from "react";
import Hero from "../assets/Hero.png";

const Commitment = () => {
  return (
    <section className="px-4 py-10">
      {/*Outer spacing to show rounded corners*/}
      <div className="px-4 sm:px-6 lg:px-16">
        <div
          className="relative w-full overflow-hidden rounded-[3rem] h-[420px] sm:h-[520px] flex items-center"
          style={{
            backgroundImage: `url(${Hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-sky-900/70 rounded-5xl" />
          {/* Content */}
          <div className="relative z-10 max-w-1xl px-6 sm:px-10 text-white">
            <p className="text-xs uppercase tracking-widest text-sky-300 mb-4 ">
              WHAT CAN WE DO FOR YOU?
            </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our Commitment
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-sky-100">
              The Union remains dedicated to standing with its members at every
              stage, offering guidance, support, and representation whenever
              required. By fostering unity and mutual respect, we aim to
              contribute not only to the welfare of employees but also to the
              sustained success of ONGC as a national organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
