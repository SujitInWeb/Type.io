import { useState } from "react";
import Sidebar from "./Sidebar";
import InfiniteMode from "./Infinite";
import CalculatorMode from "./Calculator";

export default function App() {
  const [activeMode, setActiveMode] = useState("infinite");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col bg-[#000000] overflow-hidden md:flex-row min-h-screen relative">
        {/* Sidebar controls mode switching */}
        <Sidebar 
          setActiveMode={setActiveMode}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />

        <main className="flex-1 h-screen relative">
          {/* Mobile menu button - only visible on small screens */}
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden fixed top-4 left-4 z-20 bg-white/50 hover:bg-white/80 p-2.75 h-10 w-10 rounded-lg backdrop-blur-sm transition duration-280"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 23 23" 
              fill="currentColor"
              className="w-4.5 h-4.5 text-[#0D1117]"
            >
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"/>
            </svg>
          </button>

          {activeMode === "infinite" && <InfiniteMode />}
          {activeMode === "calculator" && <CalculatorMode />}
        </main>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/20 bg-opacity-30 backdrop-blur-lg shadow-lg z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}
      </div>
    </>
  );
}