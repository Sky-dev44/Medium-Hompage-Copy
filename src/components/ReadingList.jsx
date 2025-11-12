import { MdOutlineBookmarkAdd } from "react-icons/md";

function ReadingList() {
  return (
    <div className="mt-8">
      <h1>Reading List</h1>

      <div className="relative mt-5">
        <p className="">
          Click the &nbsp; &nbsp; on any story to easily add it to your reading
          list or a custom list that you cna share.
        </p>
        <MdOutlineBookmarkAdd className="w-6 h-5 absolute top-1 left-15" />
      </div>
    </div>
  );
}

export default ReadingList;
