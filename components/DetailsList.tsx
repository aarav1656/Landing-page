import type { NextPage } from "next";

const DetailsList: NextPage = () => {
  return (
    <div className="bg-blue-500 h-screen flex justify-center items-center">
        <div className="grid md:grid-cols-3 grid-cols-2 max-sm:grid-cols-1 gap-5">
    {
  [1, 1, 1, 1, 1, 1].map((_, index) => (
    <div key={index} className=" w-72 h-20 text-left flex  gap-2 bg-green-500">
        <div className="rounded-[50%] box-border w-3 h-3 border-[2px] border-solid border-white " /> 
        <div className="bg-yellow-300">
        <div className=" text-white inline-block w-60 h-6 [-webkit-text-stroke:0.5px_#fff]">
        Lorem ipsum dolor sit consectetur
      </div>
      {/* <div className=" ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et eiusmod tempor incididunt ut labore
      </div> */}
      </div>
      
      
    </div>
  ))
}

</div>
    </div>
  );
};

export default DetailsList;
