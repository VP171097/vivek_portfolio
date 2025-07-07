import React from "react";
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaGithub } from "react-icons/fa";
import { useConfig } from "@/context/ConfigContext"; // fetches from GitHub JSON

const iconMap = {
  FaLinkedin: FaLinkedin,
  FaWhatsapp: FaWhatsapp,
  FaEnvelope: FaEnvelope,
  FaGithub: FaGithub,
};

const SocialLinks = () => {
  const { config, loading } = useConfig();

  if (loading || !config.socialLinks) {
    return null; // Or show loading spinner/text
  }

  return (
    <div className="fixed top-1/2 right-6 -translate-y-1/2 flex flex-col gap-8 z-50">
      {config.socialLinks.links.map((item, index) => {
        const IconComponent = iconMap[item.icon];
        if (!IconComponent) return null;

        return (
          <a
            key={index}
            href={item.url}
            target={item.url.startsWith("http") ? "_blank" : undefined}
            rel={
              item.url.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="text-gray-400 text-3xl transition-transform duration-100 hover:text-white hover:scale-110"
            aria-label={item.label}
          >
            <IconComponent />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
