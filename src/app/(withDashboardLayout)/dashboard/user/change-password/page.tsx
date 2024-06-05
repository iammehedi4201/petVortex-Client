"use client";
import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { useChangePasswordMutation } from "@/redux/api/auth/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const changePasswordValidationSchema = z.object({
  oldPassword: z.string().min(1, { message: "Old Password is required" }),
  newPassword: z.string().min(1, { message: "New Password is required" }),
  confirmPassword: z
    .string()
    .min(1, { message: "Confirm Password is required" }),
});

type DefaultValues = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const defaultValues: DefaultValues = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const ChangePasswordPage = () => {
  const [changePassword, { data }] = useChangePasswordMutation();
  const [disableValue, seDisable] = useState(true);
  const handleChangePassword: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Changing Password...");
    try {
      const response = await changePassword(data).unwrap();
      toast.success(response?.message, {
        id: toastId,
        duration: 3000,
      });
    } catch (error: any) {
      error?.data?.err?.name === "ZodError"
        ? toast.error(error?.data?.message, { id: toastId, duration: 3000 })
        : toast.error(error?.data?.errorDetails, {
            id: toastId,
            duration: 3000,
          });
    }
  };

  return (
    <Box>
      <SectionHeader HeaderTitle="Change Password" subTitle="Dashboard" />
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-10 ">
          <div className="w-[80%] p-6 bg-white rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] md:mt-0sm:p-8 ">
            <h2 className="mb-1 text-center text-xl font-extrabold leading-tight tracking-tight text-[#f04336] md:text-2xl ">
              Change Password
            </h2>
            <PForm
              onSubmit={handleChangePassword}
              defaultValues={defaultValues}
              resolver={zodResolver(changePasswordValidationSchema)}
              className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            >
              <div>
                <PInput
                  label="Old Password"
                  type="text"
                  name="oldPassword"
                  size="medium"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 "
                />
              </div>
              <div>
                <PInput
                  label="New Password"
                  type="text"
                  name="newPassword"
                  placeholder="••••••••"
                  size="medium"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                />
              </div>
              <div>
                <PInput
                  label="Confirm Password"
                  type="text"
                  name="confirmPassword"
                  placeholder="••••••••"
                  size="medium"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter"
                    aria-describedby="newsletter"
                    type="checkbox"
                    onChange={(e) => seDisable(!disableValue)}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-light text-gray-900 ">
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <Button disabled={disableValue} type="submit">
                Change passwod
              </Button>
            </PForm>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default ChangePasswordPage;
