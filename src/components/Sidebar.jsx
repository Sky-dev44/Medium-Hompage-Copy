import { FiMenu } from "react-icons/fi";
import { LiaHomeSolid } from "react-icons/lia";
import { BiBookmarks } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { ImStatsBars2 } from "react-icons/im";
import { IoPersonAddOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div className="w-60 h-screen border-r border-gray-200 fixed z-100 lg:z-40 top-0 left-0 bg-white transform-[matrix(1,0,0,1,0,0)] ">
      <div
        className="w-45 border-b ml-7 h-80 border-gray-200 
      "
      >
        <div
          className="flex pt-3 items-center justify-start
        "
        >
          <div>
            <FiMenu
              onClick={() => setIsOpen(!isOpen)}
              className="w-6 h-8 text-gray-400 hover:text-gray-900 cursor-pointer"
            />
          </div>
          <div className="mr-3">
            <img
              className=" h-6 sm:h-6 sm:w-28 ml-5 sm:ml-4 cover"
              src="/Logo.png"
              alt="Logo"
            />
          </div>
        </div>

        <div className="flex flex-col pt-9 gap-3 font-semibold text-gray-500 cursor-pointer ">
          <div className="flex items-center gap-3 hover:text-gray-900 text-gray-500 ">
            <LiaHomeSolid className="h-8 w-6  " />
            <span>Home</span>
          </div>

          <div className="flex items-center gap-3 text-gray-500 hover:text-gray-900">
            <BiBookmarks className="h-8 w-6  " />
            <span>Library</span>
          </div>

          <div className="flex items-center gap-3 text-gray-500 hover:text-gray-900">
            <IoPersonOutline className="h-8 w-6 " />
            <span>Profile</span>
          </div>

          <div className="flex items-center gap-3 text-gray-500 hover:text-gray-900">
            <IoNewspaperOutline className="h-8 w-6 " />
            <span>Stories</span>
          </div>

          <div className="flex items-center gap-3 text-gray-500 hover:text-gray-900">
            <ImStatsBars2 className="h-8 w-6 0" />
            <span>Stats</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-8 w-45 ml-7 gap-3  font-semibold ">
        <div className="flex items-center gap-3 text-gray-500 hover:text-gray-900 cursor-pointer">
          <IoPersonAddOutline className="w-6 h-8 " />
          <span>Following</span>
        </div>

        <div className="flex gap-4 text-gray-500 hover:text-gray-900 cursor-pointer">
          <AiOutlinePlus className="w-9 h-10 " />
          <span className="mt-2 text-sm">
            Find writers and publications to follow.
          </span>
        </div>
        <a className="ml-10 text-sm text-gray-500 hover:text-gray-900 cursor-pointer">
          See suggestions
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
