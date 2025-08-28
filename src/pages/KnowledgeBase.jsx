import React from "react";

const KnowledgeBase = () => {
  const educationData = [
    {
      logo: "https://media-exp3.licdn.com/dms/image/C510BAQHUrhaaz7wHRg/company-logo_200_200/0/1553411502807?e=2159024400&v=beta&t=bVATmOT64fXz46JFkBDJq_-42Ilj5UFXihzp4BcPxMI", 
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
    <section className="max-w-4xl mx-auto my-12 px-4">
      <h2 className="text-3xl font-bold mb-8">educational Background</h2>
      <div className="relative border-l-2 border-gray-300 ml-6">
        {educationData.map((edu, index) => (
          <div key={index} className="mb-8 ml-6 relative">
            <div className="absolute -left-6 top-0 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
              <img src={edu.logo} alt={edu.title} className="w-8 h-8 mr-14" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mr-96">{edu.title}</h3>
              <p className="text-gray-500">{edu.degree}</p>
            </div>
            <div className="text-gray-400 absolute right-0 top-0 text-right">
              <p>{edu.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KnowledgeBase;
