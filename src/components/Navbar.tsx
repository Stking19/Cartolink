"use client";

import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { IconType } from "react-icons";
import { FaRegImage } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";
import { ImMagicWand } from "react-icons/im";
import { RiQuillPenAiFill } from "react-icons/ri";
import { GiPrimitiveTorch } from "react-icons/gi";
import { FaFolder } from "react-icons/fa";
import { MdImageSearch } from "react-icons/md";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function Navbar() {
  const navItem: { icon: IconType; label: string }[] = [
    { icon: GoHomeFill, label: "Home" },
    { icon: FaRegImage, label: "Image" },
    { icon: IoVideocam, label: "Video" },
    { icon: ImMagicWand, label: "Enhancer" },
    { icon: RiQuillPenAiFill, label: "Realtime" },
    { icon: GiPrimitiveTorch, label: "Edit" },
    { icon: FaFolder, label: "Assets" },
  ];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const htmlClasses = document.documentElement.className;
  console.log(htmlClasses); // Outputs a string like "theme-dark active-user"

  return (
    <div className="w-full h-16 text-foreground flex items-center px-6 gap-7 py-1.5 sticky top-0 z-1000">
      <Image
        src={theme === "light" ? "/IMG/favicon-64.png" : "/IMG/favicon-64-dark.png"}
        alt="Logo"
        width={30}
        height={30}
        className="cursor-pointer"
      />
      <div className="w-[20%] h-[100%] flex items-center gap-2.5">
        <div className="w-[30px] h-[30px] rounded-[40%] cursor-pointer">
          <Image
            src="/IMG/profile.webp"
            alt="Logo"
            width={100}
            height={100}
            className="rounded-[40%] object-cover w-[100%] h-[100%]"
          />
        </div>
        <div className="w-max h-[100%] flex items-center gap-3 cursor-pointer">
          <h3 className="text-gray-500 font-semibold">benevolentnimblebat</h3>
          <span className="text-gray-500 text-[22px]">
            <MdOutlineKeyboardArrowDown />
          </span>
        </div>
      </div>
      <div className="h-[100%] w-[29%] bg-navground rounded-2xl ml-[9%] flex items-center justify-around px-1">
        {navItem.map((Item, index) => (
          <div
            className={`w-[50px] h-[38px] rounded-xl relative group flex cursor-pointer justify-center items-center ${
              index === activeIndex
                ? "bg-white shadow-md"
                : "bg-transparent hover:bg-hoverground"
            }`}
            key={index}
            onClick={() => setActiveIndex(index)}
          >
            <span className="text-foreground text-[17px]">
              <Item.icon className={index === activeIndex ? "text-black" : ""} />
            </span>
            <span className="text-foreground text-[12px] absolute top-14 w-max h-max bg-navground px-1.5 py-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition">
              {Item.label}
            </span>
          </div>
        ))}
      </div>
      <div className="w-[24%] h-[100%] flex items-center justify-between ml-[8%]">
        <div className="w-max h-max bg-navground flex gap-1 px-2 py-1 rounded-[10px] cursor-pointer text-foreground text-sm items-center">
          <span>
            <MdImageSearch size={17} />
          </span>
          <p>Gallery</p>
        </div>
        <div className="w-max h-max bg-navground flex gap-1 px-2 py-1 rounded-[10px] cursor-pointer text-foreground text-sm items-center">
          <span>
            <MdOutlineHeadsetMic size={17} />
          </span>
          <p>Support</p>
        </div>
        <div className="w-max h-max bg-navground flex gap-1 px-2 py-1 rounded-[10px] cursor-pointer text-foreground ">
          <span>
            <IoMdNotifications size={17} />
          </span>
        </div>
        <div className="w-max h-max bg-navground flex gap-1 px-2 py-1 rounded-[10px] cursor-pointer text-foreground ">
          <span onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? (
              <MdLightMode size={19} />
            ) : (
              <MdDarkMode size={19} />
            )}
          </span>
        </div>
        <div className="w-[30px] h-[30px] rounded-[50%] bg-blue-400 cursor-pointer">
           <Image
            src="/IMG/ai.webp"
            alt="Logo"
            width={100}
            height={100}
            className="rounded-[50%] object-cover w-[100%] h-[100%]"
          />
        </div>
      </div>
    </div>
  );
}
