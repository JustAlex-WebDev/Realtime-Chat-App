import React from "react";

const Authenthication = () => {
  return (
    <div className="bg-[#FAD4D4] h-[100vh] flex flex-col justify-center items-center pattern">
      <div className="z-1 bg-[#FAD4D4] border-2 hover:border-4 border-[#FFF2F2] shadow-2xl w-[11rem] sm:w-[18rem] md:w-[25rem] h-[11rem] sm:h-[18rem] md:h-[25rem] flex justify-center items-center rotate-45">
        <div className="flex flex-col gap-4 -rotate-45 justify-center items-center">
          <span className="text-3xl sm:text-5xl md:text-7xl font-bold text-[#F47C7C]">
            Chatify
          </span>
          <div className="flex justify-center gap-2 sm:gap-4">
            <span className="text-sm sm:text-lg md:text-2xl font-bold text-[#EF9F9F] cursor-pointer opacity-60 hover:opacity-100">
              Sign In
            </span>
            <span className="text-sm sm:text-lg md:text-2xl font-bold text-[#EF9F9F] cursor-pointer opacity-60 hover:opacity-100">
              Sign Up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authenthication;
