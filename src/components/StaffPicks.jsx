import { PiStarFourFill } from "react-icons/pi";
import Recommended from "./Recommended";
import FollowList from "./FollowList";
import ReadingList from "./ReadingList";
import Footer from "./Footer";

function StaffPicks({ data }) {
  if (!data || !data.staffPicks) {
    return <div>Loading staffpicks...</div>;
  }
  return (
    <div className=" relative right-0 top-14  h-auto w-auto">
      <div className="pl-7">
        <div className="text-base font-semibold pb-4 pt-7">
          <h1>Staff Picks</h1>
        </div>
        {data.staffPicks.map((staffPick) => (
          <div className="border flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <img src={staffPick.author.avatar} />
              <span>{staffPick.author.name}</span>
            </div>

            <div>
              <h1>{staffPick.title}</h1>
            </div>

            <div className="flex gap-3 items-center">
              <PiStarFourFill />
              <span>{staffPick.publishedDate}</span>
            </div>
          </div>
        ))}
        <p>See the full list</p>
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

      <div className="mt-9 pl-7">
        <Footer />
      </div>
    </div>
  );
}

export default StaffPicks;
