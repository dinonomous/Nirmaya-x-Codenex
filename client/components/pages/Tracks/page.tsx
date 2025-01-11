import { Michroma } from "next/font/google";
const michorma = Michroma({ weight: "400", subsets: ["latin"], preload: true });
import React from "react";

export const Tracks = () => {
    const Tracks = [
        { id: 1, info:"Whether it’s crafting tamper-proof medical records or enabling secure patient-doctor interactions, this track is about building trust through technology.", logo: "/images/tracks/1.svg" },
        { id: 2, info:"Whether it’s crafting tamper-proof medical records or enabling secure patient-doctor interactions, this track is about building trust through technology.", logo: "/images/tracks/2.svg" },
        { id: 3, info:"Whether it’s crafting tamper-proof medical records or enabling secure patient-doctor interactions, this track is about building trust through technology.", logo: "/images/tracks/3.svg" },
        { id: 4, info:"Whether it’s crafting tamper-proof medical records or enabling secure patient-doctor interactions, this track is about building trust through technology.", logo: "/images/tracks/4.svg" },
      ];
  return (
    <div
      id="tracks"
      className={`${michorma.className} p-2 rounded-3xl shadow-lg relative`}
    >
      <div className="text-center mb-8">
        <h1 className="font-bold text-transparent bg-clip-text text-4xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-b from-[#757AD0] to-[#CD89D7]">
          Tracks
        </h1>
      </div>

      <img src="/images/tracks/Ellipse34.png" alt="" className="absolute -left-4 top-0"/>
      <img src="/images/tracks/Ellipse34.png" alt="" className="absolute -right-4 rotate-180 -bottom-56"/>

      <div className="grid grid-cols-1 w-full lg:w-5/6 gap-6 items-center mt-32 m-auto">
        {Tracks.map((tracks) => (
          <div
            key={tracks.id}
            className="bg-gradient-to-r from-[#e09feaba] to-[#68b0daba] backdrop-blur-md shadow-md rounded-3xl p-8 flex  justify-center items-center hover:shadow-lg transition-shadow h-[370px]"
          >
            <p className="w-2/4 text-md lg:text-md sm:text-3xl">
                {tracks.info}
            </p>
            <img
              src={tracks.logo}
              alt={`Sponsor ${tracks.id}`}
              className="w-2/4 h-full p-4 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
