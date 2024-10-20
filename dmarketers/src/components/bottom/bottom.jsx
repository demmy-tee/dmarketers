import { buttomAsset } from "../../assets/asset"
export default function Bottom () {
  return <>
    <div className="flex mt-[10rem]">
          <div className="w-[634px] h-[261px] mt-[40px]">
        <p className="font-[700] font-[trap] text-[28px] ">
          GET GOING WITH Project X
        </p>
          <h1 className="font-bold text-[64px]">
        Post. <span className="text-dmarket"> Earn</span>. Grow with <span className="text-dmarket">  Project X!</span>
        </h1>
        <button className="w-[261px] h-[47px] p-4 border-2 rounded-[24px] border-[#3AA4D9] flex items-center justify-center">
          Join us on <span> <img src={buttomAsset.twitter} alt="icon" className="ml-4"/></span>
        </button>
    </div>
    
    <div className=" h-[471px] mr-[-550px] ]">
        <img src={buttomAsset.frame39} alt="icon" className="mb-[20px] relative  left-[350px]"/>
        <div className="">
           <img src={buttomAsset.frame40} alt="icon" className="mb-[20px]  relative left-[190px] " />
       </div>
        <img src={buttomAsset.frame41} alt="icon" className="mb-[20px]  relative left-[-20px]" />
    </div>
</div>
  </>
}