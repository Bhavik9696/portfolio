const SkillCard = ({ icon, name, desc, invert }) => (
  <div className="bg-[#112240] p-4 rounded-xl shadow-md hover:scale-105 transition-transform hover:rounded-3xl">
    <img
      src={icon}
      alt={name}
      className={`w-12 h-12 mx-auto mb-3 ${invert ? "invert" : ""}`}
    />
    <span className="text-purple-400 font-medium">{name}</span>
    <p className="text-gray-400 text-sm mt-2">{desc}</p>
  </div>
);

export default SkillCard; 