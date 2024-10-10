
const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50">
      {/* Hero Section */}
      <div 
        className="flex flex-col md:flex-row justify-between items-center p-11 bg-[url('/src/assets/bg.png')] bg-cover bg-center rounded-lg shadow-md"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Hey James!</h1>
          <p className="text-lg text-gray-600 mt-2">
            Let&apos;s create something awesome today ✨🍩
          </p>
          <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-600">
            Start Creating
          </button>
        </div>
        {/* Side Info */}
        <div className="bg-white p-4 rounded-lg shadow-md mt-4 md:mt-0">
          <p className="text-gray-600">
            You should have more engagement by 6pm today, try posting then. 🗓️
          </p>
          <p className="text-gray-600 mt-2">
            Try our SEO optimization tool to increase engagement by 40% 🔥
          </p>
        </div>
      </div>

      {/* Popular Tools Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">
          Most Popular Tools
        </h2>
        <p className="text-gray-600 mt-2">
          Explore the trending tools to create your copies fast
        </p>

        {/* Tool Category */}
        <div className="mt-8">
          <h3 className="text-xl font-medium text-gray-800">Social Media</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {/* Tool Cards */}
            {[
              { title: "Blog Writing", desc: "Generate the best blog post to fit your audience with just a few clicks.", color: "orange-500" },
              { title: "Product Description", desc: "Generate engaging product descriptions that sell.", color: "green-500" },
              { title: "Article Writer", desc: "Automatically create unique factual articles with a button.", color: "purple-500" },
              { title: "SEO Optimization", desc: "Improve your page's SEO score with a few easy steps.", color: "blue-500" },
              { title: "Content Planner", desc: "Organize your content for maximum engagement.", color: "red-500" },
              { title: "Social Media Analytics", desc: "Track your social media performance in real-time.", color: "yellow-500" }
            ].map((tool, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {tool.title}
                  </h4>
                  <span className={`text-${tool.color}`}>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </div>
                <p className="text-gray-600">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
