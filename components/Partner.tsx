import type { NextPage } from "next";

const PartnerSection: NextPage = () => {
  return (
    <section className=" flex justify-center items-center lg:min-h-[40vh] md:min-h-[60vh] min-h-[30vh] ">
         <div className=" flex flex-col gap-0">
          <div className="   gap-5">
            <p className=" text-xl ">
              <span className="font-black font-avenir ">Backed by the best</span>
            </p>
            <p className=" text-xl ">You are in good hands. Promise.</p>
          </div>
          <div className=" flex flex-row lg:gap-32 md:gap-25 gap-15 max-sm:flex-col max-sm:justify-center max-sm:items-center">
            <img
              className=" w-45 h-12 overflow-hidden shrink-0 object-cover"
              alt=""
              src="https://framerusercontent.com/images/zXzMv9yCJ3LKBTEQY1Rc8Acta0.png?scale-down-to=512"
            />
            <img
              className=" w-45 h-10 overflow-hidden shrink-0 object-cover"
              alt=""
              src="https://framerusercontent.com/images/wpDLbt71QGexyBw7c8cEm4to.png?scale-down-to=512"
            />
            <img
              className=" w-45 h-12 overflow-hidden shrink-0 object-cover"
              alt=""
              src="https://framerusercontent.com/images/33y8UsD16OLVsjaKiEGkRnn4n04.png?scale-down-to=512"
            />
          </div>
        </div> 
    </section>
  );
};

export default PartnerSection;
