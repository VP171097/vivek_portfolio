// components/ContactItem.jsx
import React from "react";

const ContactItem = ({ Icon, title, value, link }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-[#0f0f0f] p-3 rounded-xl shadow-md">
        <Icon className="text-yellow-400 w-5 h-5" />
      </div>
      <div>
        <p className="text-xs text-gray-400 uppercase">{title}</p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white hover:underline truncate w-44 block"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm font-medium text-white truncate w-44">
            {value}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactItem;
