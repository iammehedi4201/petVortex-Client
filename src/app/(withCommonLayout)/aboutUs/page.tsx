import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUsPage = () => {
  return (
    <div className=" relative">
      <SectionHeader HeaderTitle="About us" />
      <div>
        <section className="flex flex-col items-center bg-stone-100 xl:min-h-screen font-poppins sm:p-10">
          <div
            data-aos="fade-right"
            className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6"
          >
            <div className="flex flex-wrap ">
              <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                <span className="text-md text-orange-600 font-bold text-or uppercase">
                  Who we are
                </span>
                <h2 className="mt-2 mb-6 text-2xl font-bold text-gray-500">
                  We are the large business expert in Europe and Asia
                </h2>
                <p className="mb-10 text-gray-600 dark:text-gray-400 text-justify ">
                  Our mission is to bring our customers quality products, at the
                  lowest price with the best service in the industry. That is
                  why we are premier online marijuana dispensary! We offer our
                  clients a user-friendly platform where you’re only a few
                  clicks away from guaranteed delivery of the highest quality
                  marijuana products right to your front door-step.
                </p>
                <button className="btn   btn-xl px-4 py-3 text-white font-bold uppercase transition-all transform bg-[#f04336] rounded  hover:bg-black">
                  About Us
                </button>
              </div>
              <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                <div className="relative">
                  <Image
                    width={720}
                    height={720}
                    alt="person holding red ceramic plate with food"
                    src="https://i.ibb.co/Z6bffQ4/H1-B2000.jpg"
                    className="relative z-10 w-[90%] min-h-[45vh] rounded mx-auto"
                  />
                  <div className="absolute hidden w-full sm:w-[90%]  h-full bg-orange-400 rounded -bottom-6 left-6 lg:block"></div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------- */}
          <div
            data-aos="fade-right"
            className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6"
          >
            <div className="flex flex-wrap-reverse">
              <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                <div className="relative">
                  <Image
                    width={720}
                    height={720}
                    alt="img_2"
                    src="https://i.ibb.co/FHgTqGt/slider-4.jpg"
                    className="relative z-10 w-[90%] min-h-[45vh] rounded mx-auto"
                  />
                  <div className="absolute hidden w-full sm:w-[90%] h-full bg-orange-400 rounded -bottom-6 left-6 lg:block"></div>
                </div>
              </div>
              <div className="w-full px-10 my-10 lg:w-1/2 lg:mb-0 ">
                <span className="text-md text-[#f04336] font-semibold text-or uppercase">
                  Why choose us
                </span>
                <h2 className="mt-2 mb-6 text-2xl font-bold text-gray-500">
                  We are the large business expert in Europe and Asia
                </h2>
                <p className="mb-10 text-gray-600 dark:text-gray-400 text-justify">
                  Our mission is to bring our customers quality products, at the
                  lowest price with the best service in the industry. That is
                  why we are premier online marijuana dispensary! We offer our
                  clients a user-friendly platform where you’re only a few
                  clicks away from guaranteed delivery of the highest quality
                  marijuana products right to your front door-step.
                </p>
                <button className="btn   btn-xl px-4 py-3 text-gray-100 font-bold uppercase transition-all transform bg-[#f04336] rounded  hover:bg-black ">
                  About Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="flex items-center justify-center w-full max-w-screen-xl min-h-[65vh] mx-auto p-20">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="">
            <div className="max-w-md w-full mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Box
                sx={{
                  width: "100%",
                  height: 300,

                  "& img": {
                    width: "100%",
                    height: "100%",
                  },
                }}
              >
                <Image
                  width={720}
                  height={440}
                  className="rounded-t-lg"
                  src="https://i.ibb.co/N3DDHyr/photo-1583337130417-3346a1be7dee.jpg"
                  alt=""
                />
              </Box>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Box
                sx={{
                  width: "100%",
                  height: 300,

                  "& img": {
                    width: "100%",
                    height: "100%",
                  },
                }}
              >
                <Image
                  width={720}
                  height={440}
                  className="rounded-t-lg"
                  src="https://i.ibb.co/gyVK4sV/photo-1598134493179-51332e56807f.jpg"
                  alt=""
                />
              </Box>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Box
                sx={{
                  width: "100%",
                  height: 300,

                  "& img": {
                    width: "100%",
                    height: "100%",
                  },
                }}
              >
                <Image
                  width={720}
                  height={440}
                  className="rounded-t-lg"
                  src="https://i.ibb.co/NFM7KLB/photo-1583511666372-62fc211f8377.jpg"
                  alt=""
                />
              </Box>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center  my-2">
        <div className="space-y-3 ">
          <h1 className="font-bold text-4xl">
            Get Your <span className="text-[#f04336]">Pets</span> Today
          </h1>
          <div className="w-full flex justify-center">
            <Button
              LinkComponent={Link}
              href="/pets"
              sx={{
                "&:hover": {
                  backgroundColor: "black",
                },
              }}
            >
              Adopt Now
            </Button>
          </div>
        </div>
      </section>
      <div className="bg-[#f5f5f4] relative">
        <div className="w-full max-w-screen-xl min-h-screen flex items-center justify-center mx-auto p-10">
          <div>
            <section className="flex items-center py-24 font-poppins bg-[] ">
              <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
                <div className="mb-10 text-center">
                  <span className="block mb-4 text-sm font-semibold leading-4 tracking-widest text-center text-[#f04336] uppercase 0">
                    Team
                  </span>
                  <h1 className="text-3xl font-bold capitalize dark:text-black">
                    {" "}
                    Meet The Team{" "}
                  </h1>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
                  <a
                    className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row bg-gray-800 shadow-md shadow-[#0a4374]"
                    href="#"
                  >
                    <div className="w-full overflow-hidden lg:w-2/4 h-80">
                      <Image
                        width={720}
                        height={720}
                        className="object-cover w-full h-full transition-all hover:scale-110"
                        src="https://i.postimg.cc/4NMZPYdh/pexels-dinielle-de-veyra-4195342.jpg"
                        alt=""
                      />
                    </div>
                    <div className="relative flex self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12">
                      <div>
                        <h2 className="mb-2 text-xl font-bold text-[#f04336]">
                          Henry Robinson
                        </h2>
                        <p className="mb-4 text-sm text-[#f04336] dark:text-blue-400">
                          Director
                        </p>
                        <p className="mb-4 text-sm text-gray-400 dark:text-gray-400">
                          Lorem ipsum dolor sit amet, consectetu incididunt ut
                          dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <div className="flex">
                          <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-[#f04336]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="w-6 h-6 bi bi-facebook "
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          </span>
                          <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-[#f04336]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="w-6 h-6 bi bi-twitter"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                          </span>
                          <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-[#f04336]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="w-6 h-6 bi bi-instagram"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row bg-gray-800 shadow-md shadow-[#0a4374]"
                    href="#"
                  >
                    <div className="w-full overflow-hidden lg:w-2/4 h-80">
                      <Image
                        width={720}
                        height={720}
                        className="object-cover w-full h-full transition-all hover:scale-110"
                        src="https://i.postimg.cc/JzmrHQmk/pexels-pixabay-220453.jpg"
                        alt=""
                      />
                    </div>
                    <div className="relative flex self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12">
                      <div>
                        <h2 className="mb-2 text-xl font-bold dark:text-[#f04336]">
                          Henry Robinson
                        </h2>
                        <p className="mb-4 text-sm text-[#f04336] dark:text-blue-400">
                          Director
                        </p>
                        <p className="mb-4 text-sm text-gray-400 dark:text-gray-400">
                          Lorem ipsum dolor sit amet, consectetu incididunt ut
                          dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <div className="flex">
                          <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-[#f04336]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="w-6 h-6 bi bi-facebook "
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          </span>
                          <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-[#f04336]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="w-6 h-6 bi bi-twitter"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                          </span>
                          <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-[#f04336]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="w-6 h-6 bi bi-instagram"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row shadow-md shadow-[#0a4374] bg-gray-800"
                    href="#"
                  >
                    <div className="w-full overflow-hidden lg:w-2/4 h-80">
                      <Image
                        width={720}
                        height={720}
                        className="object-cover w-full h-full transition-all hover:scale-110"
                        src="https://i.postimg.cc/05hmHMx1/pexels-emmy-e-2381069.jpg"
                        alt=""
                      />
                    </div>
                    <div className="relative flex self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12">
                      <div>
                        <h2 className="mb-2 text-xl font-bold dark:text-[#f04336]">
                          Henry Robinson
                        </h2>
                        <p className="mb-4 text-sm text-[#f04336] dark:text-blue-400">
                          Director
                        </p>
                        <p className="mb-4 text-sm text-gray-400 dark:text-gray-400">
                          Lorem ipsum dolor sit amet, consectetu incididunt ut
                          dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <div className="flex">
                          <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-[#f04336]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="w-6 h-6 bi bi-facebook "
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          </span>
                          <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-[#f04336]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="w-6 h-6 bi bi-twitter"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                          </span>
                          <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-[#f04336]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="w-6 h-6 bi bi-instagram"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row shadow-md shadow-[#0a4374] bg-gray-800"
                    href="#"
                  >
                    <div className="w-full overflow-hidden lg:w-2/4 h-80">
                      <Image
                        width={720}
                        height={720}
                        className="object-cover w-full h-full transition-all hover:scale-110"
                        src="https://i.postimg.cc/q7pv50zT/pexels-edmond-dant-s-4342352.jpg"
                        alt=""
                      />
                    </div>
                    <div className="relative flex self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12">
                      <div>
                        <h2 className="mb-2 text-xl font-bold dark:text-[#f04336]">
                          Henry Robinson
                        </h2>
                        <p className="mb-4 text-sm text-[#f04336] dark:text-blue-400">
                          Director
                        </p>
                        <p className="mb-4 text-sm text-gray-400 dark:text-gray-400">
                          Lorem ipsum dolor sit amet, consectetu incididunt ut
                          dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <div className="flex">
                          <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-[#f04336]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="w-6 h-6 bi bi-facebook "
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          </span>
                          <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-[#f04336]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="w-6 h-6 bi bi-twitter"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                          </span>
                          <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-[#f04336]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="w-6 h-6 bi bi-instagram"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
