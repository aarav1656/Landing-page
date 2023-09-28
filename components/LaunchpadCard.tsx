import type { NextPage } from "next";

const LaunchpadCard: NextPage = () => {
  return (
    <div className="w-full h-screen text-center text-xl text-darkgray font-avenir flex flex-col gap-5 justify-center items-center h-60vh">
      <div className="max-w-[766px] flex flex-col justify-center items-center gap-5">
        <div className="text-45xl tracking-[-0.04em] leading-[100%] font-extrabold">
          Introducing the first web3 community launchpad
        </div>
        <div className="w-[650px]">
          Kyte is an ultimate web3 community launchpad that makes it stupidly
          easy to launch and grow a crypto native trusted audience across the
          internet and blockchain.
        </div>
      </div>
      <div className="flex gap-[40px] text-base">
        <div className="rounded-lg bg-mediumseagreen-100 flex py-2 px-4 items-center justify-center border-[1px] border-solid border-mediumseagreen-400">
          <div className="font-extrabold w-28 h-4 shrink-0 text-white">
            Start Earning
          </div>
        </div>
        <div className="rounded-lg bg-gray-100 flex py-2 px-4 items-center justify-center gap-[6px] text-darkgray border-[1px] border-solid border-darkslategray w-28 h-4">
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
