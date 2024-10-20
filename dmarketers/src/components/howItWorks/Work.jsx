import WorkContent from "./WorkContent"
import { workContent } from "./works"
export default function Work() {
  return <>
    <div className="mt-28 ">
      <div className="text-center text-[48px] font-[600]">
        <h2 className=" text-[#212529]">How It Works</h2> 
        <p className="text-[#21252999] text-[24px] font-[500px] ">A simple, visual representation of the steps for users to post and earn</p>
      </div>
        <div className="mt-[3rem] grid grid-cols-2">
        {workContent.map((content, index) => {
            return <WorkContent  key={index} keys={index} description={content.description} img={content.img} message={content.content} />
          })}

        </div>
    </div>
  </>
}