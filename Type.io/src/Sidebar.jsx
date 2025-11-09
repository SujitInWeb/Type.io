export default function Sidebar({ setActiveMode, isOpen, setIsOpen }) {
  return (
    <>
      {/* Sidebar */}
      <div 
        className={`
          fixed lg:static
          w-[240px] md:w-[250px] lg:w-[230px]
          h-screen 
          p-7 
          flex items-center flex-col 
          bg-[#000000] 
          z-40
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Close button for mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden absolute top-4 right-4 text-white/70 hover:text-white transition"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M12 10.586L16.95 5.636 18.364 7.05 13.414 12l4.95 4.95-1.414 1.414L12 13.414l-4.95 4.95-1.414-1.414L10.586 12l-4.95-4.95L7.05 5.636z"/>
          </svg>
        </button>

        <h1 className="w-full text-center font-bold font-[Bungee_Spice] text-4xl text-[#F0F6FC] pt-8 pb-9">
          Type.io
        </h1>
        
        <button 
          className="bg-white/50 hover:bg-white/80 font-[Roboto] font-normal text-[#0D1117] text-lg min-w-full p-3 border rounded-lg border-[#3D444D] my-2 hover:border-[#3D444D] hover:text-[#0D1117] cursor-pointer transition duration-280"
          onClick={() => {
            setActiveMode("infinite");
            setIsOpen(false);
          }}
        >
          Infinite Mode
        </button>
        
        <button 
          className="bg-white/50 hover:bg-white/80 font-[Roboto] font-normal text-[#0D1117] text-lg min-w-full p-3 border rounded-lg border-[#3D444D] my-2 hover:border-[#3D444D] hover:text-[#0D1117] cursor-pointer transition duration-280"
          onClick={() => {
            setActiveMode("calculator");
            setIsOpen(false);
          }}
        >
          Calculator Mode
        </button>
        
        <div className="flex justify-center w-full mt-auto mb-4">
          <div 
            onClick={() => window.open("https://x.com/SujitInweb", "_blank")} 
            className="h-12 w-12 p-1 mx-4 bg-amber-50 flex justify-center items-center rounded-lg cursor-pointer hover:bg-amber-100 transition"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"/>
            </svg>
          </div>
          <button 
            onClick={() => window.open("https://github.com/SujitInWeb/Type.io", "_blank")} 
            className="h-12 w-12 p-1 mx-4 bg-amber-50 flex justify-center items-center rounded-lg cursor-pointer hover:bg-amber-100 transition"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}