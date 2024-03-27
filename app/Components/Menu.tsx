"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Menu() {
  const handleMenu = () => {};
  return (
    <div className="mr-6 lg:mr-10  ">
      <Link href={'/menu'}>
        <button onClick={handleMenu}>
          <Image src={"/menu.svg"} alt="menu" width={36} height={36} />
        </button>
      </Link>
    </div>
  );
}

export default Menu;
