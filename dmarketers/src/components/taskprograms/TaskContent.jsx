import Task from "./task"
import { tasks } from "./tasks"
export default function TaskContent() {
  return <>
    <div className="mt-14">
      <h2 className="text-center font-[600] text-[48px]">
        Task programs
      </h2>
      <div className="grid grid-cols-2">
        {tasks.map((content, index) => {
          return <Task description={content.description} content={content.content} list1={content.list1} list2={content.list2} index={index} key={index} />
        })}
      </div>

  </div>
  </>
}