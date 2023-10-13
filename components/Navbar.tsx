import type { NextPage } from "next";
import Link from "next/link";

const Navbar: NextPage = () => {
  return (
    <section className="flex justify-center ">
      <div className=" flex lg:justify-around md:justify-between box-border md:w-[65vw] h-10 sm:w-full flex-row py-2 px-4 lg:px-0 items-center text-white border-b-[1px] border-solid border-mediumseagreen-500">
        <div className="h-6 flex flex-row items-center justify-center gap-[24px]">
          <img
            className="w-12 h-[18.75px] object-cover"
            alt=""
            src="/undefined17.png"
          />
          <div
            className="hidden lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-[24px]"
            id="items"
          >
            <div className="font-extrabold flex items-center justify-center ">
              <Link href="#about" className=" no-underline text-white">
              About
              </Link>
            </div>
            <div className=" font-extrabold flex items-end justify-center w-12 shrink-0">
            <Link href="#partners" className=" h-4 w-auto no-underline text-white">
            Partners
              </Link>
             
            </div>
            <div className=" font-extrabold flex items-end justify-center w-20 shrink-0">
            <Link href="#communities" className=" h-4 w-auto no-underline text-white">
              Communities
              </Link>
            </div>
            <div className=" font-extrabold flex items-end justify-center w-12 shrink-0">
            <Link href="#contact" className=" h-4 w-auto no-underline text-white">
              Contact
              </Link>
              
            </div>
            <div className=" font-extrabold flex items-end justify-center w-14 shrink-0">
              Features
            </div>
            <div className=" font-extrabold flex items-end justify-center w-8 shrink-0">
              Team
            </div>
          </div>
        </div>
        <div
          className="hidden md:flex md:flex-row md:items-center md:justify-end md:gap-[24px]"
          id="registerbuttons"
        >
          <div className="relative leading-[147.87%] font-extrabold inline-block w-20 shrink-0">
            Register Now
          </div>
          <div className="rounded-lg bg-mediumseagreen-100 flex flex-row py-1 px-4 items-center justify-center border-[0.5px] border-solid border-mediumseagreen-400">
            <div className="relative leading-[123.87%] font-extrabold flex items-center justify-center w-20 h-4 shrink-0">
              Start Earning
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
