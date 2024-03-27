import React from "react";
import HeaderPhone from "../Components/HeaderPhone";
import Main from "../Components/Main";
import Footer from "../Components/Footer";
import HeaderDesktop from "../Components/HeaderDesktop";

function Blog() {
  return (
    <>
      <HeaderPhone />
      <HeaderDesktop />
      <div className=" min-h-full px-3 mx-auto md:px-0 md:max-w-[88%] ">
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default Blog;
