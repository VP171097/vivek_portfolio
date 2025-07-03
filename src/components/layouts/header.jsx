import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  const navItems = [
    { label: "About", to: "about" },
    { label: "Education", to: "education" },
    { label: "Experience", to: "experience" },
    { label: "Skills", to: "skills" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <div className=" flex justify-end mb-4 sticky top-0  z-50 ">
      <div className="  border bg-[#282829] px-5 py-4 rounded-tr border-[#333]  rounded-bl-2xl">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            smooth={true}
            duration={500}
            offset={-50}
            className={`px-5 py-2 transition cursor-pointer ${
              item.label === "About"
                ? "bg-[#1f1f1f] text-yellow-400 font-semibold rounded-lg"
                : "text-gray-300 hover:bg-[#2a2a2a] rounded-lg"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
