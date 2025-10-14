export default function Sidebar({ setActiveMode }) {
  return (
    <div className="w-[300px] h-screen flex items-center flex-col p-7 bg-[#010409]">
      <h1 className="w-full text-center text-4xl font-bold text-[#F0F6FC] pt-9.5 pb-9.5">Type.io</h1>
      <button 
        className="bg-[#0D1117] text-[#F0F6FC] text-lg min-w-full p-3 border rounded-lg border-[#3D444D] my-2 hover:border-[#3D444D] hover:bg-[#F0F6FC] hover:text-[#0D1117] cursor-pointer transition duration-280"
        onClick={() => setActiveMode("infinite")}
      >
        Infinite Mode
      </button>

      <button 
        className="bg-[#0D1117] text-[#F0F6FC] text-lg min-w-full p-3 border rounded-lg border-[#3D444D] my-2 hover:border-[#3D444D] hover:bg-[#F0F6FC] hover:text-[#0D1117] cursor-pointer transition duration-280"
        onClick={() => setActiveMode("calculator")}
      >
        Calculator Mode
      </button>
    </div>
  );
}
