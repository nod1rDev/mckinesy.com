import React from "react";
import MenuPage from "../Components/MenuPage";
import Right from "../Components/Right";

function page() {
  return (
    <div className="flex w-full h-full ">
      <MenuPage />
      <Right />
    </div>
  );
}

export default page;
