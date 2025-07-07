import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
} from "react-icons/fa";

import ContactItem from "@/components/layouts/ContactItem";
import { BorderBeam } from "@/components/magicui/border-beam";
import { useConfig } from "@/context/ConfigContext"; // ✅ use global config

const iconMap = {
  email: FaEnvelope,
  phone: FaPhoneAlt,
  github: FaGithub,
  location: FaMapMarkerAlt,
};

const Sidebar = () => {
  const { config, loading } = useConfig();
  const sidebarConfig = config.sidebar;

  if (loading || !sidebarConfig)
    return <div className="text-white p-4">Loading Sidebar...</div>;

  return (
    <aside className="w-full md:w-72 bg-[#1f1f1f]/50 text-white py-10 px-6 rounded-2xl shadow-lg flex flex-col justify-between lg:sticky lg:top-[60px] h-min">
      <BorderBeam
        size={800}
        borderWidth={2.5}
        duration={4}
        className="via-blue-500"
      />
      <div className="flex flex-col items-center space-y-2">
        <img
          className="w-32 h-32 rounded-2xl bg-gray-800/40"
          src={sidebarConfig.avatar}
          alt="Avatar"
        />

        <h2 className="text-3xl font-bold">{sidebarConfig.name}</h2>

        <h3 className="text-sm text-gray-400 bg-black px-3 py-2 rounded-lg">
          {sidebarConfig.role}
        </h3>

        <div>
          <img
            src={sidebarConfig.badge}
            className="w-30 h-30 rounded-xl mt-4"
            alt=""
          />
        </div>

        <div className="border border-gray-200 w-full mb-6"></div>

        {/* Contact Info */}
        <div className="space-y-6 w-full">
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
