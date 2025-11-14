import { MdOutlineBookmarkAdd } from "react-icons/md";

function ReadingList() {
  return (
    <div className="mt-10">
      <h1 className="text-sm font-semibold text-gray-700">Reading List</h1>

      <div className="relative mt-5">
        <p className="text-sm  text-gray-600">
          Click the &nbsp; &nbsp; &nbsp; on any story to easily add it to your
          reading list or a custom list that you cna share.
        </p>
        <MdOutlineBookmarkAdd className="w-6 h-5 absolute top-0 left-13 text-gray-500" />
      </div>
    </div>
  );
}

export default ReadingList;
