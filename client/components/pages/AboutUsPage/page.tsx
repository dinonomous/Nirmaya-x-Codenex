import { Michroma, Baumans } from "next/font/google";
const michorma = Michroma({ weight: "400", subsets: ["latin"], preload: true });
const baumans = Baumans({ weight: "400", subsets: ["latin"], preload: true });
import React from "react";

export const AboutUs = () => {
  return (
    <div
      id="sponsors"
      className={`${michorma.className} p-10 rounded-3xl m-4 shadow-lg relative flex flex-col gap-10 justify-center items-center`}
    >
      <div className="text-center mb-8">
        <h1 className="font-bold text-transparent bg-clip-text text-4xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-b from-[#757AD0] to-[#CD89D7]">
        About Niramaya
        </h1>
      </div>
      <img
        alt="Looper background"
        src="/assets/cuate.svg"
        className="lg:h-[70vh] h-[40vh] w-auto object-contain mt-10"
      />
      <h2 className={`${baumans.className} font-bold text-transparent bg-clip-text text-xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-b from-[#FAFAFA] to-[#7793AD] text-center`}>
      Who Are We?
      </h2>
      <p className="{`${baumans.className} font-bold text-white text-xl sm:text-md md:text-md lg:text-2xl w-10/12 text-center `}">
      At Niramaya Health Tech, we redefine healthcare journeys with innovation and care. 
      </p >
      <p className="{`${baumans.className} font-bold text-white text-xl sm:text-md md:text-md lg:text-2xl w-10/12 text-center `}">Connect with us on our socials and be a part of our journey towards building a healthier tomorrow!</p>
      <button className="px-4 h-14 bg-[#DFA9E7] rounded-full text-2xl">Connect with us</button>
    </div>
  );
};
