export default function Sidebar({ setActiveMode }) {
  return (
    <div className="w-48 h-screen bg-gray-800 text-white flex flex-col p-4">
      <h1 className="text-xl font-bold mb-6">TypeSpeed</h1>

      <button 
        className="mb-2 p-2 bg-gray-700 hover:bg-gray-600 rounded"
        onClick={() => setActiveMode("infinite")}
      >
        Infinite Mode
      </button>

      <button 
        className="mb-2 p-2 bg-gray-700 hover:bg-gray-600 rounded"
        onClick={() => setActiveMode("az")}
      >
        A-Z Mode
      </button>

      <button 
        className="p-2 bg-gray-700 hover:bg-gray-600 rounded"
        onClick={() => setActiveMode("calculator")}
      >
        Calculator Mode
      </button>
    </div>
  );
}
