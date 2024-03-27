"use client";
import { useState } from "react";

const nav: object[] = [
  {
    id: 1,
    text: "Overview",
  },
  {
    id: 2,
    text: "Who we are",
  },
  {
    id: 3,
    text: "Our commitments",
  },
  {
    id: 4,
    text: "How we work",
  },
  {
    id: 5,
    text: "Alumni",
  },
  {
    id: 6,
    text: "Media",
  },
  {
    id: 7,
    text: "McKinsey Blog",
  },
];
function Nav() {
  const [active, setActive] = useState<number>(7);
  return (
    <div className="flex-1 ml-[150px] flex gap-5">
      {nav.map((e: any) => (
        <span
          onClick={() => setActive(e.id)}
          key={e.id}
          className={`${active === e.id ? "active" : ""} font-[300] cursor-pointer`}
        >
          {e.text}
        </span>
      ))}
    </div>
  );
}

export default Nav;
