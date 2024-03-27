import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import Search from "./Search";
import Nav from "./Nav";

function HeaderDesktop() {
  return (
    <div className=" hidden lg:flex py-6 px-5 items-center bg-white border-b-[0.5px]  border-b-slate-300">
      <Menu />
      <Logo />
      <Nav />
      <Search />
    </div>
  );
}

export default HeaderDesktop;
