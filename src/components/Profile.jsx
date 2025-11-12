import { IoSettingsOutline } from "react-icons/io5";
import { TfiHelpAlt } from "react-icons/tfi";
import { PiNotePencilLight } from "react-icons/pi";
import { PiBellThin } from "react-icons/pi";
import { PiStarFourFill } from "react-icons/pi";

function Profile({ profileOpen, setProfileOpen }) {
  return (
    <div className="w-63 h-140 md:h-110 border border-gray-200  mt-13 absolute right-8 top-0 z-100 bg-white rounded-md">
      <div>
        <div className="flex flex-row mt-6 items-center ml-7">
          <div
            onClick={() => setProfileOpen(!profileOpen)}
            className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 transition-colors flex items-center justify-center mr-2 ml-2 cursor-pointer"
          >
            <span className="text-white text-2xl font-medium">J</span>
          </div>
          <div className="ml-2 text-gray-500 hover:text-gray-900 cursor-pointer">
            <p className="text-sm font-semibold">Jagotchakma</p>
            <p className="text-xs">View profile</p>
          </div>
        </div>

        {/* utilities */}
        <div className="w-full h-56 md:h-27 md:pt-2 pt-7  border-b flex flex-col md:gap-2 gap-4 pl-8 border-gray-200">
          <div className="flex items-center text-gray-500 hover:text-gray-900 cursor-pointer">
            <PiNotePencilLight className="md:hidden h-7 w-6 " />
            <p className="text-sm font-semibold ml-4 md:hidden">Write</p>
          </div>

          <div className=" flex flex-row items-center text-gray-500 hover:text-gray-900 cursor-pointer">
            <PiBellThin className="w-6 h-7 md:hidden " />
            <span className="md:hidden ml-4 text-sm font-semibold ">
              Notifications
            </span>
          </div>

          <div className="flex flex-row items-center text-gray-500 hover:text-gray-900  cursor-pointer ">
            <IoSettingsOutline className="w-6 h-7" />
            <span className="ml-4 text-sm font-semibold">Settings</span>
          </div>

          <div className="flex flex-row items-center text-gray-500 hover:text-gray-900 cursor-pointer">
            <TfiHelpAlt className="w-5 h-8" />
            <span className="ml-5 text-sm font-semibold">Help</span>
          </div>
        </div>

        {/* member description */}
        <div className="w-full h-20 border-b border-gray-200">
          <div className="flex flex-col  mt-6 gap-3 text-gray-500 ">
            <div className="flex flex-row items-center hover:text-gray-900 cursor-pointer">
              <p className="font-medium  pl-6 text-sm">
                Become a Medium member
              </p>
              <PiStarFourFill className="text-amber-300 pl-1 pt-1" />
            </div>

            <p className="font-medium text-sm pl-6 hover:text-gray-900 cursor-pointer">
              Apply to the Partner Program
            </p>
          </div>
        </div>

        {/* signout */}
        <div className="border-b border-gray-200 h-20 w-full text-gray-500 hover:text-gray-900 cursor-pointer">
          <div className="flex flex-col pl-6 pt-4 gap-1">
            <p className=" font-medium text-sm ">Sign out</p>
            <p className="text-xs">ja•••••••••••@gmail.com</p>
          </div>
        </div>

        <div className="w-full p-4">
          <div className="flex text-xs flex-wrap gap-3 text-gray-500">
            <p className="hover:text-gray-900 cursor-pointer">About</p>
            <p className="hover:text-gray-900 cursor-pointer">Blog</p>
            <p className="hover:text-gray-900 cursor-pointer">Careers</p>
            <p className="hover:text-gray-900 cursor-pointer">Privacy</p>
            <p className="hover:text-gray-900 cursor-pointer">About</p>
            <p className="hover:text-gray-900 cursor-pointer">Terms</p>
            <p className="hover:text-gray-900 cursor-pointer">Text to speech</p>
            <p className="hover:text-gray-900 cursor-pointer">More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
