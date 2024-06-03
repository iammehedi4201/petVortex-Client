"use client";

import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";
import { loginUser } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button } from "@mui/material";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Login Validation Schema
const loginValidationSchema = z.object({
  email: z.string({ message: "userName or email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

interface DefaultValues {
  email: string;
  password: string;
}

// Default Values
const defaultValues: DefaultValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  let text = "Not have an account?";
  const router = useRouter();

  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Logging in...");
    const userInfo = {
      userName: data?.email,
      email: data?.email,
      password: data?.password,
    };
    console.log("userInfo", userInfo);

    const response = await loginUser(userInfo);
    console.log("response", response);

    if (response?.success) {
      storeUserInfo(response?.data?.token);
      toast.success(response?.message, { id: toastId, duration: 3000 });
      router.push("/");
    } else {
      toast.error(response?.message, { id: toastId, duration: 3000 });
    }
    try {
    } catch (error: any) {
      toast.error(error?.errorDetails, { id: toastId, duration: 3000 });
    }
  };

  return (
    <Box>
      <div className="font-[sans-serif] text-[#333]">
        <div
          className={`text-center bg-gradient-to-r from-blue-800 to-blue-400 min-h-[300px] sm:p-6 p-4 flex items-center justify-center`}
        >
          <h4 className="sm:text-4xl text-2xl  text-white font-extrabold">
            Login to your account
          </h4>
        </div>
        <div className="mx-4 mb-4 -mt-16">
          <PForm
            onSubmit={handleLogin}
            resolver={zodResolver(loginValidationSchema)}
            defaultValues={defaultValues}
            className="max-w-4xl mx-auto bg-white shadow-[0_2px_18px_-3px_rgba(6,81,237,0.4)] sm:p-8 p-4 rounded-md"
          >
            <div className="grid md:grid-cols-2 md:gap-12 gap-7">
              <button
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "http://localhost:3000/",
                  })
                }
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
                  x="0px"
                  y="0px"
                  width="35px"
                  height="35px"
                  viewBox="0 0 72 72"
                  fill="#fff"
                >
                  <path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z"></path>
                </svg>
                Continue with Github
              </button>
            </div>
            <div className="my-7 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 text-center">Or</p>
            </div>
            <div className="grid md:grid-cols-2 gap-y-7 gap-x-12">
              <PInput
                name="email"
                fullWidth={true}
                label="Email*"
                placeholder="Enter Your Email"
              />
              <PInput
                name="password"
                fullWidth={true}
                label="Password*"
                placeholder="Enter Your Password"
                type="password"
              />
            </div>
            <Box className="flex items-center justify-between gap-2 mt-5">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-3 block text-sm">Remember me</label>
              </div>
              <div className="text-sm">
                <a
                  href="jajvascript:void(0);"
                  className="text-blue-600 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
            </Box>
            <Box className="!mt-10">
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#3c79e6",
                }}
              >
                LogIn
              </Button>
            </Box>
            <p className="text-sm mt-6 text-center">
              {text}{" "}
              <Link
                href="/register"
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Register Now
              </Link>
            </p>
          </PForm>
        </div>
      </div>
    </Box>
  );
};

export default LoginPage;
