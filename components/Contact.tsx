import type { NextPage } from "next";

const Contact: NextPage = () =>{
    return(
        <section className="w-full h-screen  flex justify-center items-center">
            <div className="flex justify-center items-center ">
            <div className="text-base text-white  flex flex-col gap-10 items-center justify-center max-w-[600px]">

            <img
          className=" w-44 h-44 object-cover"
          alt=""
          src="/undefined11.png"
        />  
        
        <div className=" text-45xl tracking-[-0.04em] leading-[100%] font-medium font-futura-md-bt   inline-block ">
          Lorem ipsum dolor sit amet consecteur
        </div>
        <div className=" rounded-lg bg-mediumseagreen-100 flex flex-row py-2 px-4 items-center justify-center border-[1px] border-solid border-mediumseagreen-400">
          <div className=" leading-[0%] font-extrabold flex items-center justify-center w-28 h-4 shrink-0">
            Book a Call
          </div>
        </div>
        
      </div>

            </div>  

        </section>
    )
}

export default Contact;