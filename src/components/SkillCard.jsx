const SkillCard = ({ icon, name, desc, invert }) => (
  <div
    className="group relative p-5 rounded-xl transition-all duration-300 cursor-default
                hover:scale-105 hover:-translate-y-1"
    style={{
      background: "rgba(255, 193, 7, 0.05)",
      border: "1px solid rgba(255, 193, 7, 0.18)",
      backdropFilter: "blur(16px) saturate(1.3)",
      WebkitBackdropFilter: "blur(16px) saturate(1.3)",
      boxShadow: "0 4px 24px rgba(255, 160, 0, 0.10)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow =
        "0 0 28px rgba(255, 193, 7, 0.35), inset 0 0 12px rgba(255, 193, 7, 0.07)";
      e.currentTarget.style.borderColor = "rgba(255, 193, 7, 0.45)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = "0 4px 24px rgba(255, 160, 0, 0.10)";
      e.currentTarget.style.borderColor = "rgba(255, 193, 7, 0.18)";
    }}
  >
    {/* Subtle top-edge gold shimmer line */}
    <div
      aria-hidden="true"
      className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px rounded-full opacity-60"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(255,193,7,0.6), transparent)",
      }}
    />

    {/* Icon */}
    <div className="flex justify-center mb-3">
      <div
        className="w-14 h-14 flex items-center justify-center rounded-full"
        style={{
          background: "rgba(255, 193, 7, 0.08)",
          border: "1px solid rgba(255, 193, 7, 0.2)",
          boxShadow: "0 0 16px rgba(255, 193, 7, 0.2)",
        }}
      >
        <img
          src={icon}
          alt={name}
          className={`w-8 h-8 object-contain ${invert ? "invert" : ""}`}
          style={{
            filter: invert
              ? "invert(1)"
              : "drop-shadow(0 0 6px rgba(255,193,7,0.4))",
          }}
        />
      </div>
    </div>

    {/* Name */}
    <p
      className="font-semibold text-center text-sm tracking-wide"
      style={{
        fontFamily: "'Cinzel', serif",
        color: "#ffd54f",
        textShadow: "0 0 10px rgba(255, 193, 7, 0.4)",
      }}
    >
      {name}
    </p>

    {/* Description */}
    {desc && (
      <p
        className="text-xs mt-2 text-center leading-relaxed"
        style={{ color: "rgba(240, 230, 200, 0.6)" }}
      >
        {desc}
      </p>
    )}
  </div>
);

export default SkillCard;
