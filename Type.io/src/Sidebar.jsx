export default function Sidebar({ setActiveMode }) {
  return (
    <>
      <div className="flex justify-evenly">
        <div className="w-[300px] h-screen flex items-center flex-col p-7 bg-[#000000] ">
          <h1 className="w-full text-center font-bold font-[Bungee_Spice] text-4xl text-[#F0F6FC] pt-15 pb-9">Type.io</h1>
          <button 
            className="bg-white/50 hover:bg-white/80 font-[Roboto] font-normal text-[#0D1117] text-lg min-w-full p-3 border rounded-lg border-[#3D444D] my-2 hover:border-[#3D444D]  hover:text-[#0D1117] cursor-pointer transition duration-280"
            onClick={() => setActiveMode("infinite")}
          >
            Infinite Mode
          </button>
          <button 
            className="bg-white/50 hover:bg-white/80 font-[Roboto] font-normal text-[#0D1117] text-lg min-w-full p-3 border rounded-lg border-[#3D444D] my-2 hover:border-[#3D444D]  hover:text-[#0D1117] cursor-pointer transition duration-280"
            onClick={() => setActiveMode("calculator")}
          >
            Calculator Mode
          </button>
        </div>
    
      </div>
    </>
    
  );
}
