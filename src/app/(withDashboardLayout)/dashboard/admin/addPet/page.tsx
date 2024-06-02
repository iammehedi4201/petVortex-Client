"use client";
import PHFileUploader from "@/components/Forms/PFileUploader";
import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";
import PSelectField from "@/components/Forms/PSelect";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { petSizeOptions } from "@/constant/pet";
import { useAddPetMutation } from "@/redux/api/pet/petApi";
import { Box, Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

//: Image Hosting Token
const img_hosting_token = process.env.NEXT_PUBLIC_IMAGE_UPLOAD_TOKEN;

//: Default Values
// export const defaultValues = {
//   name: "",
//   contactNo: "",
//   userName: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
//   profilePicture: "",
// };

const RegisterPage = () => {
  //: router
  const router = useRouter();

  //: add pet mutation
  const [addPet] = useAddPetMutation();

  //: Image Hosting URL
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  //: Handle Register
  const handleAddPet: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Registering...");
    try {
      const formData = new FormData();
      formData.append("image", data.profilePicture);
      const imgHostResponse = await axios.post(img_hosting_url, formData);
      console.log("response", imgHostResponse);

      if (imgHostResponse?.data?.success) {
        const petInfo = {
          name,
        };

        //: Register User
        const response = await addPet(petInfo);

        //: Check if response is successful
        // if (response?.success) {
        // } else {
        //   toast.error(response?.errorDetails, { id: toastId, duration: 3000 });
        // }
      }
    } catch (error: any) {
      toast.error(error?.errorDetails, { id: toastId, duration: 3000 });
    }
  };

  return (
    <Box>
      <SectionHeader HeaderTitle="Add Pet" subTitle="Dashboard" />
      <div className="font-[sans-serif] text-[#333] my-10">
        <div className="mx-4 mb-4">
          <PForm
            onSubmit={handleAddPet}
            className="max-w-6xl mx-auto bg-white shadow-[0_2px_18px_-3px_rgba(6,81,237,0.4)] sm:p-8 p-4 rounded-md"
          >
            <div className="grid md:grid-cols-2 gap-y-7 gap-x-12">
              <PInput
                name="pet.name"
                fullWidth={true}
                label="Pet Name*"
                type="text"
              />
              <PInput
                name="pet.species"
                fullWidth={true}
                label="Species*"
                type="text"
              />
              <PInput
                name="pet.breed"
                fullWidth={true}
                label="Breed*"
                type="text"
              />
              <PInput
                name="pet.age"
                fullWidth={true}
                label="Age*"
                type="text"
              />
              <PSelectField
                name="pet.size"
                fullWidth={true}
                label="Size*"
                options={petSizeOptions}
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

                  my: 3,
                }}
              />
            </Box>
            <Box className="!mt-10">
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#f04336",
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
