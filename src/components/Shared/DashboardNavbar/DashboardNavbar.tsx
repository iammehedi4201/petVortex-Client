import { useGetMyProfileQuery } from "@/redux/api/user/userApi";
import Image from "next/image";

type DashboardNavbarProps = {
  isDark: boolean;
  toggleTheme: () => void;
};

const DashboardNavbar = ({ isDark, toggleTheme }: DashboardNavbarProps) => {
  const { data: myProfile } = useGetMyProfileQuery("");

  return (
    <div
      className={`fixed w-full flex items-center justify-between h-14 md:h-24 text-black z-50 shadow-xl`}
    >
      <div className="flex  items-center justify-start md:justify-center  w-14 h-14  md:w-64 md:h-20 bg-white">
        <Image
          alt="admin"
          width={500}
          height={500}
          className="w-7 h-7 md:w-24 md:h-24 mr-2 rounded-md overflow-hidden p-5"
          src={myProfile?.data?.profilePicture}
        />
      </div>
      <div className="hidden md:block ml-[-56%]">
        <h1 className="text-gray-400 font-bold">
          Hi, MD {myProfile?.data?.name}
        </h1>
        <h1 className="text-[#f04336] font-extrabold text-2xl">
          Welcome to PetVortex
        </h1>
      </div>
      <div className="flex justify-between items-center h-14 bg-white header-right">
        <div></div>
        <div className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
          <button className="outline-none focus:outline-none">
            <svg
              className="w-5 text-gray-600 h-5 cursor-pointer"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
          />
        </div>
        <ul className="flex items-center">
          <ul className="flex items-center">
            <li>
              <button
                aria-hidden="true"
                className="group p-2 transition-colors duration-200 rounded-full shadow-md bg-white hover:bg-white dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none"
                onClick={toggleTheme}
              >
                {isDark ? (
                  <svg
                    x-show="isDark"
                    width="24"
                    height="24"
                    className="fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke=""
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                ) : (
                  <svg
                    x-show="!isDark"
                    width="24"
                    height="24"
                    className="fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke=""
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
            </li>
            {/* Rest of your component */}
          </ul>
          <li>
            <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
          </li>
          <li>
            <a href="#" className="flex items-center mr-4 hover:text-blue-100">
              <span className="inline-flex mr-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
              </span>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardNavbar;
