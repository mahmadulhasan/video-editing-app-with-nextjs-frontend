import React from "react";

const updates = [
  {
    title: "Vector Shapes",
    tag: "NEW",
    description:
      "Add vector shape overlays from categories like basic, organic, and hand-drawn to bring flair to your videos.",
    image: "/images/vector.webp", // Replace with your actual image paths
  },
  {
    title: "Full Screen Mode",
    tag: "UPDATE",
    description:
      "Watch your video edits in full screen with one click, giving you better control and preview.",
    image: "/images/full-screen.webp",
  },
  {
    title: "Dark & Light Mode",
    tag: "NEW",
    description:
      "Customize your workspace with newly added light and dark themes for better accessibility.",
    image: "/images/dark-light.webp",
  },
];

const WhatsNew = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-8 mb-12"
        >
          <div className="lg:w-1/2 text-left">
            <h2 className="text-3xl font-bold mb-4">What's New</h2>
            <p className="text-lg">
              Discover the latest updates and features we've added to enhance your
              experience.
            </p>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <img
              src="/images/new.webp"
              alt="What's New"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {updates.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full mb-2">
                  {item.tag}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
