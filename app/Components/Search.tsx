"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Search() {
  const handleSearch = () => {
    console.log("hi");
  };
  return (
    <div className="md:flex items-end flex-col lg:gap-4 ">
      <div className=" hidden md:flex items-center">
        <Link href={"/"}>
          <span className="text-[#2251ff] cursor-pointer font-[300] mr-1">
            Sign In
          </span>
        </Link>
        <span className="text-inherit mr-1">|</span>
        <Link href={"/"}>
          <span className="text-[#2251ff] cursor-pointer font-[300]">
            Subscribe
          </span>
        </Link>
      </div>
      <button onClick={handleSearch}>
        <Image src={"/serch.svg"} alt="search" width={32} height={33} />
      </button>
    </div>
  );
}

export default Search;
