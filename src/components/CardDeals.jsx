import React from "react";
import { BasicCard } from "../assets";
import { PremiumCard } from "../assets";

function CardDeals() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10 bg-gradient-to-r from-black via-gray-800 to-black" section id="Deals">
      {/* Header */}
      <div className="mb-6 text-center px-4">
        <span
          className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-50 inline-block text-transparent bg-clip-text"
          style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}
        >
          Choose Your Plan
        </span>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap items-center justify-center w-full gap-6 px-4">
        {/* Basic Card */}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2 text-center">
          <img
            src={BasicCard}
            alt="Basic Card"
            className="w-full h-[400px] transition-transform duration-300 hover:scale-125 rounded-xl"
          />
        </div>

        {/* Premium Card */}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2 text-center">
          <img
            src={PremiumCard}
            alt="Premium Card"
            className="w-full h-[400px] transition-transform duration-300 hover:scale-125 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default CardDeals;
