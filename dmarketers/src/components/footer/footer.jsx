import Navbar from "../navbar/Navbar";
import { buttomAsset } from "../../assets/asset";
import FooterNav from "./footerNav";

export default function Footer() {
  return <>
    <footer className="bg-[#00080C] py-20 h-auto mt-10">
        <div className="text-center">
        <h2 className="text-[48px]  text-white font-[800] mr-5">
          Join Us
        </h2>
        </div>
        <div className="flex justify-center gap-2 mt-10">
           <img src={buttomAsset.frame46} alt="telegram" className="w-[40px] h-[40px]" />
           <img src={buttomAsset.twitter} alt="twitter"  className="w-[40px] h-[40px]" />
        </div>

      <div className="rounded-[400px] mt-5 border-none h-[4px] bg-[#3AA4D9]">
      <FooterNav/>
      </div>
  </footer>
  </>
}