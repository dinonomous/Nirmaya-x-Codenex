import { Michroma } from "next/font/google";
const michorma = Michroma({ weight: "400", subsets: ["latin"], preload: true });
import React from "react";

export const Sponsors = () => {
  const sponsors = [
    { id: 1, logo: "/images/sponsor1.png" },
    { id: 2, logo: "/images/sponsor2.png" },
    { id: 3, logo: "/images/sponsor3.png" },
    { id: 4, logo: "/images/sponsor4.png" },
    { id: 5, logo: "/images/sponsor5.png" },
    { id: 6, logo: "/images/sponsor6.png" },
  ];

  return (
    <div
      id="sponsors"
      className={`${michorma.className} p-10 rounded-3xl m-4 shadow-lg relative`}
    >
      <img
        alt="Looper background"
        src="/images/hero-section-looper-bg.svg"
        className="w-[100%] h-auto object-cover absolute top-0"
      />
      <div className="text-center mb-8">
        <h1 className="font-bold text-transparent bg-clip-text text-4xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-b from-[#757AD0] to-[#CD89D7]">
          Our Sponsors
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-center mt-32">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="bg-gradient-to-r from-[#ffffff80] to-[#dfb7fc62] backdrop-blur-md shadow-md rounded-3xl p-4 flex justify-center items-center hover:shadow-lg transition-shadow h-60"
          >
            <img
              src={sponsor.logo}
              alt={`Sponsor ${sponsor.id}`}
              className="w-full h-auto max-h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
