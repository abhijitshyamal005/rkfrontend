

const Sidebar = () => {
  return (
    <div className="w-20 bg-purple-100 flex flex-col items-center p-4 ">
      {/* First Icon (Red Circle Icon Placeholder) */}
      <div className="mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="red" className="h-8 w-8" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 14v-4h2v4h-2zm0 4v-2h2v2h-2z"/>
        </svg>
      </div>

      {/* Home Icon */}
      <div className="mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="purple" className="h-8 w-8" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      </div>

      {/* Grid Icon */}
      <div className="mt-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-8 w-8" viewBox="0 0 24 24">
          <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
        </svg>
      </div>

      {/* Settings Icon */}
      <div className="mt-[500px]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 2c-2.5 0-4.772.714-6.5 1.931V20h13V11.931C16.772 10.714 14.5 10 12 10z"/>
        </svg>
      </div>

      {/* Log Out Icon */}
      <div className="mt-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-8 w-8" viewBox="0 0 24 24">
          <path d="M16 17v-1h-6v-4h6v-1l3 2.5L16 17zM8 19V5h7V3H7v18h8v-2H8z"/>
        </svg>
      </div>
    </div>
  );
};

export default Sidebar;
