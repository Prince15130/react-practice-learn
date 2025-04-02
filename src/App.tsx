import { useState } from "react";
import { MainContent } from "./components/main-content";
import Sidebar from "./components/sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="h-screen flex px-3 py-4 bg-[3F3F5F7]">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <MainContent />
      </div>
    </>
  );
}

export default App;
