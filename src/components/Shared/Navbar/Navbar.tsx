"use client";
import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const isLogin = true;

  const [isMenuOpen, setIsMenuOpen] = useState(false); //for navbar menu toogle
  const [isUSerMenuOpen, setIsUserMenuOpen] = useState(false); //for profile menu toggle

  //handle navbar menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //handle profile menu toogle
  const handleOpenUserMenu = () => {
    setIsUserMenuOpen(!isUSerMenuOpen);
  };
  return (
    <div className="">
      <Box
        sx={{
          width: "100%",
          position: "relative",
          zIndex: 30,
        }}
      >
        <Container
          sx={{
            display: "flex", // flex
            flexWrap: "wrap", // flex-wrap
            alignItems: "center", // items-center
            justifyContent: "space-between", // justify-between
            margin: "auto", // mx-auto
            padding: "1rem", // p-4
          }}
        >
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
                  lg: "3.5rem", // lg:text-5xl
                }, // text-5xl
                fontWeight: "bold", // font-bold
                color: "#f04336", // text-[#f04336]
              }}
            >
              PetVortex
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex", // flex
              order: { md: 2 }, // md:order-2
            }}
          >
            {/* ------- User profile    -------- */}
            <Box
              sx={{
                display: "flex", // flex
                alignItems: "center", // items-center
                position: "relative", // relative
                marginLeft: { sm: "2.5rem" }, // sm:ml-10
              }}
            >
              <Stack
                direction="row"
                gap={"5px"} // space-x-2
                justifyContent={{ sm: "center" }} // sm:justify-center
                alignItems="center" // items-center
                width="100%" // w-full
                marginTop={{ sm: "0", "400px": "1rem" }} // sm:mt-0 max-[400px]:mt-3
              >
                {/* ------ User Profile  toogle Button ------ */}
                <Link
                  href="/dashboard/mycart"
                  style={{
                    display: "flex",
                    marginLeft: -1,
                    borderColor: "red",
                    textDecoration: "none",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <SvgIcon
                    sx={{
                      color: "orange",
                      width: 24,
                      height: 24,
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                      clipRule="evenodd"
                    />
                  </SvgIcon>
                </Link>

                {isLogin && (
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{
                      display: "flex",
                      mx: 2,
                      borderColor: "red",
                      textDecoration: "none",
                      backgroundColor: "gray.800",
                      borderRadius: "50%",
                      "&:focus": {
                        ring: 4,
                        ringColor: "gray.300",
                        dark: {
                          ringColor: "gray.600",
                        },
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src="https://i.ibb.co/VDNwmhT/photo-2023-11-04-13-57-23-2.jpg" // Replace with actual user photo URL
                      alt="user"
                      sx={{ width: 32, height: 32, borderRadius: "50%" }}
                    />
                  </IconButton>
                )}

                <Link href="/login" type="button">
                  <Button size="small">Login</Button>
                </Link>

                {/* ------ Navbar toogle Button >>  i put this navbar toogle for my easy understanding------ */}
                <IconButton
                  onClick={toggleMenu}
                  aria-controls="navbar-search"
                  aria-expanded="false"
                  sx={{
                    display: { md: "none" },
                    p: 1,
                    width: 40,
                    height: 40,
                    justifyContent: "center",
                    color: "gray.500",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "gray.100",
                    },
                    "&:focus": {
                      outline: "none",
                      ring: 2,
                      ringColor: "gray.200",
                    },
                    dark: {
                      color: "gray.400",
                      "&:hover": {
                        backgroundColor: "gray.700",
                      },
                      "&:focus": {
                        ringColor: "gray.600",
                      },
                    },
                  }}
                >
                  <SvgIcon
                    sx={{
                      fontSize: 30,
                      mt: 2,
                    }}
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </SvgIcon>
                </IconButton>
              </Stack>

              {/* <!-- user profile  Dropdown menu --> */}
              <Box
                sx={{
                  zIndex: 50,
                  display: isUSerMenuOpen ? "block" : "none",
                  my: 2,
                  textAlign: "left",
                  bgcolor: "white",
                  boxShadow: 1,
                  borderRadius: 1,
                  position: "absolute",
                  top: "2rem",
                  transform: "translateY(2rem) translateX(-40%)",
                  width: "auto",
                  maxWidth: "100%",
                  dark: {
                    bgcolor: "gray.700",
                    color: "white",
                  },
                }}
              >
                <Box sx={{ px: 2, py: 1 }}>
                  <Typography variant="body2" color="text.primary">
                    Mehedi Hasan
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    iammehedi296@gmail.com
                  </Typography>
                </Box>
                <List>
                  <ListItem component="a" href="#">
                    <ListItemText primary="Dashboard" />
                  </ListItem>
                  <ListItem component={Link} href="/addproduct">
                    <ListItemText primary="Add Products" />
                  </ListItem>
                  <ListItem component={Link} href="/myproducts">
                    <ListItemText primary="My Products" />
                  </ListItem>
                  <ListItem>
                    <Button
                      type="button"
                      variant="contained"
                      color="primary"
                      onClick={async () => {
                        console.log("logout");
                      }}
                      sx={{
                        textTransform: "none",
                        background:
                          "linear-gradient(to right, #00c6ff, #0072ff)",
                        "&:hover": {
                          background:
                            "linear-gradient(to left, #00c6ff, #0072ff)",
                        },
                      }}
                    >
                      LogOut
                    </Button>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>

          <div
            className={`items-center justify-between ${
              isMenuOpen ? "" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 navbar_ui">
              <li className="relative block">
                <Link href="/" className="navLink_active" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="block py-2 pl-3 pr-4 text-black rounded  hover:text-orange-500 "
                >
                  Shop Now
                </Link>
              </li>

              <li>
                <Link
                  href="/aboutus"
                  className="block py-2 pl-3 pr-4 text-black   hover:text-orange-500 "
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contractus"
                  className="block py-2 pl-3 pr-4 text-black s hover:text-orange-500 "
                >
                  Contract Us
                </Link>
              </li>

              <li>
                <Link
                  href={"/dashboard/adminhome"}
                  className="block py-2 pl-3 pr-4 text-white rounded  md:p-0   hover:text-orange-500 "
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </Container>
        <div
          className="header-shape"
          data-background="img/bg/header_shape.png"
        ></div>
      </Box>
    </div>
  );
};

export default Navbar;
