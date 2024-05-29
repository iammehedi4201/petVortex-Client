import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { TPet, TPetParams } from "@/types";
import { LocationOffRounded, LocationOn } from "@mui/icons-material";
import { Box, Divider } from "@mui/material";
import Image from "next/image";

const PetDetailsPage = async ({ params }: { params: TPetParams }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/pets/${params?.petId}`,
    {
      cache: "no-store",
    }
  );
  const { data: pet } = (await response.json()) as { data: TPet };

  return (
    <Box>
      <SectionHeader HeaderTitle="Pet Details" />
      <Box className="font-sans bg-white">
        <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
            <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
              <div className="px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                <Box
                  sx={{
                    "& img": {
                      width: "90%",
                      height: "30vh",
                      margin: "0 auto",
                      borderRadius: 2,
                    },
                  }}
                >
                  {" "}
                  <Image
                    src={pet?.PetImages[0]?.url}
                    width={500}
                    height={500}
                    alt="Product"
                  />
                </Box>
                <button type="button" className="absolute top-4 right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    fill="#ccc"
                    className="mr-1 hover:fill-[#333]"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-1 mx-auto">
                <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                  <Box
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "10vh",
                        margin: "0 auto",
                        borderRadius: 2,
                      },
                    }}
                  >
                    {" "}
                    <Image
                      src={pet?.PetImages[0]?.url}
                      width={500}
                      height={500}
                      alt="Product"
                    />
                  </Box>
                </div>
                <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                  <Box
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "10vh",
                        margin: "0 auto",
                        borderRadius: 2,
                      },
                    }}
                  >
                    {" "}
                    <Image
                      src={pet?.PetImages[0]?.url}
                      width={500}
                      height={500}
                      alt="Product"
                    />
                  </Box>
                </div>
                <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                  <Box
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "10vh",
                        margin: "0 auto",
                        borderRadius: 2,
                      },
                    }}
                  >
                    {" "}
                    <Image
                      src={pet?.PetImages[0]?.url}
                      width={500}
                      height={500}
                      alt="Product"
                    />
                  </Box>
                </div>
                <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                  <Box
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "10vh",
                        margin: "0 auto",
                        borderRadius: 2,
                      },
                    }}
                  >
                    {" "}
                    <Image
                      src={pet?.PetImages[0]?.url}
                      width={500}
                      height={500}
                      alt="Product"
                    />
                  </Box>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-[#f04336]">
                {pet?.name} | {pet?.species}
              </h2>
              <div className="flex flex-wrap gap-4 mt-4">
                <p
                  className="text-[#333] text-2xl font-bold"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <LocationOn
                    sx={{
                      color: "black",
                      fontSize: "1.8rem",
                    }}
                  />
                  {pet?.location}
                </p>
              </div>

              <div className="flex space-x-2 mt-4">
                <svg
                  className="w-5 fill-[#333]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-[#333]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-[#333]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-[#333]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <h4 className="text-[#333] text-base">500 Reviews</h4>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-bold text-gray-800">
                  Choose a Color
                </h3>
                <div className="flex flex-wrap gap-3 mt-4">
                  <button
                    type="button"
                    className="w-10 h-10 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                  <button
                    type="button"
                    className="w-10 h-10 bg-gray-300 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                  <button
                    type="button"
                    className="w-10 h-10 bg-gray-100 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                  <button
                    type="button"
                    className="w-10 h-10 bg-blue-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <button
                  type="button"
                  className="min-w-[400px] px-4 py-3 bg-[#f04336] hover:bg-[#111] text-white text-sm font-semibold rounded"
                >
                  Adopt Now
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
            <h3 className="text-lg font-bold text-[#333]">
              {pet?.name} information
            </h3>
            <ul className="mt-6 space-y-6 text-[#333]">
              <li className="text-sm">
                Species <span className="ml-4 float-right">{pet?.species}</span>
              </li>
              <Divider orientation="horizontal" sx={{}} />
              <li className="text-sm">
                Breed <span className="ml-4 float-right">{pet?.breed}</span>
              </li>
              <Divider orientation="horizontal" sx={{}} />
              <li className="text-sm">
                Age <span className="ml-4 float-right">{pet?.age}</span>
              </li>
              <Divider orientation="horizontal" sx={{}} />
              <li className="text-sm">
                Size <span className="ml-4 float-right">{pet?.size}</span>
              </li>
              <Divider orientation="horizontal" sx={{}} />
              <li className="text-sm">
                Gender <span className="ml-4 float-right">{pet?.gender}</span>
              </li>
              <Divider orientation="horizontal" sx={{}} />
              <li className="text-sm">
                Temperament{" "}
                <span className="ml-4 float-right">{pet?.temperament}</span>
              </li>
              <Divider orientation="horizontal" sx={{}} />
              <li className="text-sm">
                Health Status{" "}
                <span className="ml-4 float-right">{pet?.healthStatus}</span>
              </li>
              <Divider orientation="horizontal" sx={{}} />
              <li className="text-sm">
                speacialNeeds{" "}
                <span className="ml-4 float-right">{pet?.speacialNeeds}</span>
              </li>
              <Divider orientation="horizontal" sx={{}} />
              <li className="text-sm">
                Medical History{" "}
                <span className="ml-4 float-right">{pet?.medicalHistory}</span>
              </li>
              <Divider orientation="horizontal" sx={{}} />
              <li className="text-sm">
                Adoption Requirements{" "}
                <span className="ml-4 float-right">
                  {pet?.adoptionRequirements}
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
            <h3 className="text-lg font-bold text-[#333]">Reviews(10)</h3>
            <div className="grid md:grid-cols-2 gap-12 mt-6">
              <div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <p className="text-sm text-[#333] font-bold">5.0</p>
                    <svg
                      className="w-5 fill-[#333] ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-400 rounded w-full h-2 ml-3">
                      <div className="w-2/3 h-full rounded bg-[#333]"></div>
                    </div>
                    <p className="text-sm text-[#333] font-bold ml-3">66%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm text-[#333] font-bold">4.0</p>
                    <svg
                      className="w-5 fill-[#333] ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-400 rounded w-full h-2 ml-3">
                      <div className="w-1/3 h-full rounded bg-[#333]"></div>
                    </div>
                    <p className="text-sm text-[#333] font-bold ml-3">33%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm text-[#333] font-bold">3.0</p>
                    <svg
                      className="w-5 fill-[#333] ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-400 rounded w-full h-2 ml-3">
                      <div className="w-1/6 h-full rounded bg-[#333]"></div>
                    </div>
                    <p className="text-sm text-[#333] font-bold ml-3">16%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm text-[#333] font-bold">2.0</p>
                    <svg
                      className="w-5 fill-[#333] ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-400 rounded w-full h-2 ml-3">
                      <div className="w-1/12 h-full rounded bg-[#333]"></div>
                    </div>
                    <p className="text-sm text-[#333] font-bold ml-3">8%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm text-[#333] font-bold">1.0</p>
                    <svg
                      className="w-5 fill-[#333] ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-400 rounded w-full h-2 ml-3">
                      <div className="w-[6%] h-full rounded bg-[#333]"></div>
                    </div>
                    <p className="text-sm text-[#333] font-bold ml-3">6%</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start">
                  <img
                    src="https://readymadeui.com/team-2.webp"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <div className="ml-3">
                    <h4 className="text-sm font-bold text-[#333]">John Doe</h4>
                    <div className="flex space-x-1 mt-1">
                      <svg
                        className="w-4 fill-[#333]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#333]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#333]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <p className="text-xs !ml-2 font-semibold text-[#333]">
                        2 mins ago
                      </p>
                    </div>
                    <p className="text-sm mt-4 text-[#333]">
                      Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                      eiusmod tempor incidunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full mt-10 px-4 py-2.5 bg-transparent hover:bg-gray-50 border border-[#333] text-[#333] font-bold rounded"
                >
                  Read all reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default PetDetailsPage;
