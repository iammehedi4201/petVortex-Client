"use client";
import DashboardNavbar from "@/components/Shared/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "@/components/Shared/DashboardSidebar/DashboardSidebar";
import { isLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  //:check if user is logged in
  if (!isLoggedIn()) {
    return router.push("/");
  }

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white  text-black dark:text-white">
        {/* Header  */}
        <DashboardNavbar />
        {/* Sidebar */}
        <DashboardSidebar />
        {/* Content  */}
        <div className="min-h-screen p-5  mt-16 sm:mt-24 mb-10 ml-14 md:ml-64 text-black z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
