import React from "react";
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaGithub } from "react-icons/fa";
import { useConfig } from "@/context/ConfigContext";

const iconMap = {
  FaLinkedin: FaLinkedin,
  FaWhatsapp: FaWhatsapp,
  FaEnvelope: FaEnvelope,
  FaGithub: FaGithub,
};

const SocialLinks = () => {
  const { config, loading } = useConfig();
  if (loading || !config.socialLinks) return null;

  return (
    <>
      {config.socialLinks.links.map((item, index) => {
        const IconComponent = iconMap[item.icon];
        if (!IconComponent) return null;

        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-3xl transition-transform duration-150 hover:text-white hover:scale-110"
            aria-label={item.label}
          >
            <IconComponent />
          </a>
        );
      })}
    </>
  );
};

export default SocialLinks;
