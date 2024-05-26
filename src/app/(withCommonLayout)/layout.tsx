import Navbar from "@/components/Shared/Navbar/Navbar";
import { Box } from "@mui/material";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
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
    </>
  );
};

export default CommonLayout;
