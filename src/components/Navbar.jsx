import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { PiNotePencilLight } from "react-icons/pi";
import { PiBellThin } from "react-icons/pi";

function Navbar() {
  return (
    <nav className="w-full h-14 border border-gray-200">
      <div className="flex flex-row h-full ">
        <div className="flex-2 sm:flex-initial flex flex-row justify-around items-center ">
          <div className="ml-6">
            <FiMenu className="w-6 h-8 text-gray-400" />
          </div>
          <div className="mr-3">
            <img
              className=" sm:h-6 sm:w-27 ml-5 sm:ml-4 cover"
              src="/Logo.png"
              alt="Logo"
            />
          </div>
        </div>

        {/* search */}
        <div className="sm:flex-5 flex-1 flex flex-row items-center justify-between ">
          <div className=" sm:relative sm:bg-gray-100 rounded-3xl px-10 py-3  text-sm text-slate-950 ml-4  ">
            <input
              type="text"
              placeholder="Search"
              className="hidden sm:block ml-2 focus:outline-none  "
            />
          </div>
          <div className="sm:absolute">
            <CiSearch className="w-6 h-10 sm:ml-7  text-gray-900" />
          </div>
        </div>

        {/* right side */}

        <div className=" flex flex-1 sm:flex-inital flex-row items-center justify-around sm:px-6 ">
          <div className="flex items-center pr-2 ">
            <PiNotePencilLight className="hidden sm:block h-7 w-10 text-gray-500" />
            <p className="text-sm hidden sm:block">Write</p>
          </div>
          <div className="px-5">
            <PiBellThin className="w-7 h-10 hidden sm:block text-gray-600" />
          </div>
          <div className="w-8 h-8 rounded-full bg-green-600 hover:bg-green-700 transition-colors flex items-center justify-center mr-2 ml-2">
            <span className="text-white text-sm font-medium">J</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
