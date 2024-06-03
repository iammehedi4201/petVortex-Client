"use client";
import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";
import PSelectField from "@/components/Forms/PSelect";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { genderOptions } from "@/constant/common";
import {
  petHealthStatus,
  petSizeOptions,
  petTemperamentOptions,
} from "@/constant/pet";
import { useAddPetMutation } from "@/redux/api/pet/petApi";
import { uploadImgToIMGBB } from "@/utils/uploadImgToIMGBB";
import { Box, Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

//: Default Values
export const defaultValues = {
  pet: {
    name: "Tommy Hill",
    species: "dog",
    breed: "german shepan",
    age: "15",
    location: "Dhaka",
    speacialNeeds: "no need",
    medicalHistory: "good ",
    adoptionRequirements: "no need",
    description: "no need",
  },
};

const AddPetPage = () => {
  //: router
  const router = useRouter();

  //: add pet mutation
  const [addPet] = useAddPetMutation();

  //:File state
  const [files, setFiles] = useState<any>([]);

  //: Handle Register
  const handleAddPet: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Addingg Pet...");
    try {
      const { imgUrls } = await uploadImgToIMGBB(files);
      const petInfo = {
        pet: {
          ...data.pet,
          age: Number(data.pet.age),
        },
        images: imgUrls,
      };
      console.log("petInfo", petInfo);
      //: Add Pet
      const response = await addPet(petInfo).unwrap();
      //: Check if response is successful

      toast.error(response?.message, { id: toastId, duration: 3000 });
    } catch (error: any) {
      toast.error(error?.message, { id: toastId, duration: 3000 });
    }
  };

  return (
    <Box>
      <SectionHeader HeaderTitle="Add Pet" subTitle="Dashboard" />
      <div className="font-[sans-serif] text-[#333] my-10">
        <div className="mx-4 mb-4">
          <PForm
            onSubmit={handleAddPet}
            defaultValues={defaultValues}
            className="max-w-6xl mx-auto bg-white shadow-[0_2px_18px_-3px_rgba(6,81,237,0.4)] sm:p-8 p-4 rounded-md"
          >
            <div className="grid md:grid-cols-2 gap-y-7 gap-x-10">
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
              <PSelectField
                name="pet.gender"
                fullWidth={true}
                label="Gender*"
                options={genderOptions}
              />
              <PInput
                name="pet.location"
                fullWidth={true}
                label="Location*"
                type="text"
              />
              <PSelectField
                name="pet.temperament"
                fullWidth={true}
                label="Temperament*"
                options={petTemperamentOptions}
              />
              <PSelectField
                name="pet.healthStatus"
                fullWidth={true}
                label="Health Status*"
                options={petHealthStatus}
              />
              <PInput
                name="pet.speacialNeeds"
                fullWidth={true}
                label="Speacial Needs*"
                type="text"
              />
              <PInput
                name="pet.medicalHistory"
                fullWidth={true}
                label="MedicalHistory*"
                type="text"
              />
              <PInput
                name="pet.adoptionRequirements"
                fullWidth={true}
                label="Adoption Requirements*"
                type="text"
              />
            </div>
            <Box
              sx={{
                my: 3,
              }}
            >
              <PInput
                name="pet.description"
                fullWidth={true}
                label="Description*"
                type="text"
                size="medium"
              />
            </Box>
            <Box
              sx={{
                width: "100%",
              }}
            >
              {/* <PHFileUploader
                name="profilePicture"
                label="Upload Profile Pic"
                sx={{
                  backgroundColor: "#3c79e6",
                  width: "100%",
                  my: 3,
                }}
              /> */}
              <input
                onChange={(e) => setFiles(e.target.files)}
                type="file"
                multiple
                placeholder="Upload Image"
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

export default AddPetPage;
