import Bottom from "../components/bottom/bottom";
import Footer from "../components/footer/footer";
import Header from "../components/header/Header";
import Work from "../components/howItWorks/Work";
import Navbar from "../components/navbar/Navbar";
import TaskContent from "../components/taskprograms/TaskContent";


export default function Home() {
  return <>
       <div className='container  p-[3rem]  font-semibold trap' >
      <Navbar />
      <Header />
      <Work />
      <TaskContent />
      <Bottom />
      <Footer/>
      </div>
  </>
}