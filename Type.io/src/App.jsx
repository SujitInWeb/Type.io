import { useState } from "react";
import Sidebar from "./Sidebar";
import InfiniteMode from "./Infinite";
import CalculatorMode from "./Calculator";

export default function App() {
  const [activeMode, setActiveMode] = useState("infinite"); // default mode

  return (
    <>
      <div className="flex ">
        {/* Sidebar controls mode switching */}
        <Sidebar setActiveMode={setActiveMode} />

        <div className="flex-1">
          {activeMode === "infinite" && <InfiniteMode />}
          {activeMode === "calculator" && <CalculatorMode />}
        </div>
      </div>
    </>

  );
}
