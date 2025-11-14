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
        const res = await fetch("/data.json");

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
        <div
          className={` ${
            sideOpen ? "xl:flex-2 2xl:flex-6" : "xl:flex-4 2xl:flex-8"
          }`}
        >
          {sideOpen && (
            <Sidebar sideOpen={sideOpen} setSideOpen={setSideOpen} />
          )}
        </div>

        <div
          className={`md:flex-12 ${
            sideOpen ? "xl:flex-6 2xl:flex-10" : "xl:flex-20 2xl:flex-18"
          }`}
        >
          <BlogPost sideOpen={sideOpen} data={data} />
        </div>

        <div
          className={`lg:flex-6 ${
            sideOpen ? "xl:flex-2 2xl:flex-6" : "xl:flex-10 2xl:flex-13"
          } hidden lg:block `}
        >
          <StaffPicks data={data} sideOpen={sideOpen} />
        </div>
      </div>
    </div>
  );
}

export default App;
