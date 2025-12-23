import React from "react";

import B1 from "../assets/B1.png";
import B2 from "../assets/B2.png";
import B3 from "../assets/B3.png";

const items = [
  {
    title: "Employee Welfare & Benefits",
    points: [
      "Medical facilities and reimbursement issues",
      "Insurance, pension, and retirement benefits",
      "Housing and loan-related matters",
      "Welfare fund utilization",
    ],
    image: B1,
    reverse: false,
  },
  {
    title: "Workplace Safety & Health",
    points: [
      "Safety standards at worksites",
      "Protective equipment availability",
      "Health check-up programs",
      "Accident prevention measures",
    ],
    image: B2,
    reverse: true,
  },
  {
    title: "Grievance Redressal",
    points: [
      "Pending employee grievances",
      "Transfer and posting concerns",
      "Salary, allowances, overtime issues",
      "Workplace harassment cases",
    ],
    image: B3,
    reverse: false,
  },
  {
    title: "HR Policies",
    points: [
      "Implementation of company policies",
      "Working hours and shift schedules",
      "Leave policies and holidays",
      "Promotion and appraisal systems",
    ],
    image: B1,
    reverse: true,
  },
  {
    title: "Training & Development",
    points: ["Skill upgradation", "Workshops", "Leadership training"],
    image: B2,
    reverse: false,
  },
  {
    title: "Employee Engagement",
    points: ["Cultural events", "Sports activities", "Team building"],
    image: B3,
    reverse: true,
  },
  {
    title: "Social Welfare",
    points: ["Community programs", "CSR initiatives"],
    image: B2,
    reverse: false,
  },
  {
    title: "Infrastructure Support",
    points: ["Workplace facilities", "Transport support"],
    image: B1,
    reverse: true,
  },
];

const GalleryDocuments = () => {
  return (
    <section id="gallerydocuments" className="py-20 scroll-mt-28">
      <div id="gallery" className="block -mt-24 pt-24" aria-hidden="true"></div>
      <div id="documents" className="block -mt-24 pt-24" aria-hidden="true"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 bg-linear-to-br from-slate-900 to-slate-800 rounded-3xl py-16 text-white">

        {/* Section Header */}
        <p className="text-xs uppercase tracking-widest text-sky-400 mb-6 underline">
          GALLERY & DOCUMENTS
        </p>
        {/* Content Items */}
         <div className="flex flex-col gap-16">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch"
            >
              {/* Image */}
              <div
                className={`flex justify-center items-center w-full h-72 md:h-80 lg:h-90 ${item.reverse ? "md:order-2" : ""} rounded-2xl overflow-hidden`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>

              {/* Text */}
              <div
                className={`flex flex-col justify-center w-full h-72 md:h-80 lg:h-96 px-4 md:px-8 lg:px-12 ${item.reverse ? "md:order-1" : ""} text-white`}
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 flex items-center gap-3">
                  {item.reverse ? "→" : "←"} {item.title}
                </h3>

                <ul className="space-y-3 text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-sky-400">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GalleryDocuments;
