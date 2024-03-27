import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div className="flex-1 lg:flex-none lg:mr-[40px]">
    <Link className="" href="/">
    <h1 className="logo font-[400]  text-[24px] relative h-[80px]">McKinsey </h1>
    </Link>
    </div>
  );
}

export default Logo;
