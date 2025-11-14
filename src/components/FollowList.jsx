function FollowList({ data }) {
  if (!data || !data.whoToFollow) {
    return <div>Loading Follow List...</div>;
  }
  return (
    <div className="mt-10">
      <div className="text-sm font-semibold text-gray-700">
        <p>Who to follow</p>
      </div>

      <div className="pt-5 flex flex-col gap-3">
        {data.whoToFollow.map((follow) => (
          <div key={follow.id} className="flex">
            <div className="mr-2 mt-2">
              <img src={follow.avatar} />
            </div>

            <div className="flex-2 ">
              <h2 className="text-sm font-bold">{follow.name}</h2>
              <p className="text-xs pt-1">{follow.bio}</p>
            </div>

            <div className="pr-4 flex-1 pl-7">
              <button className="border rounded-2xl px-2 py-1 text-sm">
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-600 hover:underline cursor-pointer">
        See more suggestions
      </p>
    </div>
  );
}

export default FollowList;
