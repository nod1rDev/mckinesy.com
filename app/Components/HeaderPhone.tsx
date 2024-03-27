import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import Search from "./Search";

function HeaderPhone() {
  return (
    <div className="flex lg:hidden py-2 px-3 items-center bg-white border-b-[0.5px]  border-b-slate-300">
      <Menu />
      <Logo />
      <Search />
    </div>
  );
}

export default HeaderPhone;
