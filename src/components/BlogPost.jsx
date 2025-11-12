import { PiStarFourFill } from "react-icons/pi";
import { FaHandsClapping } from "react-icons/fa6";
import { FaComment } from "react-icons/fa6";
import { CiCircleMinus } from "react-icons/ci";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { MdMoreHoriz } from "react-icons/md";

function BlogPost({ data }) {
  // Check if data and data.posts exist before mapping
  if (!data || !data.posts) {
    return <div>Loading posts...</div>;
  }

  return (
    <div className="w-auto h-full border-r border-gray-200 mt-14 bg-white">
      <div className="h-20 w-auto ">
        <div className=" border-b mx-5 pt-10 pb-3 flex gap-6 text-sm border-gray-200">
          <span>For you</span>
          <span>Featured</span>
        </div>
      </div>

      {data.posts.map((post) => (
        <div className="w-auto">
          <div
            key={post.id}
            className="flex flex-col border-b border-gray-200 mx-5 mt-8 pb-5 gap-0"
          >
            {/* author */}
            <div className="flex gap-2 items-center  ">
              <img src={post.author.avatar} />
              <p className="text-xs font-normal">{post.author.name}</p>
            </div>

            {/* title, subtitle */}
            <div className="flex gap-10 items-center">
              <div className="flex-3 flex-wrap">
                <h1 className="text-2xl font-bold">{post.title}</h1>
                <p className="text-sm pt-2 text-gray-600">{post.subtitle}</p>
              </div>
              <img src={post.imageUrl} className="w-40 h-25 flex-1 mr-" />
            </div>

            {/* icons */}
            <div className="flex justify-between w-100 pt-4 ">
              <div className="flex flex-row gap-4 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <PiStarFourFill className="text-amber-400" />
                  <span className="text-xs">{post.publishedDate}</span>
                </div>

                <div className="flex items-center gap-1">
                  <FaHandsClapping />
                  <span className="text-xs">{post.claps}</span>
                </div>

                <div className="flex items-center gap-1">
                  <FaComment />
                  <span className="text-xs">{post.responses}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xl text-gray-500">
                <CiCircleMinus />
                <MdOutlineBookmarkAdd className="hidden md:block" />
                <MdMoreHoriz />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogPost;
