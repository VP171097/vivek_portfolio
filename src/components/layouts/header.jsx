import React, { useState } from "react";
import { Link } from "react-scroll";
import { useConfig } from "@/context/ConfigContext";

const Header = () => {
  const { config, loading } = useConfig();

  // Track currently active link (default is 'About')
  const [activeLink, setActiveLink] = useState("About");

  if (loading || !config.navigation) {
    return (
      <div className="text-white text-center mt-4">Loading Navigation...</div>
    );
  }

  const navItems = config.navigation.navItems;

  return (
    <div className="flex xl:justify-end justify-center mb-4 sticky top-0 z-50 w-full">
      <div className="xl:bg-[#181819a1] w-full xl:w-fit px-4 sm:px-6 xl:px-5 py-4 xl:rounded-tr-2xl xl:rounded-bl-2xl xl:pr-8 bg-black">
        <div className="flex flex-wrap justify-center xl:justify-end gap-3 sm:gap-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-50}
              onClick={() => setActiveLink(item.label)}
              className={`xl:px-5 px-4 py-2 text-sm sm:text-base transition cursor-pointer rounded-lg ${
                activeLink === item.label
                  ? "bg-[#1f1f1f] text-yellow-400 font-semibold"
                  : "text-gray-300 hover:bg-[#2a2a2a]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
