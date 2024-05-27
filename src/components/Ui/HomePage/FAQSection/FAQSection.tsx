"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import img_1 from "@/asset/faq_img.png";
import img_2 from "@/asset/faq_tv.png";
import Image from "next/image";
import style from "./style.module.css";
import { useState } from "react";

const FAQSection = () => {
  const [isOpen, setIsOpen] = useState(null);
  const accordionsData = [
    {
      title: "How do I create an account?",
      description:
        'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',
    },
    {
      title: "What is your return policy?",
      description:
        "Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.",
    },
    {
      title: "Can I change my shipping address?",
      description:
        "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",
    },
    {
      title: "Are there any discounts for loyal customers?",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
  ];
  const toggle = (idx: any) => {
    setIsOpen((prevIdx: any) => (prevIdx === idx ? null : idx));
  };

  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        minHeight: "80vh",
        pt: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d5e6eb",
        position: "relative",
      }}
      className={style.header_shape}
    >
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Grid item xs={8} md={6}>
            <Box>
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <Box>
                  <Image src={img_1} alt="FAQ" />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: "-52%",
                    right: "24%",
                    left: "-5%",
                    bottom: 0,
                  }}
                >
                  <Image src={img_2} alt="FAQ" />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} md={6}>
            <Box>
              <Box>
                <Typography
                  variant="h6"
                  component="h1"
                  fontWeight={600}
                  color={"primary.main"}
                >
                  FAQ Question
                </Typography>
                <Typography variant="h3" component="h4" fontWeight={600}>
                  History & Family Adoption
                </Typography>
              </Box>
              <Box>
                <div className=" rounded-lg font-sans">
                  {accordionsData.map((PerAccordion, idx) => (
                    <div
                      key={idx}
                      className="border-b border-gray-500 last-of-type:border-none bg-white my-3 px-4 rounded-md"
                    >
                      <button
                        onClick={() => toggle(idx)}
                        className="flex h-full w-full items-center justify-between py-4 font-medium text-white dark:text-black"
                      >
                        <span className="sm:text-lg md:text-xl">
                          {PerAccordion.title}
                        </span>
                        <span className="rounded-full p-2 ">
                          <svg
                            className="ml-8 mr-7 shrink-0 fill-[#fff]"
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              y="7"
                              width="16"
                              height="2"
                              rx="1"
                              className={`origin-center transform transition duration-200 ease-out ${
                                isOpen === idx && "!rotate-180"
                              }`}
                            />
                            <rect
                              y="7"
                              width="16"
                              height="2"
                              rx="1"
                              className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                                isOpen === idx && "!rotate-180"
                              }`}
                            />
                          </svg>
                        </span>
                      </button>
                      <div
                        className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out ${
                          isOpen === idx
                            ? "grid-rows-[1fr] pb-3 opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          {PerAccordion.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQSection;
