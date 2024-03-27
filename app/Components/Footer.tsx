import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="w-full bg-white mt-6 text-[#000000]">
      <div className=" px-3 mx-auto  md:px-0 md:max-w-[88%] pt-[76px] ">
        <Logo />
        <div className="flex flex-col md:flex-row  gap-6  mb-6 md:mb-8  max-w-full items-center  lg:justify-between">
          <div className="mt-4">
            <form className="">
              <div className="flex flex-col gap-4 mt-3">
                <span className="text-[20px] font-[500]">Subscribe</span>
                <span className="text-[#333333] font-[300] leading-[24px]">
                  Select topics and stay current with our latest insights
                </span>
              </div>
              <div className="flex gap-6 mt-6 items-center">
                <input
                  type="email"
                  className="border  border-black h-[48px] pl-3 placeholder:text-[#333333] placeholder:font-[300]"
                  required
                  placeholder="Email address"
                />
                <button className="w-[91px] h-[48px] bg-blue-500 border border-blue-500 hover:bg-white hover:text-blue-500 text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col  gap-4  md:items-end">
            <div className="flex max-w-full items-center  md:justify-end lg:max-w-[480px] flex-wrap gap-2 gap-y-4">
              <span className="font-[600] text-[14px]">Contact Us</span>
              <span className="font-[600] text-[14px]">Faq</span>
              <span className="font-[600] text-[14px]"> Privacy policy</span>
              <span className="font-[600] text-[14px]">Cookie preferences</span>

              <span className="font-[600] text-[14px]">Terms of use</span>
              <span className="font-[600] text-[14px]">
                Local language information
              </span>
              <span className="font-[600] text-[14px]">
                Accessibility statement
              </span>
            </div>
            <div className="flex gap-2 mb-8">
              <Link
                href={
                  "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmck.co%2F3AirTcu"
                }
                className="w-[34px] h-[34px] hover:bg-blue-600 hover:translate-y-[-3px] transition-[600ms] rounded-[999px] bg-black flex justify-center items-center"
              >
                <span className="text-[20px] font-bold tracking-[2px] text-white">
                  in
                </span>
              </Link>
              <Link
                href={
                  "https://twitter.com/intent/post?url=https%3A%2F%2Fmck.co%2F3AirTcu&via=McKinsey&text=New%20at%20McKinsey%20Blog"
                }
                className="w-[34px] h-[34px] hover:bg-blue-600 hover:translate-y-[-3px] transition-[600ms] rounded-[999px] bg-black flex justify-center items-center"
              >
                <span className="text-[20px] font-bold tracking-[2px] text-white">
                  X
                </span>
              </Link>
              <Link
                href={
                  "https://www.facebook.com/checkpoint/1501092823525282/?next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fshare%3Fhref%3Dhttps%253A%252F%252Fmck.co%252F3AirTcu%26display%3Dpopup%26app_id%3D1382278882079245"
                }
                className="w-[34px] h-[34px] hover:bg-blue-600 hover:translate-y-[-3px] transition-[600ms] rounded-[999px] bg-black flex justify-center items-center"
              >
                <span className="text-[20px] font-bold tracking-[2px] text-white">
                  f
                </span>
              </Link>
              <Link
                href={"https://www.youtube.com/mckinsey"}
                className="w-[34px] h-[34px] hover:bg-blue-600 hover:translate-y-[-3px] transition-[600ms] rounded-[999px] bg-black flex justify-center items-center"
              >
                <span className="text-[20px] font-bold tracking-[2px] text-white">
                  <Image
                    src={"/youtube.svg"}
                    alt="youtube"
                    width={24}
                    height={24}
                  />
                </span>
              </Link>
              <Link
                href={"https://www.mckinsey.com/insights/rss"}
                className="w-[34px] h-[34px] hover:bg-blue-600 hover:translate-y-[-3px] transition-[600ms] rounded-[999px] bg-black flex justify-center items-center"
              >
                <span className="text-[20px] font-bold tracking-[2px] text-white">
                  <Image
                    src={"/wifi2.png"}
                    alt="youtube"
                    width={24}
                    height={24}
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex pt-6 border-t-[0.5px] border-t-slate-300 flex-col gap-6  md:flex-row md:justify-between">
          <div className="flex flex-col lg:items-center lg:flex-row ">
            <span className="text-[14px] gap-3 text-[#333333] font-[300] max-w-[380px]">
              McKinsey Insights - Get our latest thinking on your iPhone, iPad,
              or Android device.
            </span>
            <div className="flex gap-2 mt-3 lg:mt-0 max-h-[50px]">
                <Image src={'/app-store.svg'} alt="app-store" width={120} height={39}/>
                <Image src={'/google-play2.svg'} alt="app-store" width={120} height={39}/>
            </div>
          </div>
          <div className="text-[#333333] text-[14px] font-[300]">© 1996-McKinsey & Company 2024</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
