// SuccessStories.jsx

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: "Bella",
      owner: "Sarah",
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a",
      story:
        "Bella was rescued from a shelter and now enjoys a happy life with Sarah.",
    },
    {
      id: 2,
      name: "Max",
      owner: "John",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
      story:
        "Max found a loving family after months of waiting for adoption.",
    },
    {
      id: 3,
      name: "Luna",
      owner: "Emma",
      image:
        "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
      story:
        "Luna became the perfect companion for Emma and her family.",
    },
  ];

  return (
    <section className="py-24 bg-[#0B1120] text-white mt-10 ">
      <div className="max-w-7xl mx-auto px-4">

        {/* heading */}
        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold uppercase tracking-widest mb-2">
            Success Stories
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Happy Pets, Happy Families
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover heartwarming adoption stories from families who found
            their perfect furry companions through our platform.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-[#111827] rounded-3xl overflow-hidden border border-gray-800 hover:scale-105 duration-300 transition-all shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-72 object-cover hover:scale-110 duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {story.name} & {story.owner}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {story.story}
                </p>

                <button className="sm:w-auto inline-flex items-center gap-3 bg-[linear-gradient(90deg,#ff8a3d_0%,#ff6b00_45%,#3b82f6_100%)] text-white px-2 p-2 rounded-2xl text-sm font-semibold shadow-lg hover:scale-105 transition duration-300">
                  Read Story
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;