"use client";
import { getUserInfo } from "@/services/auth.services";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const userInfo = getUserInfo();
  if (!userInfo) {
    router.push("/login");
    return '';
  }

  return <>{children}</>;
};

export default PrivateRoute;
