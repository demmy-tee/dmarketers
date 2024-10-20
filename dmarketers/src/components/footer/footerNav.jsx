import { Link } from "react-router-dom"
export default function FooterNav() {
  return <div>
     <div className='flex justify-evenly gap-10 items-center '>
      <Link to="/" className='text-4xl trap text-dmarket font-black'>Dmarketas</Link>
      <Link to="/home" className="nav-link text-white">Marketing</Link>
      <Link to="/home" className="nav-link  text-white">Blogging</Link>
      <Link to="/home" className="nav-link  text-white">Make Money</Link>
      <Link to="/home" className="nav-link  text-white">Help and Guide</Link>
      </div>
  </div>
}