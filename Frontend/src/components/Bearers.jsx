import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import B1 from "../assets/B1.png";
import B2 from "../assets/B2.png";
import B3 from "../assets/B3.png";

const bearers = [
  { id: 1, name: "Bearers Name", designation: "Designation", image: B1 },
  { id: 2, name: "Bearers Name", designation: "Designation", image: B2 },
  { id: 3, name: "Bearers Name", designation: "Designation", image: B3 },
];

const Bearers = () => {
  return (
    <section id="bearers" className="py-14 bg-white scroll-mt-28">
      <div className="px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div>
            <p className="text-sm uppercase tracking-widest text-sky-500 mb-3">
              BEARERS
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Leadership & Representation
            </h2>
          </div>
          <p className="text-gray-400 max-w-md md:ml-auto leading-relaxed">
            Our elected leaders represent the collective voice of ONGC employees.
            Through democratic processes and active participation.
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          loop={false}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={40}
          speed={500}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="py-10"
        >
          {bearers.map((bearer) => (
            <SwiperSlide key={bearer.id}>
              {({ isActive }) => (
                <div
                  className={`bg-[#e5e5e5] rounded-3xl px-6 py-8 flex flex-col items-center mx-auto transition-all duration-500
                  ${
                    isActive
                      ? "w-[320px] h-[420px]"
                      : "w-[260px] h-[360px] opacity-80"
                  }`}
                >
                  {/* Image */}
                  <div className="w-full h-[220px] rounded-2xl overflow-hidden mb-6 bg-white">
                    <img
                      src={bearer.image}
                      alt={bearer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text */}
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {bearer.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {bearer.designation}
                  </p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Bearers;
