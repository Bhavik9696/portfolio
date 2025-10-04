import React from "react";
import Aside from "../components/Aside";
import DotsBackground from "../components/DotsBackground";
import CursorGlow from "../components/CursorGlow";
const KnowledgeBase = () => {
  const educationData = [
    {
      logo: "https://imgs.search.brave.com/rn2u9VZcGsi8Rd7WaApdSxQGEakQly5p-Ph4roXb7To/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvQkZtdHRyOEI4/WHcvc2RkZWZhdWx0/LmpwZw", 
      title: "St joseph engineering college Mangalure",
      degree: "Bachelor's Degree of Computer Science and Engineering",
      year: "2023 – 2027",
    },
    {
      logo: "https://tse2.mm.bing.net/th/id/OIP.mEfz2KJP-r4o5lMLJg8e3QHaHa?pid=Api&P=0&h=180",
      title: "Vivekananda Pre University College Puttur",
      degree: "Pre-University Education",
      year: "2021 – 2023",
    },
    {
      logo: "https://ashwithrai.me/Education/priyadarshini.png",
      title: "Priyadarshini English Medium School Bettampady",
      degree: "Secondary Education",
      year: "2011 – 2021",
    },
  ];

  return (
    <section className="relative mx-auto my-12 px-2 sm:px-4 max-w-3xl z-[9]">
      <DotsBackground/>
      <CursorGlow/>
      <Aside/>
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 text-center text-blue-700">Educational Background</h2>
      <div className="relative border-l-2 border-gray-300 pl-6 sm:pl-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="mb-16 sm:mb-28 flex flex-col sm:flex-row sm:items-center relative"
          >
            <div className="absolute -left-8 sm:-left-14 top-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md bg-white">
              <img
                src={edu.logo}
                alt={edu.title}
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain"
              />
            </div>
            <div className="flex-1 sm:ml-8 mt-8 sm:mt-0">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold">{edu.title}</h3>
              <p className="text-purple-500 text-xs sm:text-sm md:text-base">{edu.degree}</p>
            </div>
            <div className="text-purple-400 mt-2 sm:mt-0 sm:ml-auto text-right text-xs sm:text-base">
              <p>{edu.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KnowledgeBase;
