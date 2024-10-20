import './navbar.css';
import { Link } from 'react-router-dom';
import { navAsset } from '../../assets/asset';
export default function Navbar() {
  return <div>
    <div className='flex justify-evenly gap-10 items-center '>
      <Link to="/" className='text-4xl trap text-dmarket font-black'>Dmarketas</Link>
      <Link to="/home" className="nav-link">Marketing</Link>
      <Link to="/home" className="nav-link">Blogging</Link>
      <Link to="/home" className="nav-link">Make Money</Link>
      <Link to="/home" className="nav-link">Help and Guide</Link>
      <button to="/connect-wallet" className='flex justify-evenly bg-[#212529] w-[260px] h-[62px] text-center text-[24px] pt-[11px] pr-[16px] pl-[16px] pb-[18px]'>
       <span className='items-center mt-[10px]'> <img src={navAsset.vector} alt="img" /></span><span className='text-[#FFFF]'>Connect Wallet</span>
      </button>

    </div>
     
   </div>
 }