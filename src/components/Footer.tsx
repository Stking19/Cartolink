"use client";

import Image from "next/image";
import { MdLibraryBooks } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="w-full h-max flex justify-between items-center mb-2 pr-4">
        <h3 className="text-foreground ml-[40px] font-bold">Gallery</h3>
        <div className="w-max h-max flex gap-2">
          <div className="w-max h-max flex gap-1 items-center text-foreground bg-dotground py-0.5 px-2 rounded-2xl text-[12px]">
            <span>
              <MdLibraryBooks />
            </span>
            Legal
          </div>
          <div className="w-max h-max flex gap-1 items-center text-foreground bg-dotground py-0.5 px-2 rounded-2xl text-[12px]">
            <span>
              <FaCreditCard />
            </span>
            Pricing
          </div>
        </div>
      </div>
      <div className="w-full h-17 bg-[#2e2d2d] text-white flex justify-between items-center px-15">
        <div className="w-max h-[100%] flex gap-2 items-center">
          <Image
            src="/IMG/favicon-64-dark.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-xl"
          />
          <h2 className="text-white font-bold text-[20px]">Krea AI</h2>
        </div>
        <div className="w-max h-[100%] flex gap-1 text-white items-center text-[22px] font-medium">
          curated by <span></span>
          <h1 className="font-extrabold text-[25px]">Mobbin</h1>
        </div>
      </div>
    </>
  );
}
