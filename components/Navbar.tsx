import type { NextPage } from "next";

const Navbar: NextPage = () => {
  return (
    <section className="flex">
      <div className=" flex lg:justify-around md:justify-between box-border md:w-full h-10 sm:w-full flex-row py-2 px-4 lg:px-0 items-center text-white border-b-[1px] border-solid border-mediumseagreen-500">
        <div className="h-6 flex flex-row items-center justify-center gap-[24px]">
          <img
            className="relative w-12 h-[18.75px] object-cover"
            alt=""
            src="/undefined17.png"
          />
          <div
            className="hidden lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-[24px]"
            id="items"
          >
            <div className="relative leading-[72%] font-extrabold flex items-end justify-center w-10 shrink-0">
              About
            </div>
            <div className="relative leading-[72%] font-extrabold flex items-end justify-center w-12 shrink-0">
              Partners
            </div>
            <div className="relative leading-[72%] font-extrabold flex items-end justify-center w-20 shrink-0">
              Communities
            </div>
            <div className="relative leading-[72%] font-extrabold flex items-end justify-center w-12 shrink-0">
              Contact
            </div>
            <div className="relative leading-[72%] font-extrabold flex items-end justify-center w-14 shrink-0">
              Features
            </div>
            <div className="relative leading-[72%] font-extrabold flex items-end justify-center w-8 shrink-0">
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
