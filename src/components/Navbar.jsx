import { FiSearch, FiBell, FiCalendar } from 'react-icons/fi'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-4 bg-white shadow-lg'>
      {/* Left side: Menu icon on mobile */}
      <div className='sm:hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          className='h-8 w-8'
          viewBox='0 0 24 24'
        >
          <path d='M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z' />
        </svg>
      </div>

      {/* Left side: Search bar on larger screens */}
      <div className='hidden sm:flex items-center border rounded-lg shadow-sm px-3 py-2 w-full sm:max-w-md mb-4 sm:mb-0'>
        <FiSearch className='text-gray-500 mr-2' />
        <input
          type='text'
          placeholder='Search for templates, projects, etc'
          className='outline-none w-full text-gray-700'
        />
      </div>

      {/* Center: Search bar on mobile */}
      <div className='flex sm:hidden flex-grow items-center border rounded-lg px-3 py-2'>
        <FiSearch className='text-gray-500 mr-2' />
        <input
          type='text'
          placeholder='Search'
          className='outline-none w-full text-gray-700'
        />
      </div>
      <button className='hidden sm:block bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition-colors mb-4'>
        Create Content
      </button>

      {/* Right side: Icons and Profile on larger screens */}
      <div className='hidden sm:flex items-center space-x-4 sm:space-x-6'>
        {/* Credits */}
        <div className='flex items-center space-x-1 bg-purple-100 text-purple-600 px-4 py-2 rounded-full'>
          <span>💰</span>
          <span className='font-semibold'>20</span>
        </div>

        {/* Icons */}
        <FiCalendar className='text-gray-600 w-6 h-6 cursor-pointer' />
        <FiBell className='text-gray-600 w-6 h-6 cursor-pointer' />

        {/* Profile Picture */}
        <img
          src='https://portfolio-abhijit-beige.vercel.app/assets/modified-ff5f8a51.png'
          alt='Profile'
          className='w-8 h-8 rounded-full object-cover'
        />
      </div>

      {/* Right side: Profile icon on mobile */}
      <div className='sm:hidden'>
        <img
          src='https://portfolio-abhijit-beige.vercel.app/assets/modified-ff5f8a51.png'
          alt='Profile'
          className='w-6 h-6 rounded-full object-cover'
        />
      </div>
    </nav>
  )
}

export default Navbar
