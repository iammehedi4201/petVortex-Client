import dynamic from "next/dynamic";

const DashboardSidebar = () => {
  const UserSiderbarMenuItems = dynamic(
    () => import("@/components/Ui/UserSidebarItem/UserSidebarItem"),
    { ssr: false }
  );

  const AdminSiderbarMenuItems = dynamic(
    () => import("@/components/Ui/AdminSidebarItem/AdminSidebarItem"),
    { ssr: false }
  );

  return (
    <div className="fixed flex flex-col top-14 md:top-[11%] left-0 w-14 hover:w-64 md:w-64 bg-[#ffffff] h-full text-black  transition-all duration-300 border-none z-10 sidebar shadow-md ">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <UserSiderbarMenuItems />
        <AdminSiderbarMenuItems />
      </div>
    </div>
  );
};

export default DashboardSidebar;
