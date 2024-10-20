export default function Task({ description,content, list1,list2, index }) {
  
  return <>
    {index === 1|| index ==3 ?<div className="bg-[#F3F3F3]  w-[560px] h-[359px] border-t-[8px] border-t-[#3AA4D9] rounded-b-[24px] p-10  mt-[450px]">
        <h3 className="font-[700] text-[32px] text-[#212529]"> {description}</h3>
      <div >
         <p className="">
        {content}
      </p>
      <ol className="p-5 ">
        <li>{list1 }</li>
        <li>{list2 }</li>
      </ol>
     </div>
  </div>:<div className="bg-[#F3F3F3] mt-11 w-[560px] h-[359px] border-t-[8px] border-t-[#3AA4D9] rounded-b-[24px] p-10 ">
        <h3 className="font-[700] text-[32px] text-[#212529]"> {description}</h3>
      <div >
         <p className="">
        {content}
      </p>
      <ol className="p-5 ">
        <li>{list1 }</li>
        <li>{list2 }</li>
      </ol>
     </div>
  </div>}
  </>
}