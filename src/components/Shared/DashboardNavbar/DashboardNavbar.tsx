import { useGetMyProfileQuery } from "@/redux/api/user/userApi";
import { removeUser } from "@/services/auth.services";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const DashboardNavbar = () => {
  const router = useRouter();
  const { data: myProfile } = useGetMyProfileQuery("");

  return (
    <div
      className={`fixed w-full flex items-center justify-between h-14 md:h-24 text-black px-2 shadow-sm shadow-[#f04336]`}
    >
      <div className="flex  items-center justify-start md:justify-center  w-14 h-14  md:w-64 md:h-20 bg-white">
        <Box
          sx={{
            display: "flex", // flex
            justifyContent: "center", // justify-center
            alignItems: "center", // items-center
            height: "5rem", // h-20
          }}
        >
          <Typography
            variant="h1"
            component={"h1"}
            sx={{
              fontSize: {
                xs: "1.3rem", // text-2xl
                sm: "2.5rem", // sm:text-3xl
                md: "3rem", // md:text-4xl
                lg: "2rem",
              },
              fontWeight: "900",
              color: "#f04336",
              display: {
                md: "block",
              },
            }}
          >
            PetVortex
          </Typography>
        </Box>
      </div>
      <div className="hidden md:block ml-[-50%]">
        <h1 className="text-gray-400 font-bold">
          Hi, MD {myProfile?.data?.name}
        </h1>
        <h1 className="text-[#f04336] font-extrabold text-2xl">
          Welcome to PetVortex
        </h1>
      </div>
      <div className="flex justify-between items-center h-14 bg-white header-right">
        <ul className="flex items-center ">
          <li className="mx-2">
            <Button
              onClick={() => {
                removeUser();
                router.push("/");
              }}
              className="flex items-center mr-4 hover:text-blue-100"
            >
              <span className="inline-flex mx-1">
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
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardNavbar;
