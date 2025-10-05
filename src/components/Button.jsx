import React from "react";

const Button = ({ btntext }) => {
  return (
    <div>
      <a
        href="/myresume.pdf"
        download="Bhavik_Rai_Resume.pdf"
        className=" bg-purple-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-xl shadow-md transition duration-300 mt-9"
      >
        {btntext}
      </a>
    </div>
  );
};

export default Button;
