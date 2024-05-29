"use client";

import PHFileUploader from "@/components/Forms/PFileUploader";
import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";
import { Box, Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const img_hosting_token = process.env.NEXT_PUBLIC_IMAGE_UPLOAD_TOKEN;

console.log(img_hosting_token);

const RegisterPage = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const handleRegister: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Registering...");
    try {
      console.log("data", data.profilePicture[0]);

      const formData = new FormData();
      formData.append("image", data.profilePicture);
      const response = await axios.post(img_hosting_url, formData);
      console.log("response", response);

      if (response?.data?.success) {
        const userInfo = {
          ...data,
          profilePicture: response?.data?.data?.url,
        };

      }
    } catch (error: any) {
        toast.error()
    }

    console.log(data);
  };

  return (
    <Box>
      <div className="font-[sans-serif] text-[#333]">
        <div
          className={`text-center bg-gradient-to-r from-blue-800 to-blue-400 min-h-[300px] sm:p-6 p-4 flex items-center justify-center`}
        >
          <h4 className="sm:text-4xl text-2xl  text-white font-extrabold">
            Create your free account
          </h4>
        </div>
        <div className="mx-4 mb-4 -mt-16">
          <PForm
            onSubmit={handleRegister}
            className="max-w-4xl mx-auto bg-white shadow-[0_2px_18px_-3px_rgba(6,81,237,0.4)] sm:p-8 p-4 rounded-md"
          >
            <div className="grid md:grid-cols-2 md:gap-12 gap-7">
              <button
                type="button"
                className="w-full px-4 py-3 flex items-center justify-center rounded-md text-[#333] text-base tracking-wider font-semibold border-none outline-none bg-gray-100 hover:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22px"
                  fill="#fff"
                  className="inline shrink-0 mr-4"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fbbd00"
                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                    data-original="#fbbd00"
                  />
                  <path
                    fill="#0f9d58"
                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                    data-original="#0f9d58"
                  />
                  <path
                    fill="#31aa52"
                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                    data-original="#31aa52"
                  />
                  <path
                    fill="#3c79e6"
                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                    data-original="#3c79e6"
                  />
                  <path
                    fill="#cf2d48"
                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                    data-original="#cf2d48"
                  />
                  <path
                    fill="#eb4132"
                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                    data-original="#eb4132"
                  />
                </svg>
                Continue with Google
              </button>
              <button
                type="button"
                className="w-full px-4 py-3 flex items-center justify-center rounded-md text-white text-base tracking-wider font-semibold border-none outline-none bg-black hover:bg-[#333]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22px"
                  fill="#fff"
                  className="inline shrink-0 mr-4"
                  viewBox="0 0 22.773 22.773"
                >
                  <path
                    d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                    data-original="#000000"
                  />
                </svg>
                Continue with Apple
              </button>
            </div>
            <div className="my-7 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 text-center">Or</p>
            </div>
            <div className="grid md:grid-cols-2 gap-y-7 gap-x-12">
              <PInput
                name="name"
                fullWidth={true}
                label="Name*"
                placeholder="Enter Your Name"
                type="text"
              />
              <PInput
                name="contactNo"
                fullWidth={true}
                label="Contact No*"
                placeholder="Enter Your Contact No"
                type="tel"
              />
              <PInput
                name="userName"
                fullWidth={true}
                label="userName*"
                placeholder="Enter Your user name"
                type="tel"
              />
              <PInput
                name="email"
                fullWidth={true}
                label="Email*"
                placeholder="Enter Your Email"
                type="email"
              />
              <PInput
                name="password"
                fullWidth={true}
                label="Password*"
                placeholder="Enter Your Password"
                type="password"
              />
              <PInput
                name="confirmPassword"
                fullWidth={true}
                label="Confirm Password*"
                placeholder="Enter Your Confirm Password"
                type="password"
              />
            </div>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <PHFileUploader
                name="profilePicture"
                label="Upload Profile Pic"
                sx={{
                  backgroundColor: "#3c79e6",
                  width: "100%",
                  my: 3,
                }}
              />
            </Box>
            <Box className="!mt-10">
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#3c79e6",
                }}
              >
                Sign up
              </Button>
            </Box>
            <p className="text-sm mt-6 text-center">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Login here
              </Link>
            </p>
          </PForm>
        </div>
      </div>
    </Box>
  );
};

export default RegisterPage;
