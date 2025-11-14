import { PiStarFourFill } from "react-icons/pi";
import { FaHandsClapping } from "react-icons/fa6";
import { FaComment } from "react-icons/fa6";
import { CiCircleMinus } from "react-icons/ci";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { MdMoreHoriz } from "react-icons/md";

function BlogPost({ data, sideOpen }) {
  // Check if data and data.posts exist before mapping
  if (!data || !data.posts) {
    return <div>Loading posts...</div>;
  }

  return (
    <div
      className={`${
        sideOpen ? "xl:w-170 pl-5" : "xl:w-180"
      } w-auto  flex flex-col flex-wrap h-full  mt-14 bg-white`}
    >
      <div className="h-20 w-full bg-white">
        <div className=" bg-white border-b mx-5 pt-10 pb-3 flex gap-6 text-sm border-gray-200">
          <span>For you</span>
          <span>Featured</span>
        </div>
      </div>

      {data.posts.map((post) => (
        <div className="w-auto flex flex-row border-b mx-6 border-gray-200 mt-8">
          <div
            key={post.id}
            className="flex flex-col flex-6 lg:mt-8 md:mr-15 pb-5 gap-0"
          >
            {/* author */}
            <div className="flex gap-2 items-center  ">
              <img src={post.author.avatar} />
              <p className="text-xs font-normal">{post.author.name}</p>
            </div>

            {/* title, subtitle */}
            <div className="flex">
              <div className="mr-5">
                <h1 className="text-2xl font-bold">{post.title}</h1>
                <p className="text-sm pt-2 mr-10 text-gray-600">
                  {post.subtitle}
                </p>
              </div>

              <div className="md:hidden block">
                <img src={post.imageUrl} className="w-20 h-15" />
              </div>
            </div>

            {/* icons */}
            <div className="flex justify-between pt-6 ">
              <div className="flex flex-row gap-4 text-lg text-gray-600">
                <div className="flex items-center gap-4">
                  <PiStarFourFill className="text-amber-400" />
                  <span className="text-xs">{post.publishedDate}</span>
                </div>

                <div className="flex items-center gap-1">
                  <FaHandsClapping className="text-base" />
                  <span className="text-xs">{post.claps}</span>
                </div>

                <div className="flex items-center gap-1">
                  <FaComment className="text-base" />
                  <span className="text-xs">{post.responses}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-2xl text-gray-500 ">
                <CiCircleMinus />
                <MdOutlineBookmarkAdd className="hidden md:block" />
                <MdMoreHoriz />
              </div>
            </div>
          </div>
          <div className="lg:flex-2 lg:mt-10 hidden md:block ">
            <img src={post.imageUrl} className="md:w-40 md:h-25" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogPost;
