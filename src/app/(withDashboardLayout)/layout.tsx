"use client";
import DashboardNavbar from "@/components/Shared/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "@/components/Shared/DashboardSidebar/DashboardSidebar";
import { useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white  text-black dark:text-white">
        {/* Header  */}{" "}
        <DashboardNavbar isDark={isDark} toggleTheme={toggleTheme} />
        {/* Sidebar */}
        <DashboardSidebar />
        {/* Content  */}
        <div className="min-h-screen p-2 sm:p-5 mt-16 sm:mt-24 mb-10 ml-14 md:ml-64 text-black">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
