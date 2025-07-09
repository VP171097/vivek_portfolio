import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

import ContactItem from "@/components/layouts/ContactItem";
import { BorderBeam } from "@/components/magicui/border-beam";
import { useConfig } from "@/context/ConfigContext";

const iconMap = {
  email: FaEnvelope,
  phone: FaPhoneAlt,
  github: FaGithub,
  location: FaMapMarkerAlt,
};

const Sidebar = () => {
  const { config, loading } = useConfig();
  const sidebarConfig = config.sidebar;
  const [expanded, setExpanded] = useState(false);

  if (loading || !sidebarConfig)
    return <div className="text-white p-4">Loading Sidebar...</div>;

  return (
    <aside className="relative container md:w-72 bg-black/50 text-white py-6 px-4 rounded-2xl shadow-lg flex flex-col justify-between lg:sticky lg:top-[90px] h-min mb-10 mt-10">
      <BorderBeam
        size={500}
        borderWidth={2}
        duration={4}
        className="hidden sm:block absolute xl:via-blue-500"
      />

      {/* -------- Small Screens View -------- */}
      <div className="md:hidden">
        {/* Collapsed Card */}
        <div className="bg-[#1c1c1c] rounded-2xl p-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={sidebarConfig.avatar}
              alt="Avatar"
              className="w-14 h-14 rounded-2xl object-cover bg-gray-700"
            />
            <div>
              <h2 className="text-white text-2xl font-semibold">
                {sidebarConfig.name}
              </h2>
              <p className="text-gray-400 text-xs mt-1">{sidebarConfig.role}</p>
            </div>
          </div>

          {/* Toggle Button */}
          <button onClick={() => setExpanded(!expanded)}>
            {expanded ? (
              <FaChevronUp className="text-yellow-400 text-sm" />
            ) : (
              <FaChevronDown className="text-yellow-400 text-sm" />
            )}
          </button>
        </div>

        {/* Expandable Section with Transition */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            expanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 space-y-4 px-4 pb-5">
            {sidebarConfig.contacts.map((contact, idx) => {
              const Icon = iconMap[contact.type];
              return (
                <ContactItem
                  key={idx}
                  Icon={Icon}
                  title={contact.title}
                  value={contact.value}
                  link={contact.link}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* -------- Large Screens View -------- */}
      <div className="hidden md:flex flex-col items-center py-6 px-3">
        <img
          className="w-32 h-32 rounded-2xl bg-gray-800/40"
          src={sidebarConfig.avatar}
          alt="Avatar"
        />

        <h2 className="text-3xl font-bold">{sidebarConfig.name}</h2>

        <h3 className="text-sm text-gray-400 bg-black xl:px-3 py-2 rounded-lg">
          {sidebarConfig.role}
        </h3>

        <div className="border border-gray-200 w-full xl:mb-6 my-4"></div>

        {/* Contact Info */}
        <div className="space-y-6 w-full px-3">
          {sidebarConfig.contacts.map((contact, idx) => {
            const Icon = iconMap[contact.type];
            return (
              <ContactItem
                key={idx}
                Icon={Icon}
                title={contact.title}
                value={contact.value}
                link={contact.link}
              />
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
