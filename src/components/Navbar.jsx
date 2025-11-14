import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { PiNotePencilLight } from "react-icons/pi";
import { PiBellThin } from "react-icons/pi";
import { useState } from "react";

function Navbar({ isOpen, setIsOpen, profileOpen, setProfileOpen }) {
  return (
    <nav className="w-full h-14 border border-gray-200 fixed z-50 top-0 left-0 right-0 bg-white">
      <div className="flex flex-row h-full ">
        <div className="flex-8 sm:flex-initial flex flex-row justify-around items-center ">
          <div className="ml-7 ">
            <FiMenu
              className="w-6 h-8 text-gray-400 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>

          <div className="mr-3">
            <img
              className=" h-6 w-30 sm:h-6 sm:w-27 ml-5 sm:ml-4"
              src="/Logo.png"
              alt="Logo"
            />
          </div>
        </div>

        {/* search */}
        <div className="md:flex-5 flex-7 flex flex-row items-center justify-between ">
          <div className=" md:relative md:bg-gray-100 rounded-3xl px-10 py-3  text-sm text-slate-950 ml-4  ">
            <input
              type="text"
              placeholder="Search"
              className="hidden md:block ml-5 focus:outline-none  "
            />
          </div>

          <div className="md:absolute">
            <CiSearch className="w-6 h-10 md:ml-7 text-gray-900 cursor-pointer" />
          </div>
        </div>

        {/* right side */}

        <div className=" flex flex-1 md:flex-inital flex-row items-center justify-around md:px-6 pr-4 ">
          <div className="flex items-center pr-2 cursor-pointer ">
            <PiNotePencilLight className="hidden md:block h-6 w-10 text-gray-500" />
            <p className="text-sm text-gray-500 hidden md:block">Write</p>
          </div>

          <div className="px-5 cursor-pointer">
            <PiBellThin className="w-7 h-10 hidden md:block text-gray-600" />
          </div>

          <div
            onClick={() => setProfileOpen(!profileOpen)}
            className="w-8 h-8 rounded-full bg-green-600 hover:bg-green-700 transition-colors flex items-center justify-center md:mr-1 mr-3  cursor-pointer "
          >
            <span className="text-white text-sm font-medium">J</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
