"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Box, Button, Stack, Typography, colors } from "@mui/material";
import petIcon from "@/asset/pets/pawprint.png";
import pet_1 from "@/asset/pets/adop_img01.png";
import pet_2 from "@/asset/pets/adop_img02.png";
import pet_3 from "@/asset/pets/adop_img03.png";
import pet_4 from "@/asset/pets/adop_img04.png";
import Image from "next/image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Link from "next/link";

const FeaturedPets = () => {
  return (
    <Box mt={8}>
      <Box
        sx={{
          textAlign: "center",
          "& img": {
            margin: "0px auto",
          },
        }}
      >
        <Image src={petIcon} width={30} height={30} alt={"petIcon"} />
        <Typography
          variant="h6"
          typography={"p"}
          color={"primary.main"}
          fontWeight={700}
          my={1}
        >
          Meet the animals
        </Typography>
        <Typography
          variant="h4"
          component="h1"
          color={"black"}
          fontWeight={600}
          my={1}
        >
          Puppies Waiting for Adoption
        </Typography>
        <Box
          sx={{
            my: 1,
          }}
        >
          <Typography component={"p"} fontWeight={600}>
            The best overall dog DNA test is Embark Breed & Health Kit (view at
            Chewy) which
          </Typography>
          <Typography component={"p"} fontWeight={600}>
            provides you with a breed brwn and information most dogs
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          padding: 15,
        }}
      >
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={pet_1} width={500} height={500} alt={"petIcon"} />
              </Box>
              <Box>
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
                  my={2}
                >
                  <CalendarMonthIcon
                    sx={{
                      color: "#f04336",
                    }}
                  />
                  <Typography component={"p"}>Birth:</Typography>
                  <Typography component={"p"}>2021</Typography>
                </Stack>
                <Typography
                  variant="h5"
                  component={"h1"}
                  fontWeight={600}
                  textAlign={"center"}
                  sx={{
                    "&:hover": {
                      color: "#f04336",
                    },
                  }}
                >
                  Goldren Tommy
                </Typography>
                <Typography
                  component={"p"}
                  fontWeight={600}
                  textAlign={"center"}
                >
                  French Bulldog is a breed of domestic
                </Typography>
                <Typography
                  component={"p"}
                  fontWeight={600}
                  textAlign={"center"}
                  sx={{
                    "&:hover": {
                      color: "#f04336",
                    },
                  }}
                >
                  dog, bred to be companion.
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Button LinkComponent={Link} href="/">
                    Read More
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "10%",
                  right: "5%",
                  width: "12%",
                  height: "8%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  backgroundColor: "#f04336",
                  zIndex: 1,
                  padding: 1,
                  color: "white",
                }}
              >
                New
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={pet_2} width={500} height={500} alt={"petIcon"} />
              </Box>
              <Box>
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
                  my={2}
                >
                  <CalendarMonthIcon
                    sx={{
                      color: "#f04336",
                    }}
                  />
                  <Typography component={"p"}>Birth:</Typography>
                  <Typography component={"p"}>2021</Typography>
                </Stack>
                <Typography
                  variant="h5"
                  component={"h1"}
                  fontWeight={600}
                  textAlign={"center"}
                  sx={{
                    "&:hover": {
                      color: "#f04336",
                    },
                  }}
                >
                  Goldren Tommy
                </Typography>
                <Typography
                  component={"p"}
                  fontWeight={600}
                  textAlign={"center"}
                >
                  French Bulldog is a breed of domestic
                </Typography>
                <Typography
                  component={"p"}
                  fontWeight={600}
                  textAlign={"center"}
                  sx={{
                    "&:hover": {
                      color: "#f04336",
                    },
                  }}
                >
                  dog, bred to be companion.
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Button LinkComponent={Link} href="/">
                    Read More
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "10%",
                  right: "5%",
                  width: "12%",
                  height: "8%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  backgroundColor: "#f04336",
                  zIndex: 1,
                  padding: 1,
                  color: "white",
                }}
              >
                New
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={pet_3} width={500} height={500} alt={"petIcon"} />
              </Box>
              <Box>
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
                  my={2}
                >
                  <CalendarMonthIcon
                    sx={{
                      color: "#f04336",
                    }}
                  />
                  <Typography component={"p"}>Birth:</Typography>
                  <Typography component={"p"}>2021</Typography>
                </Stack>
                <Typography
                  variant="h5"
                  component={"h1"}
                  fontWeight={600}
                  textAlign={"center"}
                  sx={{
                    "&:hover": {
                      color: "#f04336",
                    },
                  }}
                >
                  Goldren Tommy
                </Typography>
                <Typography
                  component={"p"}
                  fontWeight={600}
                  textAlign={"center"}
                >
                  French Bulldog is a breed of domestic
                </Typography>
                <Typography
                  component={"p"}
                  fontWeight={600}
                  textAlign={"center"}
                  sx={{
                    "&:hover": {
                      color: "#f04336",
                    },
                  }}
                >
                  dog, bred to be companion.
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Button LinkComponent={Link} href="/">
                    Read More
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "10%",
                  right: "5%",
                  width: "12%",
                  height: "8%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  backgroundColor: "#f04336",
                  zIndex: 1,
                  padding: 1,
                  color: "white",
                }}
              >
                New
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={pet_4} width={500} height={500} alt={"petIcon"} />
              </Box>
              <Box>
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
                  my={2}
                >
                  <CalendarMonthIcon
                    sx={{
                      color: "#f04336",
                    }}
                  />
                  <Typography component={"p"}>Birth:</Typography>
                  <Typography component={"p"}>2021</Typography>
                </Stack>
                <Typography
                  variant="h5"
                  component={"h1"}
                  fontWeight={600}
                  textAlign={"center"}
                  sx={{
                    "&:hover": {
                      color: "#f04336",
                    },
                  }}
                >
                  Goldren Tommy
                </Typography>
                <Typography
                  component={"p"}
                  fontWeight={600}
                  textAlign={"center"}
                >
                  French Bulldog is a breed of domestic
                </Typography>
                <Typography
                  component={"p"}
                  fontWeight={600}
                  textAlign={"center"}
                  sx={{
                    "&:hover": {
                      color: "#f04336",
                    },
                  }}
                >
                  dog, bred to be companion.
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Button LinkComponent={Link} href="/">
                    Read More
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "10%",
                  right: "5%",
                  width: "12%",
                  height: "8%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  backgroundColor: "#f04336",
                  zIndex: 1,
                  padding: 1,
                  color: "white",
                }}
              >
                New
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={pet_1} width={500} height={500} alt={"petIcon"} />
              </Box>
              <Box>
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
                  my={2}
                >
                  <CalendarMonthIcon
                    sx={{
                      color: "#f04336",
                    }}
                  />
                  <Typography component={"p"}>Birth:</Typography>
                  <Typography component={"p"}>2021</Typography>
                </Stack>
                <Typography
                  variant="h5"
                  component={"h1"}
                  fontWeight={600}
                  textAlign={"center"}
                  sx={{
                    "&:hover": {
                      color: "#f04336",
                    },
                  }}
                >
                  Goldren Tommy
                </Typography>
                <Typography
                  component={"p"}
                  fontWeight={600}
                  textAlign={"center"}
                >
                  French Bulldog is a breed of domestic
                </Typography>
                <Typography
                  component={"p"}
                  fontWeight={600}
                  textAlign={"center"}
                  sx={{
                    "&:hover": {
                      color: "#f04336",
                    },
                  }}
                >
                  dog, bred to be companion.
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Button LinkComponent={Link} href="/">
                    Read More
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "10%",
                  right: "5%",
                  width: "12%",
                  height: "8%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  backgroundColor: "#f04336",
                  zIndex: 1,
                  padding: 1,
                  color: "white",
                }}
              >
                New
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default FeaturedPets;
