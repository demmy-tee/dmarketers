export default function WorkContent({ keys, description, img, message }) {
  return <>
    {(keys === 1 || keys === 3)?   <div className="w-[550px] h-[442.5px] rounded-[24px] bg-gradient-to-b from-[#3AA4D91A] to-[#FFFFFF1A] mt-[50px] grid-row-2 ]">
      { (keys === 2 ||keys === 1 )? <p className="text-[48px] p-4 text-dmarket">{description} </p>: <p className="text-[48px] p-4 text-black">{description} </p>}
      <img src={img} alt="Work Content" className="place-items-center w-[200px] h-[161.25px] mx-auto" />
      <p className="text-[#212529] font-[400] text-[24px]">{message}</p>
  </div> :   <div className="w-[550px] h-[442.5px] rounded-[24px] bg-gradient-to-b from-[#3AA4D91A] to-[#FFFFFF1A] mt-4 grid-row-2">
      { (keys === 2 ||keys === 1 )? <p className="text-[48px] p-4 text-dmarket">{description} </p>: <p className="text-[48px] p-4 text-black">{description} </p>}
      <img src={img} alt="Work Content" className="place-items-center w-[200px] h-[161.25px] mx-auto" />
      <p className="text-[#212529] font-[400] text-[24px]">{message}</p>
  </div>}
  </>
}