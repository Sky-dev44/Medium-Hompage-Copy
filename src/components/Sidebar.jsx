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
    <div className="w-60 h-screen border-r border-gray-200 fixed z-60 top-0 left-0 bg-white  ">
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
              className="w-6 h-8 text-gray-400"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <div className="mr-3">
            <img
              className=" sm:h-6 sm:w-28 ml-5 sm:ml-4 cover"
              src="/Logo.png"
              alt="Logo"
            />
          </div>
        </div>

        <div className="flex flex-col pt-9 gap-3 font-semibold text-gray-500">
          <div className="flex items-center gap-3">
            <LiaHomeSolid className="h-8  w-6 text-gray-500" />
            <span>Home</span>
          </div>

          <div className="flex items-center gap-3 ">
            <BiBookmarks className="h-8 w-6 text-gray-500 " />
            <span>Library</span>
          </div>

          <div className="flex items-center gap-3 ">
            <IoPersonOutline className="h-8 w-6 text-gray-500" />
            <span>Profile</span>
          </div>

          <div className="flex items-center gap-3">
            <IoNewspaperOutline className="h-8 w-6 text-gray-500" />
            <span>Stories</span>
          </div>

          <div className="flex items-center gap-3">
            <ImStatsBars2 className="h-8 w-6 text-gray-500" />
            <span>Stats</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-8 w-45 ml-7 gap-3 text-gray-500 font-semibold">
        <div className="flex items-center gap-3">
          <IoPersonAddOutline className="w-6 h-8 text-gray-500" />
          <span>Following</span>
        </div>

        <div className="flex gap-4">
          <AiOutlinePlus className="w-9 h-10 text-gray-500" />
          <span className="mt-2 text-sm">
            Find writers and publications to follow.
          </span>
        </div>
        <a className="ml-10 text-sm">See suggestions</a>
      </div>
    </div>
  );
}

export default Sidebar;
