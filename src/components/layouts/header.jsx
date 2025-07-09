import React from "react";
import { Link } from "react-scroll";
import { useConfig } from "@/context/ConfigContext";

const Header = () => {
  const { config, loading } = useConfig();

  if (loading || !config.navigation) {
    return (
      <div className="text-white text-center mt-4">Loading Navigation...</div>
    );
  }

  const navItems = config.navigation.navItems;

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Mobile / Tablet View */}
      <div className="xl:hidden bg-black/90 backdrop-blur-md px-2 py-2 shadow">
        <div className="flex justify-center gap-2 sm:gap-3">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-50}
              spy={true}
              activeClass="active"
              className={`
                text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg cursor-pointer transition
                text-gray-300 hover:bg-[#2a2a2a]
                [&.active]:bg-[#1f1f1f] [&.active]:text-yellow-400 [&.active]:font-semibold
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden xl:flex justify-end mb-4 px-5 py-4 sticky top-0 z-50 bg-[#181819a1] backdrop-blur-md w-full xl:w-fit xl:rounded-tr-2xl xl:rounded-bl-2xl xl:ml-auto xl:mr-0">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            smooth={true}
            duration={500}
            offset={-50}
            spy={true}
            activeClass="active"
            className={`
              xl:px-5 px-4 py-2 text-sm transition cursor-pointer rounded-lg
              text-gray-300 hover:bg-[#2a2a2a]
              [&.active]:bg-[#1f1f1f] [&.active]:text-yellow-400 [&.active]:font-semibold
            `}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
