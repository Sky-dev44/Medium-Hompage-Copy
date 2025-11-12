function FollowList({ data }) {
  if (!data || !data.whoToFollow) {
    return <div>Loading Follow List...</div>;
  }
  return (
    <div className="mt-7">
      <div>
        <p>Who to follow</p>
      </div>

      <div className="pt-5">
        {data.whoToFollow.map((follow) => (
          <div className="flex">
            <div className="mr-2 mt-2">
              <img src={follow.avatar} />
            </div>

            <div className="flex-2">
              <h2>{follow.name}</h2>
              <p>{follow.bio}</p>
            </div>

            <div className="pr-4">
              <button>Follow</button>
            </div>
          </div>
        ))}
      </div>
      <p>See more suggestions</p>
    </div>
  );
}

export default FollowList;
