import { PiStarFourFill } from "react-icons/pi";
import Recommended from "./Recommended";
import FollowList from "./FollowList";
import ReadingList from "./ReadingList";
import Footer from "./Footer";

function StaffPicks({ data, sideOpen }) {
  if (!data || !data.staffPicks) {
    return <div>Loading staffpicks...</div>;
  }
  return (
    <div
      className={`sticky border-l border-gray-200 bg-white right-0 top-14  h-auto w-auto ${
        sideOpen ? "xl:mr-8 lg:mr-4" : "xl:mr-8 2xl:mr-45 lg:mr-4"
      }`}
    >
      <div className="pl-7">
        <div className="text-sm font-semibold pb-4 pt-7 text-gray-700">
          <h1>Staff Picks</h1>
        </div>
        {data.staffPicks.map((staffPick) => (
          <div key={staffPick.id} className="flex flex-col gap-2 mt-4">
            <div className="flex gap-2 items-center text-xs">
              <img src={staffPick.author.avatar} />
              <span>{staffPick.author.name}</span>
            </div>

            <div className="text-sm font-bold">
              <h1>{staffPick.title}</h1>
            </div>

            <div className="flex gap-3 items-center text-xs">
              <PiStarFourFill className="text-amber-400" />
              <span className="text-gray-600">{staffPick.publishedDate}</span>
            </div>
          </div>
        ))}
        <p className="text-sm text-gray-600 mt-5 hover:underline cursor-pointer">
          See the full list
        </p>
      </div>

      <div className="pl-7">
        <Recommended data={data} />
      </div>

      <div className="pl-7">
        <FollowList data={data} />
      </div>

      <div className="pl-7">
        <ReadingList />
      </div>

      <div className="mt-15 pl-7">
        <Footer />
      </div>
    </div>
  );
}

export default StaffPicks;
