import  { useState } from 'react';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Loader from './components/Loader'; // Add a loader component
import './index.css';

function App() {
  const [user] = useState(false); // Track authenticated user
  const [loading] = useState(false); // Loading state for loader

 

  if (loading) {
    return <Loader />; // Show loader while checking authentication
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar /> {/* Sidebar remains on the left */}
      <div className="flex flex-col w-full">
        <Navbar /> {/* Navbar stays on top */}
        <div className="flex-grow p-4">
          {/* Dashboard content */}
          {user ? (
            <Dashboard />
          ) : (
            <div className="text-center mt-8">
              <h1 className="text-xl font-semibold">Please log in to access your dashboard</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
