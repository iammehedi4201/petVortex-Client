"use client";
import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";
import { useChangePasswordMutation } from "@/redux/api/auth/authApi";
import { Button } from "@mui/material";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const ChangePasswordPage = () => {
  const [changePassword, { data }] = useChangePasswordMutation();
  const [disableValue, seDisable] = useState(true);
  const handleChangePassword: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Changing Password...");
    try {
      console.log("password data", data);

      const response = await changePassword(data).unwrap();
      toast.success(response?.message, {
        id: toastId,
        duration: 3000,
      });
    } catch (error: any) {
      toast.error(error.message, { id: toastId, duration: 3000 });
    }
  };

  return (
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-4xl font-semibold text-[#f04336]"
        >
          PetVortex
        </a>
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-3xl  dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Change Password
          </h2>
          <PForm
            onSubmit={handleChangePassword}
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
  );
};

export default ChangePasswordPage;
