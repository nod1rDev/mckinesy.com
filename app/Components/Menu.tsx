"use client";
import React from "react";
import Image from "next/image";


function Menu() {
  const handleMenu = () => {
    
  };
  return (
    <div className="mr-6 lg:mr-10  ">
      <button onClick={handleMenu}>
        <Image src={"/menu.svg"} alt="menu" width={36} height={36} />
      </button>
    </div>
  );
}

export default Menu;
