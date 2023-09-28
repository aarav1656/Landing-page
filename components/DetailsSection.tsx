import type { NextPage } from "next";

const DetailsSection: NextPage = () => {
  return (
    <section className="">
      <div className="w-full min-h-[60vh] text-center font-avenir flex flex-col gap-12 justify-center items-center">
        <div className="max-w-[766px] flex flex-col justify-center items-center gap-5 text-darkgray">
          <div className="tracking-[-0.04em] leading-[100%] font-extrabold text-29xl">
            Easiest way to launch <br /> and grow a web3 community
          </div>
          <div className="w-[650px] text-xl">
            Kyte is building a launchpad for web3 communities/projects to build,
            scale and engage a legit and trusted audience across socials. Our
            platform is like a social hub where communities can scale their crypto
            native audience while building trust and loyalty with the community.
          </div>  
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
