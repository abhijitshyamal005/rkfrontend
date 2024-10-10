import { FiSearch, FiBell, FiCalendar } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white shadow-lg">
      {/* Left side: Search bar */}
      <div className="flex items-center border rounded-lg shadow-sm px-3 py-2 w-full sm:max-w-md mb-4 sm:mb-0">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search for templates, projects, etc"
          className="outline-none w-full text-gray-700"
        />
      </div>

      {/* Center: Create Content Button */}
      <button className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition-colors mb-4 sm:mb-0">
        Create Content
      </button>

      {/* Right side: Icons and Profile */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        {/* Credits */}
        <div className="flex items-center space-x-1 bg-purple-100 text-purple-600 px-4 py-2 rounded-full">
          <span>💰</span>
          <span className="font-semibold">20</span>
        </div>

        {/* Icons */}
        <FiCalendar className="text-gray-600 w-6 h-6 cursor-pointer" />
        <FiBell className="text-gray-600 w-6 h-6 cursor-pointer" />

        {/* Profile Picture */}
        <img
          src="https://portfolio-abhijit-beige.vercel.app/assets/modified-ff5f8a51.png" 
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
