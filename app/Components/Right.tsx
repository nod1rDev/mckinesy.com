import Image from "next/image";
import React from "react";

function Right() {
  return (
    <div className="hidden md:flex flex-col w-full bg-[#f0f0f0]">
      <form className="min-w-full relative">
        <input
          type="text"
          className="w-full h-[76px] lg:h-[90px] pl-[48px] pr-[108px] placeholder:text-[18px] md:placeholder:text-[20px] font-[600] text-[#333333]"
          placeholder="Type to search..."
        />
        <Image
          src={"/serch.svg"}
          height={32}
          width={32}
          alt="search"
          className=" absolute right-3 top-6"
        />
      </form>
      <div className="flex flex-col gap-3 lg:gap-6 px-[10%] pt-[15%] lg:pt-[10%]">
        <h1 className="text-[28px] font-[600] text-black border-b-[1.8px] pb-3 lg:pb-6 border-b-slate-300">
          McKinsey Blog
        </h1>
        <div className="flex flex-col gap-4">
          <span className="text-[#333333] text-[10px] lg:text-[16px] font-[300]">
            A collection of stories about our people, our capabilities, our
            research, and the ever-changing face of our firm.
          </span>
          <span className="text-black cursor-pointer font-[500]">Read more stories  -{`>`}</span>
        </div>
      </div>
    </div>
  );
}

export default Right;
