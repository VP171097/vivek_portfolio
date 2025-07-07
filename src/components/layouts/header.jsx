import React from "react";
import { Link } from "react-scroll";
import { useConfig } from "@/context/ConfigContext"; // Make sure you have this

const Header = () => {
  const { config, loading } = useConfig();

  if (loading || !config.navigation) {
    return (
      <div className="text-white text-center mt-4">Loading Navigation...</div>
    );
  }

  const navItems = config.navigation.navItems;

  return (
    <div className="flex justify-end mb-4 sticky top-0 z-50">
      <div className="bg-[#181819a1] px-5 py-4 rounded-tr-2xl border-[#333] rounded-bl-2xl pr-8">
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
