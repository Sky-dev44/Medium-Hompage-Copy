import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";

function App() {
  const [sideOpen, setSideOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  function handleSidebarClose() {
    if (sideOpen) {
      setSideOpen(false);
    }
  }

  function handleProfileClose() {
    if (profileOpen) {
      setProfileOpen(false);
    }
  }

  return (
    <div>
      <Navbar
        isOpen={sideOpen}
        setIsOpen={setSideOpen}
        profileOpen={profileOpen}
        setProfileOpen={setProfileOpen}
      />
      <div>
        {sideOpen && <Sidebar isOpen={sideOpen} setIsOpen={setSideOpen} />}

        {profileOpen && <Profile />}
      </div>
    </div>
  );
}

export default App;
