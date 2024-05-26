"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import banner_1 from "@/asset/s_slider_bg01.jpg";
import banner_2 from "@/asset/s_slider_bg02.jpg";
import banner_3 from "@/asset/slider_bg02.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useEffect } from "react";
import {
  ArrowBack,
  ArrowBackIos,
  ArrowBackIosNew,
  ArrowForwardIos,
} from "@mui/icons-material";

const HeroSection = () => {
  useEffect(() => {
    const swiperInstance = (document.querySelector(".mySwiper") as any)?.swiper;
    if (swiperInstance) {
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <Box position="relative">
      <Swiper
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box
            sx={{
              position: "relative",
              minHeight: "100vh",
              "& img": {
                width: "100%",
                minHeight: "100vh",
                objectFit: "cover",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
              }}
            >
              <Image src={banner_1} width={1000} height={1000} alt="banner_1" />
            </Box>

            <Container>
              <Box
                sx={{
                  width: {
                    xs: "75%",
                    sm: "80%",
                    md: "50%",
                    lg: "50%",
                    xl: "50%",
                  },
                  mt: {
                    xs: "-120px",
                  },
                  minHeight: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  color={"white"}
                  fontWeight={600}
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "6rem",
                      xl: "6rem",
                    },
                  }}
                >
                  Best Friend{" "}
                  <Typography
                    variant="h1"
                    component="span"
                    sx={{
                      backgroundColor: "#f04336",
                      fontWeight: 900,
                      color: "white",
                      border: "none",
                      padding: "10px 25px",
                      textAlign: "center",
                      textDecoration: "none",
                      display: "inline-block",
                      fontSize: {
                        xs: "1rem",
                        sm: "2rem",
                        md: "2.5rem",
                        lg: "3rem",
                        xl: "4rem",
                      },
                      borderRadius: "10px 10px 20px 20px",
                      clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                      fontFamily: "Arial, sans-serif",
                      verticalAlign: "top",
                    }}
                  >
                    with
                  </Typography>
                </Typography>
                <Typography
                  variant="h1"
                  component="h1"
                  color={"white"}
                  fontWeight={600}
                  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "3rem",
                      xl: "6rem",
                    },
                  }}
                >
                  Happy Time
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  color={"white"}
                  fontWeight={600}
                  sx={{
                    fontSize: {
                      xs: "0.6rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "2rem",
                      xl: "1.7rem",
                    },
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  fuga eum itaque architecto, repudiandae sunt aspernatur saepe,
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    padding: {
                      xs: "10px 10px",
                      sm: "10px 20px",
                      md: "10px 20px",
                      lg: "20px 30px",
                      xl: "20px 30px",
                    },
                    fontSize: {
                      xs: "1rem",
                      sm: "1.2rem",
                      md: "1.2rem",
                      lg: "1.1rem",
                      xl: "1.1rem",
                    },
                    fontWeight: 600,
                    width: {
                      xs: "150px",
                      sm: "200px",
                      md: "200px",
                      lg: "200px",
                      xl: "200px",
                    },
                    my: "20px",
                  }}
                >
                  View More
                </Button>
              </Box>
            </Container>
          </Box>
        </SwiperSlide>

        {/* Repeat the above SwiperSlide block for other slides */}
        <SwiperSlide>
          <Box
            sx={{
              position: "relative",
              minHeight: "100vh",
              "& img": {
                width: "100%",
                minHeight: "100vh",
                objectFit: "cover",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
              }}
            >
              <Image src={banner_2} width={1000} height={1000} alt="banner_2" />
            </Box>

            <Container>
              <Box
                sx={{
                  width: {
                    xs: "75%",
                    sm: "80%",
                    md: "50%",
                    lg: "50%",
                    xl: "50%",
                  },
                  mt: {
                    xs: "-120px",
                  },
                  minHeight: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  color={"white"}
                  fontWeight={600}
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "6rem",
                      xl: "6rem",
                    },
                  }}
                >
                  Best Friend{" "}
                  <Typography
                    variant="h1"
                    component="span"
                    sx={{
                      backgroundColor: "#f04336",
                      fontWeight: 900,
                      color: "white",
                      border: "none",
                      padding: "10px 25px",
                      textAlign: "center",
                      textDecoration: "none",
                      display: "inline-block",
                      fontSize: {
                        xs: "1rem",
                        sm: "2rem",
                        md: "2.5rem",
                        lg: "3rem",
                        xl: "4rem",
                      },
                      borderRadius: "10px 10px 20px 20px",
                      clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                      fontFamily: "Arial, sans-serif",
                      verticalAlign: "top",
                    }}
                  >
                    with
                  </Typography>
                </Typography>
                <Typography
                  variant="h1"
                  component="h1"
                  color={"white"}
                  fontWeight={600}
                  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "3rem",
                      xl: "6rem",
                    },
                  }}
                >
                  Happy Time
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  color={"white"}
                  fontWeight={600}
                  sx={{
                    fontSize: {
                      xs: "0.6rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "2rem",
                      xl: "1.7rem",
                    },
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  fuga eum itaque architecto, repudiandae sunt aspernatur saepe,
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    padding: {
                      xs: "10px 10px",
                      sm: "10px 20px",
                      md: "10px 20px",
                      lg: "20px 30px",
                      xl: "20px 30px",
                    },
                    fontSize: {
                      xs: "1rem",
                      sm: "1.2rem",
                      md: "1.2rem",
                      lg: "1.1rem",
                      xl: "1.1rem",
                    },
                    fontWeight: 600,
                    width: {
                      xs: "150px",
                      sm: "200px",
                      md: "200px",
                      lg: "200px",
                      xl: "200px",
                    },
                    my: "20px",
                  }}
                >
                  View More
                </Button>
              </Box>
            </Container>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              position: "relative",
              minHeight: "100vh",
              "& img": {
                width: "100%",
                minHeight: "100vh",
                objectFit: "cover",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
              }}
            >
              <Image src={banner_3} width={1000} height={1000} alt="banner_3" />
            </Box>

            <Container>
              <Box
                sx={{
                  width: {
                    xs: "75%",
                    sm: "80%",
                    md: "50%",
                    lg: "50%",
                    xl: "50%",
                  },
                  mt: {
                    xs: "-120px",
                  },
                  minHeight: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  color={"white"}
                  fontWeight={600}
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "6rem",
                      xl: "6rem",
                    },
                  }}
                >
                  Best Friend{" "}
                  <Typography
                    variant="h1"
                    component="span"
                    sx={{
                      backgroundColor: "#f04336",
                      fontWeight: 900,
                      color: "white",
                      border: "none",
                      padding: "10px 25px",
                      textAlign: "center",
                      textDecoration: "none",
                      display: "inline-block",
                      fontSize: {
                        xs: "1rem",
                        sm: "2rem",
                        md: "2.5rem",
                        lg: "3rem",
                        xl: "4rem",
                      },
                      borderRadius: "10px 10px 20px 20px",
                      clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                      fontFamily: "Arial, sans-serif",
                      verticalAlign: "top",
                    }}
                  >
                    with
                  </Typography>
                </Typography>
                <Typography
                  variant="h1"
                  component="h1"
                  color={"white"}
                  fontWeight={600}
                  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "3rem",
                      xl: "6rem",
                    },
                  }}
                >
                  Happy Time
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  color={"white"}
                  fontWeight={600}
                  sx={{
                    fontSize: {
                      xs: "0.6rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "2rem",
                      xl: "1.7rem",
                    },
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  fuga eum itaque architecto, repudiandae sunt aspernatur saepe,
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    padding: {
                      xs: "10px 10px",
                      sm: "10px 20px",
                      md: "10px 20px",
                      lg: "20px 30px",
                      xl: "20px 30px",
                    },
                    fontSize: {
                      xs: "1rem",
                      sm: "1.2rem",
                      md: "1.2rem",
                      lg: "1.1rem",
                      xl: "1.1rem",
                    },
                    fontWeight: 600,
                    width: {
                      xs: "150px",
                      sm: "200px",
                      md: "200px",
                      lg: "200px",
                      xl: "200px",
                    },
                    my: "20px",
                  }}
                >
                  View More
                </Button>
              </Box>
            </Container>
          </Box>
        </SwiperSlide>
      </Swiper>
      {/* Custom Navigation Buttons */}
      <Button
        className="custom-prev"
        sx={{ position: "absolute", top: "50%", left: "10px", zIndex: 2 }}
      >
        <ArrowBackIosNew />
      </Button>
      <Button
        className="custom-next"
        sx={{ position: "absolute", top: "50%", right: "10px", zIndex: 2 }}
      >
        <ArrowForwardIos />
      </Button>
    </Box>
  );
};

export default HeroSection;
