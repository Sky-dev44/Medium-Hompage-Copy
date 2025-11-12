function Recommended({ data }) {
  if (!data || !data.recommendedTopics) {
    return <div>Loading Topics...</div>;
  }
  return (
    <div className="mt-8">
      <div className="text-base font-semibold">
        <h1>Recommened topics</h1>
      </div>
      <div className="flex flex-wrap gap-2 mt-4 ">
        {data.recommendedTopics.map((topic) => (
          <div className="border px-4 rounded-2xl py-1">
            <div className="">{topic.name}</div>
          </div>
        ))}
      </div>
      <p className="mt-2">See more topics</p>
    </div>
  );
}

export default Recommended;
