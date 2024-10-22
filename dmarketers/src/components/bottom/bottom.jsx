import { buttomAsset } from "../../assets/asset";
export default function Bottom () {
  return (
    <>
     <section className="bg-[#FFFFFF] h-auto">
     <div className="flex flex-col md:flex-row justify-between items-center w-full md:px-8 mt-5">
          <div className="text-center md:text-left md:w-1/2 md:pr-8">
        <h1 className="font-[700] text-[28px] text-[#212529">
          GET GOING WITH Project X
        </h1>
          <h1 className="font-[700] text-[32px] md:text-[64px] text-[#212529]">
        Post. <span className="text-dmarket"> Earn</span>. Grow with <span className="text-dmarket">  Project X!</span>
        </h1>
        <button className="bg-[transparent] cursor-pointer pt-[8px] pr-[24px] pb-[8px] pl-[24px] rounded-[24px] gap-2 border-[1px] border-[#3AA4D9] flex items-center">
          Join us on 
          <img src={buttomAsset.twitter} alt="icon" className="w-[28px] h-[28px]"/>
        </button>
    </div>
    
    <div className="mt-6 md:mt-0 md:w-1/2 md:flex md:justify-end">
        <img 
          src={buttomAsset.Bitcoin} 
          alt="Bitcoin Image" 
          className="w-[200px] h-[150px] md:w-[590px] md:h-[408.82px] object-contain"/>
    </div>
</div>
     </section>
    </>
  )
}