import './navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navAsset } from '../../assets/asset';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <h1 className="text-[#3AA4D9] text-[24px] md:text-[32px] font-[900]">Dmarketas</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#212529] text-[18px] md:text-[16px] font-[500]">
              Marketing
            </Link>
            <Link href="/" className="text-[#212529] text-[18px] md:text-[16px] font-[500]">
              Blogging
            </Link>
            <Link href="/" className="text-[#212529] text-[18px] md:text-[16px] font-[500]">
              Make Money
            </Link>
            <Link href="/" className="text-[#212529] text-[18px] md:text-[16px] font-[500]">
              Help & Guide
            </Link>
            <button className="bg-[#212529] text-[#FFFFFF] text-[18px] md:text-[16px] font-[500] flex items-center justify-center px-4 py-2 rounded-md space-x-2">
              <img src={navAsset.vector} alt="Wallet Icon" className="w-5 h-5" />
              <span>Connect Wallet</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-200 bg-opacity-90 z-50 flex flex-col items-center justify-center p-6">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-800 hover:text-gray-600">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="space-y-6">
            <Link href="/marketing" className="block text-gray-800 text-[20px] hover:text-gray-600">Marketing</Link>
            <Link href="/blogging" className="block text-gray-800 text-[20px] hover:text-gray-600">Blogging</Link>
            <Link href="/make-money" className="block text-gray-800 text-[20px] hover:text-gray-600">Make Money</Link>
            <Link href="/help-guide" className="block text-gray-800 text-[20px] hover:text-gray-600">Help & Guide</Link>
            <button className="w-full bg-[#212529] text-white text-[20px] px-6 py-3 rounded-md hover:bg-gray-800">
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </nav>
  );
 }

