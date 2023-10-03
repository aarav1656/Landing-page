import type { NextPage } from "next";

const LaunchpadCard: NextPage = () => {
  return (
    <div className=" w-full h-[75vh] max-sm:h-[70vh] text-center text-xl text-darkgray font-Avenir  flex flex-col gap-5 justify-center items-center">
      <div className=" md:max-w-[766px] sm:max-w-[600px] max-sm:max-w-[380px]  flex flex-col justify-center items-center gap-5 ">
      <div className=" lg:text-45xl md:text-[50px] sm:text-[50px]  text-[45px] tracking-[-0.04em] leading-[100%] font-extrabold   ">
        <span className="bg-gradient-to-r from-white to-gray-500 inline-block text-transparent bg-clip-text">
          Introducing the first web3 community launchpad
          </span>
        </div>
        <div className="md:max-w-[650px] sm:max-w-[500px] max-sm:w-[300px] max-sm:text-[14px] ">
          Kyte is an ultimate web3 community launchpad that makes it stupidly
          easy to launch and grow a crypto native trusted audience across the
          internet and blockchain.
        </div>
        
      </div>
      {/* <img
        className="absolute top-[68px] left-[-237px] rounded-lg w-[1440px] h-[1332px] object-cover"
        alt=""
        src="/undefined2.png"
      /> */}
      <div className="flex  gap-[40px] text-base  ">
        <div className="rounded-lg bg-mediumseagreen-100 flex py-2 px-4 items-center justify-center border-[1px] border-solid border-mediumseagreen-400">
          <div className="  font-extrabold w-28 h-4 shrink-0 text-white">
            Start Earning
          </div>
        </div>
        <div className="rounded-lg bg-gray-100 flex  py-2 px-4 items-center justify-center gap-[6px] text-darkgray border-[1px] border-solid border-darkslategray w-28 h-4">
          <div className="relative tracking-[-0.03em] leading-[0%] font-extrabold flex items-center justify-center">
            Start Growing
          </div>
          <img
            className="relative w-2 h-4 object-cover"
            alt=""
            src="/undefined3.png"
          />
        </div>
      </div>
    </div>
  );
};

export default LaunchpadCard;
