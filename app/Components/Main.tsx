import React from "react";
import Image from "next/image";
import Link from "next/link";
import Category from "./Category";
import News from "./News";
import { date } from "../db";

function Main() {
  return (
    <div className="pt-6">
      <Link href={"/"} className="flex gap-1 mb-8 items-center">
        <Image src={"/back2.svg"} alt="back.svg" width={18} height={20} />
        <span className="text-[13px] font-[300]">Back to About Us</span>
      </Link>
      <div className="flex flex-col gap-4 mb-6 md:mb-10">
        <h1 className="font-[500]  text-[48px] w-full md:text-[56px]">
          New at McKinsey Blog
        </h1>
        <p className="text-[18px] font-[300] leading-[34px] text-start w-[100%]">
          A collection of stories about our people, our capabilities, our
          research, and the ever-changing face of our firm.
        </p>
      </div>
      <div className="flex gap-2 mb-8">
        <Link
          href={
            "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmck.co%2F3AirTcu"
          }
          className="w-[34px] h-[34px] hover:bg-blue-600 hover:translate-y-[-3px] transition-[600ms] rounded-[999px] bg-black flex justify-center items-center"
        >
          <span className="text-[20px] font-bold tracking-[2px] text-white">
            in
          </span>
        </Link>
        <Link
          href={
            "https://twitter.com/intent/post?url=https%3A%2F%2Fmck.co%2F3AirTcu&via=McKinsey&text=New%20at%20McKinsey%20Blog"
          }
          className="w-[34px] h-[34px] hover:bg-blue-600 hover:translate-y-[-3px] transition-[600ms] rounded-[999px] bg-black flex justify-center items-center"
        >
          <span className="text-[20px] font-bold tracking-[2px] text-white">
            X
          </span>
        </Link>
        <Link
          href={
            "https://www.facebook.com/checkpoint/1501092823525282/?next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fshare%3Fhref%3Dhttps%253A%252F%252Fmck.co%252F3AirTcu%26display%3Dpopup%26app_id%3D1382278882079245"
          }
          className="w-[34px] h-[34px] hover:bg-blue-600 hover:translate-y-[-3px] transition-[600ms] rounded-[999px] bg-black flex justify-center items-center"
        >
          <span className="text-[20px] font-bold tracking-[2px] text-white">
            f
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-4 mb-5 md:justify-between md:items-center pb-3 border-b-[0.1px] border-b-gray-300 md:flex-row">
        <h1 className="font-[600] text-black">BROWSE ALL POSTS</h1>
        <div className="flex gap-2">
          <span className="font-[300]">Browse by:</span>
          <Category />
        </div>
      </div>
      <div className="flex flex-wrap gap-y-6 ">
        {date.map((e: any) => (
          <News
            key={e.id}
            img={e.img}
            title={e.title}
            descrtion={e.description}
            company={e.company}
          />
        ))}
        
      </div>
    </div>
  );
}

export default Main;
