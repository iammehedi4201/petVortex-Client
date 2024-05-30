"use client";

import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import {
  useCreateAdoptionRequestMutation,
  useGetAdoptionRequestsQuery,
} from "@/redux/api/adoptionRequests/adoptionRequestApi";
import { useGetPetByIdQuery } from "@/redux/api/pet/petApi";
import { useGetMyProfileQuery } from "@/redux/api/user/userApi";
import { Box, Button, Container } from "@mui/material";
import Image from "next/image";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
  params: {
    petId: string;
  };
};

const AdoptionRequestPage = ({ params }: TParams) => {
  //: Get pet by id
  const { data: pet, isLoading } = useGetPetByIdQuery(params?.petId);

  //: Get my profile
  const { data: myProfile } = useGetMyProfileQuery("");

  //: Create adoption request
  const [createAdoptionRequest] = useCreateAdoptionRequestMutation();

  const { data } = useGetAdoptionRequestsQuery("");
  console.log("Adoption Requests", data);
  

  const defaultValues = {
    firstName: myProfile?.data?.name,
    lastName: myProfile?.data?.name,
    email: myProfile?.data?.email,
    contactNo: myProfile?.data?.contactNo,
    address: "",
    city: "",
    state: "",
    zipCode: "",
  };

  const handleAdoptionRequest: SubmitHandler<FieldValues> = async (data) => {
    // const toastId = toast.loading("Sending Request...");
    try {
      const adoptionRequestData = {
        petId: params?.petId,
        address: data?.address,
        city: data?.city,
        state: data?.state,
        zipCode: data?.zipCode,
      };
      const response = await createAdoptionRequest(
        adoptionRequestData
      ).unwrap();

      console.log("Adoption Request", response);
    } catch (error: any) {
      toast.error("Failed to send request");
    }
  };

  return (
    <Box>
      <SectionHeader HeaderTitle="Adoption-Request" />
      <Container
        sx={{
          padding: 5,
        }}
      >
        <div className="font-sans bg-white">
          <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-6 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
              <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                <div className="px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                  <Box
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "30vh",
                        margin: "0 auto",
                        borderRadius: 2,
                      },
                    }}
                  >
                    {" "}
                    <Image
                      src={pet?.data?.PetImages[0]?.url}
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

                <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
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
                        src={pet?.data?.PetImages[1]?.url}
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
                        src={pet?.data?.PetImages[0]?.url}
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
                        src={pet?.data?.PetImages[1]?.url}
                        width={500}
                        height={500}
                        alt="Product"
                      />
                    </Box>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="max-w-2xl mx-auto w-full h-max rounded-md p-4 sticky top-0">
                  <h2 className="text-2xl font-extrabold text-gray-800 text-center">
                    Adoption Request For{" "}
                    <span className="text-white bg-[#f04336] px-2 rounded-sm">
                      {pet?.data?.name}
                    </span>
                  </h2>
                  <PForm
                    onSubmit={handleAdoptionRequest}
                    defaultValues={defaultValues}
                    className="mt-8"
                  >
                    <div>
                      <h3 className="text-base font-semibold text-gray-800 mb-4">
                        Personal Details
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="relative flex items-center">
                          <PInput
                            label="First Name"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            sx={{
                              width: "100%",
                            }}
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#bbb"
                            stroke="#bbb"
                            className="w-[18px] h-[18px] absolute right-4"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              cx="10"
                              cy="7"
                              r="6"
                              data-original="#000000"
                            ></circle>
                            <path
                              d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                              data-original="#000000"
                            ></path>
                          </svg>
                        </div>

                        <div className="relative flex items-center">
                          <PInput
                            label="Last Name"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            sx={{
                              width: "100%",
                            }}
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#bbb"
                            stroke="#bbb"
                            className="w-[18px] h-[18px] absolute right-4"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              cx="10"
                              cy="7"
                              r="6"
                              data-original="#000000"
                            ></circle>
                            <path
                              d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                              data-original="#000000"
                            ></path>
                          </svg>
                        </div>

                        <div className="relative flex items-center">
                          <PInput
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            sx={{
                              width: "100%",
                            }}
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#bbb"
                            stroke="#bbb"
                            className="w-[18px] h-[18px] absolute right-4"
                            viewBox="0 0 682.667 682.667"
                          >
                            <defs>
                              <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                <path
                                  d="M0 512h512V0H0Z"
                                  data-original="#000000"
                                ></path>
                              </clipPath>
                            </defs>
                            <g
                              clip-path="url(#a)"
                              transform="matrix(1.33 0 0 -1.33 0 682.667)"
                            >
                              <path
                                fill="none"
                                stroke-miterlimit="10"
                                stroke-width="40"
                                d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                data-original="#000000"
                              ></path>
                              <path
                                d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                data-original="#000000"
                              ></path>
                            </g>
                          </svg>
                        </div>

                        <div className="relative flex items-center">
                          <PInput
                            label="Contact No."
                            name="contactNo"
                            type="text"
                            placeholder="Phone No."
                            sx={{
                              width: "100%",
                            }}
                          />
                          <svg
                            fill="#bbb"
                            className="w-[18px] h-[18px] absolute right-4"
                            viewBox="0 0 64 64"
                          >
                            <path
                              d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                              data-original="#000000"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-base font-semibold text-gray-800 mb-4">
                        Shipping Address
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <PInput
                          label="Address Line"
                          name="address"
                          type="text"
                          placeholder="Address Line"
                          sx={{
                            width: "100%",
                          }}
                        />
                        <PInput
                          label="City"
                          name="city"
                          type="text"
                          placeholder="City"
                          sx={{
                            width: "100%",
                          }}
                        />
                        <PInput
                          label="State"
                          name="state"
                          type="text"
                          placeholder="State"
                          sx={{
                            width: "100%",
                          }}
                        />
                        <PInput
                          label="Zip Code"
                          name="zipCode"
                          type="text"
                          placeholder="Zip Code"
                          sx={{
                            width: "100%",
                          }}
                        />
                      </div>

                      <div className="flex gap-4 max-md:flex-col mt-8">
                        <Button
                          type="submit"
                          className="rounded-md px-4 py-3 w-full text-sm font-semibold bg-gray-800 text-white hover:bg-gray-900"
                        >
                          Send Request
                        </Button>
                      </div>
                    </div>
                  </PForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default AdoptionRequestPage;
