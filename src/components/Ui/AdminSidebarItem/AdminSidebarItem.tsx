import { getUserInfo } from "@/services/auth.services";
import Link from "next/link";

const AdminSidebarItem = () => {
  const userInfo = getUserInfo();
  return (
    <>
      {userInfo?.role === "admin" && (
        <ul className="flex flex-col py-4 space-y-1">
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase border-b-2 ">
                Main
              </div>
            </div>
          </li>
          <li>
            <Link
              href="/dashboard/user/"
              className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800  border-r-4 border-transparent hover:border-[#f04336] hover:bg-orange-50 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4 mb-1">
                <svg
                  className="w-5 h-5 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#f04336"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 text-md tracking-wide truncate font-bold ">
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/admin/addPet"
              className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800  border-r-4 border-transparent hover:border-[#f04336] hover:bg-orange-50 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4 mb-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#f04336"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 text-md tracking-wide truncate font-bold">
                Manage Users
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/admin/addPet"
              className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800  border-r-4 border-transparent hover:border-[#f04336] hover:bg-orange-50 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4 mb-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#f04336"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 text-md tracking-wide truncate font-bold">
                Add Pet
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/user/my-adoption-requests"
              className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800  border-r-4 border-transparent hover:border-[#f04336] hover:bg-orange-50 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4 mb-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#f04336"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 text-md tracking-wide truncate font-bold">
                Manage Pets
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/user/my-adoption-requests"
              className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800  border-r-4 border-transparent hover:border-[#f04336] hover:bg-orange-50 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4 mb-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#f04336"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 text-md tracking-wide truncate font-bold">
                Manage A.Requests
              </span>
            </Link>
          </li>
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center mt-5 h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase border-b-2 ">
                Settings
              </div>
            </div>
          </li>
          <li>
            <Link
              href="/dashboard/user/profile"
              className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800  border-r-4 border-transparent hover:border-[#f04336] hover:bg-orange-50 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4 mb-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#f04336"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 text-md tracking-wide truncate font-bold">
                Profile
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/user/change-password"
              className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800  border-r-4 border-transparent hover:border-[#f04336] hover:bg-orange-50 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4 mb-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#f04336"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 text- tracking-wide truncate font-bold">
                Change Password
              </span>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default AdminSidebarItem;
