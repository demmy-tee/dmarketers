import { headerAsset } from "../../assets/asset"
export default function Header() {
  return <>
    <div className="flex justify-between items-center trap">
      <div className="w-[576px]">
          <h1 className="font-bold text-[64px]">
        Post. <span className="text-dmarket"> Earn</span>. Grow with <span className="text-dmarket">  Project X!</span>
        </h1>
        <p className="font-[500] text-[24px] text-[#21252999]
]
]">
          Join our community, complete task and get rewarded. Boost your Business with our ad platform
        </p>
        <button className=" bg-[#212529] w-[260px] h-[62px] text-center text-[24px] pt-[11px] pr-[16px] pl-[16px] pb-[18px] text-white mt-10"> Get started</button>
      </div>
      
      <div className="mt-[150px]">
        <img src={headerAsset.rafiki} alt="img" className="w-[590px] h-[438.97]" />
      </div>

    </div>
  </>
}