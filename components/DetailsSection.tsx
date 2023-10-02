import type { NextPage } from "next";

const DetailsSection: NextPage = () => {
  return (
    <section className="">
         <div className=" w-full min-h-screen text-center  font-avenir  flex flex-col gap-12 justify-center  items-center ">
        <div className=" md:max-w-[766px] sm:max-w-[600px] max-sm:max-w-[380px]  flex flex-col justify-center items-center gap-5 max-sm:  py-10  ">
      <div className=" lg:text-[56px] md:text-[44px] sm:text-[44px]  text-[35px] tracking-[-0.04em] leading-[100%] font-extrabold   ">
      Easiest way to launch <br /> and grow a web3 community
        </div>
        <div className="md:max-w-[650px] sm:max-w-[500px] max-sm:w-[300px] max-sm:text-[14px] text-[18px] max-sm:text-justify ">
        Kyte is building a launchpad for web3 communities/projects to build,
          scale and engage a legit and trusted audience across socials. Our
          platform is like a social hub where communities can scale their crypto
          native audience while building trust and loyalty with the community.  
        </div>
        
      </div>
      {/* ******************************************************************************************************************************************** */}
      <div className=" md:mt-5">
      <div className="  flex justify-center items-center">
        <div className="grid md:grid-cols-3 grid-cols-2 max-sm:grid-cols-1 gap-8 max-sm:gap-3">
    {
  [1, 1, 1, 1, 1, 1].map((_, index) => (
    <div key={index} className=" w-80 h-20 text-left flex  gap-2 ">
        <div className="rounded-full box-border w-3 h-2 border-[2px] border-solid border-white " /> 
        <div className="">
        <div className=" text-white inline-block w-60 h-6 text-2xl">
        Lorem ipsum dolor sit consectetur
      </div>
      <div className="text-4xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et eiusmod tempor incididunt ut labore
      </div>
      </div>
      
      
    </div>
  ))
}

</div>
    </div>


      </div>
          {/* ******************************************************************************************************************************************** */}
     
    </div>
    </section>
  );
};

export default DetailsSection;
