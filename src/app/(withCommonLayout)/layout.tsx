import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { authOptions } from "@/services/auth.option";
import { Box } from "@mui/material";
import { getServerSession } from "next-auth";
import React from "react";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default CommonLayout;
