import { getUserInfo } from "@/services/auth.services";
import dynamic from "next/dynamic";
import Link from "next/link";

const DashboardSidebar = () => {
  const UserSiderbarMenuItems = dynamic(
    () => import("@/components/Ui/UserSidebarItem/UserSidebarItem"),
    { ssr: false }
  );

  return (
    <div className="fixed flex flex-col top-14 md:top-[9%] left-0 w-14 hover:w-64 md:w-64 bg-[#ffffff] h-full text-black  transition-all duration-300 border-none z-10 sidebar shadow-xl">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <UserSiderbarMenuItems />
        <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs font-bold">
          Copyright @2024
        </p>
      </div>
    </div>
  );
};

export default DashboardSidebar;
