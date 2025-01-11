import React from "react";
import { Michroma, Baumans, Mynerve, Caveat } from "next/font/google";

export const michorma = Michroma({
  weight: "400",
  subsets: ["latin"],
});

export const baumans = Baumans({
  weight: "400",
  subsets: ["latin"],
});

const Calendar = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-1 w-full min-h-screen p-4">
        <div className="text-center pb-10">
          <span
            style={michorma.style}
            className="text-center text-[60px] lg:text-[100px] bg-gradient-to-r from-[#757AD0] to-[#CD89D7] bg-clip-text text-transparent"
          >
            Save the Date
          </span>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-around w-full md:w-11/12 lg:w-9/12 p-3 sm:p-6 bg-gradient-to-r from-[#E09FEA] to-[#68B0DA] opacity-95 rounded-3xl border-solid bg-opacity-70 backdrop-blur-md shadow-[0px_20px_40px_0px_#000000] border-gradient-to-r from-[#dfa9e7] to-[#407bff] gap-6">
          <div className="flex flex-col items-center w-full lg:w-1/2 m-2 sm:m-4 p-3 sm:p-6 bg-white rounded-3xl shadow-md shadow-black opacity-90">
            <h1 className="text-2xl sm:text-4xl font-extrabold mb-3 sm:mb-6 text-zinc-950">
              FEBRUARY 2025
            </h1>

            <div className="w-full p-2 sm:p-6 bg-white rounded-xl shadow-black">
              {/* Days of week header */}
              <div className="grid grid-cols-7 text-center mb-2 sm:mb-4">
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-zinc-950 font-black text-xs sm:text-base"
                    >
                      {day}
                    </div>
                  )
                )}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center">
                {/* Week 1 */}
                <div className="h-8 sm:h-14"></div>
                <div className="h-8 sm:h-14"></div>
                <div className="h-8 sm:h-14"></div>
                <div className="h-8 sm:h-14"></div>
                <div className="h-8 sm:h-14"></div>
                <div className="h-8 sm:h-14"></div>
                <div className="h-8 sm:h-14 flex items-center justify-center text-zinc-950 font-bold text-sm sm:text-base">
                  1
                </div>

                {/* Remaining weeks */}
                {[
                  [2, 3, 4, 5, 6, 7, 8],
                  [9, 10, 11, 12, 13, 14, 15],
                  [16, 17, 18, 19, 20, 21, 22],
                  [23, 24, 25, 26, 27, 28],
                ].map((week) =>
                  week.map((day) => (
                    <div
                      key={day}
                      className={`h-8 sm:h-14 flex items-center justify-center text-zinc-950 font-bold text-sm sm:text-base ${
                        day === 15 ? "relative" : ""
                      }`}
                    >
                      <span
                        className={`
                          ${day === 15 ? "bg-blue-500 text-zinc-950" : ""}
                          w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center rounded-full
                          ${day === 15 ? "font-bold" : ""}
                        `}
                      >
                        {day}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Event Details Section */}
          <div className="flex flex-col align-center justify-center mt-2 lg:mt-8 w-full lg:w-1/3 bg-none p-4 rounded-lg text-white">
            <h2
              className="text-lg sm:text-xl font-bold mb-2"
              style={michorma.style}
            >
              Upcoming Event
            </h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <span
                  style={baumans.style}
                  className="font-semibold w-16 sm:w-20 text-sm sm:text-base"
                >
                  Date:
                </span>
                <span style={baumans.style} className="text-sm sm:text-base">
                  February 15, 2025
                </span>
              </div>
              <div className="flex items-center">
                <span
                  style={baumans.style}
                  className="font-semibold w-16 sm:w-20 text-sm sm:text-base"
                >
                  Event:
                </span>
                <span style={baumans.style} className="text-sm sm:text-base">
                  Ideathon 2025
                </span>
              </div>
              <div className="flex items-center">
                <span
                  style={baumans.style}
                  className="font-semibold w-16 sm:w-20 text-sm sm:text-base"
                >
                  Time:
                </span>
                <span style={baumans.style} className="text-sm sm:text-base">
                  10:00 AM - 5:00 PM
                </span>
              </div>
              <div className="flex items-center">
                <span
                  style={baumans.style}
                  className="font-semibold w-16 sm:w-20 text-sm sm:text-base"
                >
                  Venue:
                </span>
                <span style={baumans.style} className="text-sm sm:text-base">
                  Innovation Hub, Tech Park
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
