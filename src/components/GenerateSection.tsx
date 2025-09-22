"use client";

import { FaRegImage } from "react-icons/fa6";
import { GiPrimitiveTorch } from "react-icons/gi";
import { ImMagicWand } from "react-icons/im";
import { IoVideocam } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiQuillPenAiFill } from "react-icons/ri";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { BsPersonArmsUp } from "react-icons/bs";
import { LuBrainCircuit } from "react-icons/lu";
import { IconType } from "react-icons";

export default function GenerateSection() {
  const options:{icon:IconType, label:string, description:string, new:boolean, bgColor:string}[] = [
    {
      icon: FaRegImage,
      label: "Image",
      description: "Generate images with custom styles in Flux and ideogram.",
      new: true,
      bgColor: "from-[rgb(61,91,115)] to-[rgb(166,188,205)]",
    },
    {
      icon: IoVideocam,
      label: "Video",
      description: "Generate videos with Hailuo, Pika, Runway, Luma and more.",
      new: false,
      bgColor: "from-[rgb(255,168,2)] to-[rgb(255,168,2)]",
    },
    {
      icon: RiQuillPenAiFill,
      label: "Realtime",
      description: "Realtime AI rendering on a canvas. Instant feedback loops.",
      new: false,
      bgColor: "from-[rgb(2,167,244)] to-[rgb(141,231,255)]",
    },
    {
      icon: ImMagicWand,
      label: "Enhancer",
      description: "Upscale and enhance images and videos up to 22K.",
      new: true,
      bgColor: "from-[rgb(35,35,35)] to-[rgb(111,111,111)]",
    },
    {
      icon: GiPrimitiveTorch,
      label: "Edit",
      description:
        "Add objects, change style or expand photos and generations.",
      new: true,
      bgColor: "from-[rgb(47,20,72)] to-[rgb(155,122,187)]",
    },
    {
      icon: PiMicrophoneStageFill,
      label: "Video Lipsync",
      description: "Lip sync to any audio and video.",
      new: true,
      bgColor: "from-[rgb(23,67,51)] to-[rgb(84,148,143)]",
    },
    {
      icon: BsPersonArmsUp,
      label: "Motion Transfer",
      description: "Transfer motion to images and animate characters.",
      new: true,
      bgColor: "from-[rgb(27,28,29)] to-[rgb(27,28,29)]",
    },
    {
      icon: LuBrainCircuit,
      label: "Train",
      description:
        "Teach Krea to replicate your style, products or characters.",
      new: false,
      bgColor: "from-[rgb(249,105,104)] to-[rgb(249,105,104)]",
    },
  ];
  return (
    <>
      <div className="w-[100%] h-[30px] flex px-[30px] mt-4 justify-between">
        <h2 className="text-foreground font-bold ml-5 text-[18px]">Generate</h2>
        <p className="w-max flex gap-1 text-blue-600 items-start text-[14px] cursor-pointer">
          <span>
            <MdOutlineKeyboardArrowDown size={22} />
          </span>{" "}
          Show all
        </p>
      </div>
      <div className="w-[100%] h-max flex pl-[40px] mt-4 flex-wrap gap-4 mb-[50px]">
        {options.map((option, index) => (
          <div className="w-max h-[70px] flex gap-2 items-center" key={index}>
            <div className={`w-[40px] h-[40px] rounded-xl flex justify-center items-center bg-gradient-to-b ${option.bgColor}`}>
              {<option.icon color="white" size={20} />}
            </div>
            <div className="w-max h-max flex flex-col gap-0.5">
              <h4 className="w-max h-max flex gap-1 items-center text-[14px] font-bold">
                {option.label}
                <span className={`w-max h-max px-1.5 py-0.5 text-white text-[10px] rounded-[8px] ${option.new ? "bg-blue-600" : ""}`}>
                  {option.new ? "New" : ""}
                </span>
              </h4>
              <p className="w-[180px] text-[12px] text-gray-600">
                {option.description}
              </p>
            </div>
            <button className="w-max h-max px-5 cursor-pointer py-2 bg-dotground rounded-2xl text-foreground font-bold text-[12px]">
              Open
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
