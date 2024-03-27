"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nav: object[] = [
  {
    id: 1,
    text: "Industry",
  },
  {
    id: 2,
    text: "Capability",
  },
  {
    id: 3,
    text: "Featured Insigts",
  },
  {
    id: 4,
    text: "Location",
  },
  {
    id: 5,
    text: "Careers",
  },
  {
    id: 6,
    text: "About Us",
  },
  {
    id: 6,
    text: "McKinsey Blog",
  },
  {
    id: 7,
    text: "Email Subscription",
  },
];

function MenuPage() {
  const [active, setActive] = useState<number>(6);
  return (
    <div className=" bg-[#051c2c] w-full max-w-[400px] text-white font-[300] h-full">
      <header className="flex py-2 px-3 items-center  border-b-[0.2px]  border-b-slate-300">
        <div className="mr-2 md:mr-4 px-2 py-4 md:py-4 md:px-5">
          <Link href={"/"}>
            <Image src={"/x.svg"} alt="back" width={24} height={24} />
          </Link>
        </div>
        <Link className="flex-1" href="/">
          <h1 className="logo font-[400] -1 text-white text-[24px] relative h-[80px]">
            McKinsey{" "}
          </h1>
        </Link>
        <Image
          className="block md:hidden"
          src={"/search-white.svg"}
          alt="search"
          width={32}
          height={32}
        />
      </header>
      <main className="flex flex-col gap-6 pt-20 px-8 ">
        {nav.map((e: any) => (
          <span
            key={e.id}
            onClick={() => setActive(e.id)}
            className={`text-[18px] cursor-pointer ${
              active == e.id ? "activen" : ""
            }  font-[600] tracking-wider`}
          >
            {e.text}
          </span>
        ))}
      </main>
    </div>
  );
}

export default MenuPage;
