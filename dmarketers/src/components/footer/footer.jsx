import Navbar from "../navbar/Navbar";
import { buttomAsset } from "../../assets/asset";
import FooterNav from "./footerNav";

export default function Footer() {
  return <>
    <div className=" h-[460px] bg-[#00080C] items-center mt-80">
        <h2 className="text-[48px] font-[trap] text-white mr-5">
          Join Us
        </h2>
        <div className="flex">
          <span><img src={buttomAsset.frame46} alt="telegram" /></span>
          <span><img src={buttomAsset.twitter} alt="twitter" /></span>
        </div>

      <div className="border-t-2 rounded-[400px]">
   <FooterNav/>
      </div>
  </div>
  </>
}