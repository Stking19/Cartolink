"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Hero() {
  const carousel: {
    img: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
  }[] = [
    {
      img: "/IMG/image-1.webp",
      text1: "WAN 2.2",
      text2:
        "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures",
      text3: "WAN 2.2 Image generation",
      text4: "NEW IMAGE MODEL",
      text5: "Try WAN 2.2",
    },
    {
      img: "/IMG/image-2.webp",
      text1: "WAN 2.2",
      text2:
        "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures",
      text3: "WAN 2.2 Image generation",
      text4: "NEW IMAGE MODEL",
      text5: "Try WAN 2.2",
    },
    {
      img: "/IMG/image-3.webp",
      text1: "WAN 2.2",
      text2:
        "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures",
      text3: "WAN 2.2 Image generation",
      text4: "NEW IMAGE MODEL",
      text5: "Try WAN 2.2",
    },
    {
      img: "/IMG/image-4.webp",
      text1: "WAN 2.2",
      text2:
        "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures",
      text3: "WAN 2.2 Image generation",
      text4: "NEW IMAGE MODEL",
      text5: "Try WAN 2.2",
    },
    {
      img: "/IMG/image-5.webp",
      text1: "WAN 2.2",
      text2:
        "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures",
      text3: "WAN 2.2 Image generation",
      text4: "NEW IMAGE MODEL",
      text5: "Try WAN 2.2",
    },
    {
      img: "/IMG/image-6.webp",
      text1: "WAN 2.2",
      text2:
        "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures",
      text3: "WAN 2.2 Image generation",
      text4: "NEW IMAGE MODEL",
      text5: "Try WAN 2.2",
    },
    {
      img: "/IMG/image-7.webp",
      text1: "WAN 2.2",
      text2:
        "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures",
      text3: "WAN 2.2 Image generation",
      text4: "NEW IMAGE MODEL",
      text5: "Try WAN 2.2",
    },
    {
      img: "/IMG/image-8.webp",
      text1: "WAN 2.2",
      text2:
        "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures",
      text3: "WAN 2.2 Image generation",
      text4: "NEW IMAGE MODEL",
      text5: "Try WAN 2.2",
    },
    {
      img: "/IMG/opengraph.webp",
      text1: "WAN 2.2",
      text2:
        "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures",
      text3: "WAN 2.2 Image generation",
      text4: "NEW IMAGE MODEL",
      text5: "Try WAN 2.2",
    },
  ];
  const carousel2: {
    img: string;
    text1: string;
    text2: string;
    text3: string;
  }[] = [
    {
      img: "/IMG/image-8.webp",
      text1: "OPEN SOURCE MODEL",
      text2:
        "We are making the weights to our FLUX.1 Krea model open source. Download and run our model weights, read the technical reports, or generate with in Krea image.",
      text3: "FLUX.1 Krea",
    },
    {
      img: "/IMG/image-10.webp",
      text1: "OPEN SOURCE MODEL",
      text2:
        "We are making the weights to our FLUX.1 Krea model open source. Download and run our model weights, read the technical reports, or generate with in Krea image.",
      text3: "FLUX.1 Krea",
    },
    {
      img: "/IMG/image-11.webp",
      text1: "OPEN SOURCE MODEL",
      text2:
        "We are making the weights to our FLUX.1 Krea model open source. Download and run our model weights, read the technical reports, or generate with in Krea image.",
      text3: "FLUX.1 Krea",
    },
    {
      img: "/IMG/image-12.webp",
      text1: "OPEN SOURCE MODEL",
      text2:
        "We are making the weights to our FLUX.1 Krea model open source. Download and run our model weights, read the technical reports, or generate with in Krea image.",
      text3: "FLUX.1 Krea",
    },
    {
      img: "/IMG/image-13.webp",
      text1: "OPEN SOURCE MODEL",
      text2:
        "We are making the weights to our FLUX.1 Krea model open source. Download and run our model weights, read the technical reports, or generate with in Krea image.",
      text3: "FLUX.1 Krea",
    },
    {
      img: "/IMG/image-14.webp",
      text1: "OPEN SOURCE MODEL",
      text2:
        "We are making the weights to our FLUX.1 Krea model open source. Download and run our model weights, read the technical reports, or generate with in Krea image.",
      text3: "FLUX.1 Krea",
    },
  ];

  const [num, setNum] = useState(0);
  const [number, setNumber] = useState(0);

  const handleMove = () => {
    setNumber((number + 1) % carousel2.length);
  }
  const handleMinus = () => {
    setNumber((number -1 + carousel2.length) % carousel2.length);
  }
  const handlePlus = () => {
    setNum((num + 1) % carousel.length);
  };

  useEffect(() => {
    const interval = setInterval(handlePlus, 5000);
    return () => clearInterval(interval);
  }, [num]);

  return (
    <div className="w-[100%] h-[430px] bg-background flex justify-between pl-10 pr-2 py-10 mt-5 relative">
      <div className="w-[55%] h-[100%] rounded-2xl ">
        <div className="w-[100%] h-[100%] relative rounded-2xl">
          <Image
            src={carousel[num].img}
            alt=""
            layout="fill"
            className="object-cover rounded-2xl"
          />
          <div className="w-max h-max absolute z-10 left-[40px] bottom-[70px]">
            <h2 className="text-[22px] text-white">{carousel[num].text3}</h2>
          </div>
          <div className="w-[400px] h-max absolute left-[40px] bottom-[17px] leading-4">
            <h2 className="text-[14px] text-white">{carousel[num].text2}</h2>
          </div>
          <div className="w-max h-max absolute left-[40px] top-[20px]">
            <h2 className="text-[10px] text-white">{carousel[num].text4}</h2>
          </div>
          <div className="w-max h-max bg-white cursor-pointer absolute z-10 px-4 py-2 rounded-2xl right-[40px] bottom-[20px]">
            <h2 className="text-[12px] text-black font-bold">
              {carousel[num].text5}
            </h2>
          </div>
          <div className="w-[100%] h-[100%] rounded-2xl bg-[#00000018] absolute"></div>
        </div>
        <div className="flex w-max h-max absolute gap-2 bottom-[19px] left-[43%]">
          {carousel.map((_, index) => (
            <div
              onClick={() => setNum(index)}
              className={`w-2 h-2 cursor-pointer rounded-full ${
                num === index ? "bg-foreground scale-110" : "bg-dotground"
              } `}
              key={index}
            ></div>
          ))}
        </div>
      </div>
      <div className="w-[40%] h-[100%] rounded-l-2xl">
        <div className="w-[100%] h-[100%] relative rounded-l-2xl">
          <Image
            src={carousel2[number].img}
            alt=""
            layout="fill"
            className="object-cover rounded-l-2xl"
          />
          <div className="w-max h-max absolute z-10 left-[30px] bottom-[70px]">
            <h2 className="text-[22px] text-white">{carousel2[number].text3}</h2>
          </div>
          <div className="w-[420px] h-max absolute z-10 left-[30px] bottom-[17px] leading-4">
            <h2 className="text-[14px] text-white">{carousel2[number].text2}</h2>
          </div>
          <div className="w-max h-max absolute left-[30px] top-[20px] z-10">
            <h2 className="text-[10px] text-white">{carousel2[number].text1}</h2>
          </div>
          <div className="w-[100%] h-[100%] rounded-2xl bg-[#00000018] absolute"></div>
        </div>
      </div>
      <div className="flex w-max h-max absolute gap-2 bottom-[10px] right-[25px]">
        <div className="w-max h-max p-1 rounded-full bg-dotground cursor-pointer" onClick={handleMinus}>
          <MdOutlineKeyboardArrowLeft className="text-foreground"/>
        </div>
        <div className="w-max h-max p-1 rounded-full bg-dotground cursor-pointer" onClick={handleMove}>
          <MdOutlineKeyboardArrowRight className="text-foreground"/>
        </div>
      </div>
    </div>
  );
}
