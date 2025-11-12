import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import StaffPicks from "./components/StaffPicks";

function App() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5173/data.json");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Fetched:", data);
        setData(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar
        isOpen={sideOpen}
        setIsOpen={setSideOpen}
        profileOpen={profileOpen}
        setProfileOpen={setProfileOpen}
      />
      {profileOpen && <Profile />}

      <div className="flex">
        <div className="xl:flex-4">
          {sideOpen && (
            <Sidebar sideOpen={sideOpen} setSideOpen={setSideOpen} />
          )}
        </div>

        <div className="flex-12">
          <BlogPost data={data} />
        </div>

        <div className="md:flex-6 hidden md:block">
          <StaffPicks data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
