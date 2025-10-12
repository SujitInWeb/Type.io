export default function Sidebar({ setActiveMode }) {
  return (
    <div className="w-[300px] h-screen flex items-center flex-col p-4 bg-[#010409]">
      <h1 className="text-3xl font-bold text-[#F0F6FC] pt-9.5 pb-9.5">Type.io</h1>

      <button 
        className="bg-[#0D1117] text-[#F0F6FC] min-w-full p-3 border rounded-lg border-[#3D444D] my-2"
        onClick={() => setActiveMode("infinite")}
      >
        Infinite Mode
      </button>

      <button 
        className="bg-[#0D1117] text-[#F0F6FC] min-w-full p-3 border rounded-lg border-[#3D444D] my-2"
        onClick={() => setActiveMode("az")}
      >
        A-Z Mode
      </button>

      <button 
        className="bg-[#0D1117] text-[#F0F6FC] min-w-full p-3 border rounded-lg border-[#3D444D] my-2"
        onClick={() => setActiveMode("calculator")}
      >
        Calculator Mode
      </button>
    </div>
  );
}
