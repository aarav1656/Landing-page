import type { NextPage } from "next";
import LaunchpadCard from "../components/LaunchpadCard";
import TrustCard from "../components/TrustCard";
import Container from "../components/Container";
import Container1 from "../components/Container1";
import Navbar from "../components/Navbar";
import DashBoardCol from "../components/dashboardcol";
import PartnerSection from "../components/Partner";
import DetailsSection from "../components/DetailsSection";
import Gridcol from "../components/Gridcol";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Foot from "../components/Footer";


const AlternateVersion: NextPage = () => {
  return (
    <>
    
   
    <div className="relative bg-black w-full  overflow-hidden text-center text-xs text-gray-300 ">
    <Navbar />
    
      <div className="absolute top-[-534.13px] left-[calc(50%_-_944px)] rounded-[50%] bg-mediumseagreen-200 [filter:blur(600px)] w-[1327.95px] h-[674.74px] [transform:_rotate(-10.93deg)] [transform-origin:0_0]" />
      <div className="absolute top-[-855px] left-[calc(50%_+_777.21px)] rounded-[50%] bg-mediumseagreen-300 [filter:blur(600px)] w-[1327.95px] h-[674.74px] [transform:_rotate(38.19deg)] [transform-origin:0_0]" />
     
      <LaunchpadCard />
      <DashBoardCol />
      <PartnerSection />
      <DetailsSection />
      <DashBoardCol />
      {/* <Gridcol /> */}
      <Contact />
      <Faq />
      <Foot />



    </div>
    </>
  );
};

export default AlternateVersion;
