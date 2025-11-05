export default function Sidebar({ setActiveMode }) {
  return (
    <>
      <div className="flex justify-evenly">
        <div className="w-[300px] h-screen  flex items-center flex-col p-7 bg-[#000000] ">
          <h1 className="w-full text-center font-bold font-[Bungee_Spice] text-4xl text-[#F0F6FC] pt-15 pb-9">Type.io</h1>
          <button 
            className="bg-white/50 hover:bg-white/80 font-[Roboto] font-normal text-[#0D1117] text-lg min-w-full p-3 border rounded-lg border-[#3D444D] my-2 hover:border-[#3D444D]  hover:text-[#0D1117] cursor-pointer transition duration-280"
            onClick={() => setActiveMode("infinite")}>
            Infinite Mode
          </button>
          <button 
            className="bg-white/50 hover:bg-white/80 font-[Roboto] font-normal text-[#0D1117] text-lg min-w-full p-3 border rounded-lg border-[#3D444D] my-2 hover:border-[#3D444D]  hover:text-[#0D1117] cursor-pointer transition duration-280"
            onClick={() => setActiveMode("calculator")}>
            Calculator Mode
          </button>
          <div className="flex justify-center w-full mt-auto">
            <div  onClick={ ()=> window.open("https://x.com/SujitInweb", "_blank")} className="h-12 w-12 p-1 mx-4 bg-amber-50 flex justify-center items-center rounded-lg cursor-pointer">
              <img src="./src/assets/twitter-x-line.svg" alt="" />
            </div>
            <button onClick={ ()=> window.open("https://github.com/SujitInWeb/Type.io", "_blank")} className="h-12 w-12 p-1 mx-4 bg-amber-50 flex justify-center items-center rounded-lg cursor-pointer">
              <img src="./src/assets/github-fill.svg" alt="" />
            </button>
          </div>
        </div>       
      </div>
    </>
    
  );
}
