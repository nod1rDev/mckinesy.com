import Image from "next/image";
import React from "react";

function News(props: {
  img: string;
  title: string;
  descrtion: string;
  company: string;
}) {
  return <div className="max-w-[338px] mx-auto cursor-pointer flex hover:shadow-[0_0_24px_0_rgba(0,0,0,.3)] md:max-w-[310px] flex-col lg:max-w-[386px]">
    <Image src={props.img} className="block md:hidden lg:hidden " alt="img" height={212} width={338}/>
    <Image src={props.img} className="hidden md:block lg:hidden" alt="img" height={212} width={338}/>
    <Image src={props.img} className="max-w-full hidden md:hidden lg:block" alt="img" height={212} width={386}/>
    <div className="flex px-[16px] py-[20px] flex-col gap-4 bg-white">
        <h2 className="text-[22px] leading-[38px] w-full text-black h-[110px] max-h-[160px] font-[500]">{props.title}</h2>
        <p className="h-[120px] max-h-[160px] text-[15.9px]  leading-[24px] font-[300] text-black">{props.descrtion}</p>
        <span className="font-[300]">{props.company}</span>
    </div>
  </div>;
}

export default News;
