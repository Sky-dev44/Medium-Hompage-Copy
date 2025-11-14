function Recommended({ data }) {
  if (!data || !data.recommendedTopics) {
    return <div>Loading Topics...</div>;
  }
  return (
    <div className="mt-10">
      <div className="text-sm font-semibold text-gray-700">
        <h1>Recommened topics</h1>
      </div>
      <div className="flex flex-wrap gap-2 mt-6 ">
        {data.recommendedTopics.map((topic) => (
          <div
            key={topic.id}
            className=" px-4 rounded-2xl py-1 text-sm bg-zinc-100"
          >
            <div>{topic.name}</div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-600 hover:underline cursor-pointer">
        See more topics
      </p>
    </div>
  );
}

export default Recommended;
