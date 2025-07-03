import React from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import ContactItem from "@/components/layouts/ContactItem"; // adjust path if needed
import { BorderBeam } from "@/components/magicui/border-beam";
const Sidebar = () => {
  return (
    <aside className="w-full md:w-72 bg-[#1f1f1f] text-white py-10 px-6  rounded-2xl shadow-lg flex flex-col justify-between lg:sticky lg:top-[40px] h-screen">
      <BorderBeam
        size={800}
        borderWidth={2.5}
        duration={4}
        className=" via-blue-500    "
      />
      <div className="flex flex-col items-center space-y-2">
        <img
          className="w-32 h-32 rounded-2xl bg-gray-800/40"
          src="/assets/my-avatar.png"
          alt="Avatar"
        />
        <h2 className="text-3xl font-bold">Vivek Pandey</h2>
        <h3 className="text-sm text-gray-400 bg-black px-3 py-2 rounded-lg">
          Azure Developer
        </h3>
        <div className="border border-gray-700 w-full mt-4 mb-6"></div>

        {/* Contact Info */}
        <div className="space-y-6 w-full">
          <ContactItem Icon={Mail} title="Email" value="vivek@example.com" />
          <ContactItem Icon={Phone} title="Phone" value="+91 7488496158" />
          <ContactItem
            Icon={Github}
            title="GitHub"
            value="github.com/vivek-pandey"
            link="https://github.com/vivek-pandey"
          />
          <ContactItem
            Icon={MapPin}
            title="Location"
            value="Bangalore, India"
          />
        </div>
      </div>

      {/* Social Icons */}
      <div className="relative">
        <Dock iconMagnification={65} iconDistance={80} className="p-8">
          <DockIcon className=" bg-blue-500  dark:bg-white/10">
            <Facebook className="size-full " />
          </DockIcon>
          <DockIcon className="bg-blue-500 dark:bg-white/10">
            <Twitter className="size-full" />
          </DockIcon>
          <DockIcon className="bg-blue-500 dark:bg-white/10">
            <Instagram className="size-full" />
          </DockIcon>
        </Dock>
      </div>
    </aside>
  );
};

export default Sidebar;
