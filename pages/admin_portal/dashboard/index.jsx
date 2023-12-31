import { useEffect, useState } from "react";
import Card from "./Card";
import { useRouter } from "next/router";
import { UploadTrips } from "@/components";

export default function index() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [allTrips, setAllTrips] = useState([]);

  // Fetching trips from backend
  const fetchTrips = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/api/trips/getAllTrips`
    );
    const data = await response.json();
    setAllTrips(data);
  };

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      router.push("/invalid_access");
    }
    // Function to parse URL parameters
    const getUrlParameter = (name) => {
      const searchParams = new URLSearchParams(window.location.search);
      return searchParams.get(name) || "";
    };

    const fetchAndSetTrips = async () => {
      if (allTrips.length === 0) {
        await fetchTrips();
      }

      if (!localStorage.getItem("authToken")) {
        router.push("/invalid_access");
      }

      // Get tab from URL and set state
      const currentTab = getUrlParameter("activeTab");
      if (currentTab) {
        if (currentTab > 3) {
          setActiveTab(parseInt(1, 10));
        }
        setActiveTab(parseInt(currentTab, 10));
      }
    };

    fetchAndSetTrips();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      router.push("/invalid_access");
    }
    // Update the URL with the email value
    if (activeTab > 3) {
      setActiveTab(1);
    }
    const queryString = activeTab
      ? `?activeTab=${encodeURIComponent(activeTab)}`
      : "";
    window.history.replaceState({}, "", queryString);
  }, [activeTab]);

  return (
    <div className="flex relative">
      <button
        onClick={toggleSidebar}
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <aside
        id="logo-sidebar"
        className={`z-40 w-64 h-auto min-h-screen transition-transform ${
          isSidebarOpen ? "" : "-translate-x-full sm:translate-x-0"
        } mr-8 `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-200  ">
          <ul className="space-y-2 font-medium">
            <li
              className={`flex items-center p-2 text-gray-900 cursor-pointer rounded-lg hover:bg-gray-100  hover:text-white dark:hover:bg-gray-600 group ${
                activeTab === 1 ? "bg-gray-600 text-white" : ""
              }`}
              onClick={() => {
                setActiveTab(1);
              }}
            >
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ml-3">Dashboard</span>
            </li>
            <li
              className={`flex items-center p-2 text-gray-900 cursor-pointer rounded-lg hover:bg-gray-100  hover:text-white dark:hover:bg-gray-600 group ${
                activeTab === 2 ? "bg-gray-600 text-white" : ""
              }`}
              onClick={() => {
                setActiveTab(2);
              }}
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">All Trips</span>
              {/* <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span> */}
            </li>
            <li
              className={`flex items-center p-2 text-gray-900 cursor-pointer rounded-lg hover:bg-gray-100  hover:text-white dark:hover:bg-gray-600 group ${
                activeTab === 3 ? "bg-gray-600 text-white" : ""
              }`}
              onClick={() => {
                setActiveTab(3);
              }}
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">
                Upload Trips
              </span>
              {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                3
              </span> */}
            </li>
            <li
              className={`flex items-center p-2 text-gray-900 cursor-pointer rounded-lg hover:bg-gray-100  hover:text-white dark:hover:bg-gray-600 group `}
              onClick={() => {
                localStorage.clear();
                router.push("/admin_portal");
              }}
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Sign out</span>
            </li>
          </ul>
        </div>
      </aside>
      <div
        id="allTrips"
        className={`${isSidebarOpen ? "ml-72" : "sm:ml-0"} w-full ${
          activeTab === 2 ? "block" : "hidden"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-8 my-10 pr-8">
          {allTrips &&
            allTrips.map((item, index) => (
              <Card key={index} trip={item} id={item._id} />
            ))}
        </div>
      </div>
      <div
        id="Dashboard"
        className={`${
          activeTab === 1 ? "block" : "hidden"
        } h-auto w-full flex items-center gap-8 flex-col justify-center text-6xl font-semibold`}
      >
        Admin Dashboard
        
        <div
          className="rounded-lg bg-blue-600 text-xl px-4 py-2 cursor-pointer"
          onClick={() => {
            setActiveTab(2);
          }}
        >
          Explore <span className="ml-2">&rarr;</span>
        </div>
      </div>
      <div
        id="uploadTrips"
        className={`${activeTab === 3 ? "block" : "hidden"} h-full w-full p-8`}
      >
        <UploadTrips />
      </div>
    </div>
  );
}
