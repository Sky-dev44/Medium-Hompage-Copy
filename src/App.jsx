import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}

export default App;
