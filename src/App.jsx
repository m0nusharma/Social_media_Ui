import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Deshboard from "./Pages/Deshboard/Deshboard";

function App() {
  const [] = useState();

  return (
    <div className="overflow-hidden">
      <Deshboard />
    </div>
  );
}

export default App;
