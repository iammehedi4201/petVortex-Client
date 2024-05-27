"use client";
import { Box, Container } from "@mui/material";
import style from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import brand_1 from "@/asset/Brand/brand_item06.png";
import brand_2 from "@/asset/Brand/brand_item03.png";
import brand_3 from "@/asset/Brand/brand_item04.png";
import brand_4 from "@/asset/Brand/brand_item05.png";

const BrandSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "20vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Container>
        <Swiper
          slidesPerView={7}
          spaceBetween={10}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={brand_1} width={70} height={70} alt={"petIcon"} />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={brand_1} width={70} height={70} alt={"petIcon"} />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={brand_1} width={70} height={70} alt={"petIcon"} />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{}}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={brand_2} width={70} height={70} alt={"petIcon"} />
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{}}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={brand_3} width={70} height={70} alt={"petIcon"} />
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{}}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={brand_4} width={70} height={70} alt={"petIcon"} />
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{}}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={brand_1} width={70} height={70} alt={"petIcon"} />
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{}}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={brand_1} width={70} height={70} alt={"petIcon"} />
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{}}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={brand_1} width={70} height={70} alt={"petIcon"} />
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
};

export default BrandSection;
