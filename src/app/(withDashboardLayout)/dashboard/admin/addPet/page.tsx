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
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Ensure these are tuples
const petSizeValues = ["small", "medium", "large"] as const;
const genderValues = ["MALE", "FEMALE"] as const;
const temperamentValues = [
  "AFFECTIONATE",
  "ENERGETIC",
  "PLAYFUL",
  "CALM",
  "INDEPENDENT",
  "LOYAL",
  "GENTLE",
  "CURIOUS",
  "SHY",
  "ALERT",
] as const;
const healthStatusValues = ["VACCINATED", "SPAYED", "NEUTERED"] as const;

const addPetValidationSchema = z.object({
  pet: z.object({
    name: z.string().min(1, { message: "Name is required" }),
    species: z.string().min(1, { message: "Species is required" }),
    breed: z.string().min(1, { message: "Breed is required" }),
    age: z.string().min(1, { message: "Age is required" }),
    location: z.string().min(1, { message: "Location is required" }),
    speacialNeeds: z.string().min(1, { message: "Special Needs is required" }),
    medicalHistory: z
      .string()
      .min(1, { message: "Medical History is required" }),
    adoptionRequirements: z
      .string()
      .min(1, { message: "Adoption Requirements is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    size: z.enum(petSizeValues, { required_error: "Size is required" }),
    gender: z.enum(genderValues, { required_error: "Gender is required" }),
    temperament: z.enum(temperamentValues, {
      required_error: "Temperament is required",
    }),
    healthStatus: z.enum(healthStatusValues, {
      required_error: "Health Status is required",
    }),
  }),
});

type Pet = {
  name: string;
  species: string;
  breed: string;
  age: string;
  location: string;
  speacialNeeds: string;
  medicalHistory: string;
  adoptionRequirements: string;
  description: string;
};

type DefaultValues = {
  pet: Pet;
};

//: Default Values
const defaultValues: DefaultValues = {
  pet: {
    name: "",
    species: "",
    breed: "",
    age: "",
    location: "",
    speacialNeeds: "",
    medicalHistory: " ",
    adoptionRequirements: "",
    description: "",
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
      <SectionHeader HeaderTitle="Add Pet" subTitle="Dashboard" />
      <div className="font-[sans-serif] text-[#333] my-10 ">
        <div className="mx-4 mb-4">
          <PForm
            onSubmit={handleAddPet}
            defaultValues={defaultValues}
            resolver={zodResolver(addPetValidationSchema)}
            className="max-w-7xl mx-auto bg-white sm:p-8 p-4 rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]"
          >
            <div className="grid md:grid-cols-2 gap-y-7 gap-x-10">
              <Box>
                <PInput
                  name="pet.name"
                  fullWidth={true}
                  label="Pet Name*"
                  type="text"
                />
              </Box>
              <Box>
                <PInput
                  name="pet.species"
                  fullWidth={true}
                  label="Species*"
                  type="text"
                />
              </Box>
              <Box>
                <PInput
                  name="pet.breed"
                  fullWidth={true}
                  label="Breed*"
                  type="text"
                />
              </Box>
              <Box>
                <PInput
                  name="pet.age"
                  fullWidth={true}
                  label="Age*"
                  type="text"
                />
              </Box>
              <Box>
                <PSelectField
                  name="pet.size"
                  fullWidth={true}
                  label="Size*"
                  options={petSizeOptions}
                />
              </Box>
              <Box>
                <PSelectField
                  name="pet.gender"
                  fullWidth={true}
                  label="Gender*"
                  options={genderOptions}
                />
              </Box>
              <Box>
                <PInput
                  name="pet.location"
                  fullWidth={true}
                  label="Location*"
                  type="text"
                />
              </Box>
              <Box>
                <PSelectField
                  name="pet.temperament"
                  fullWidth={true}
                  label="Temperament*"
                  options={petTemperamentOptions}
                />
              </Box>
              <Box>
                <PSelectField
                  name="pet.healthStatus"
                  fullWidth={true}
                  label="Health Status*"
                  options={petHealthStatus}
                />
              </Box>
              <Box>
                <PInput
                  name="pet.speacialNeeds"
                  fullWidth={true}
                  label="Speacial Needs*"
                  type="text"
                />
              </Box>
              <Box>
                <PInput
                  name="pet.medicalHistory"
                  fullWidth={true}
                  label="Medical History*"
                  type="text"
                />
              </Box>
              <Box>
                <PInput
                  name="pet.adoptionRequirements"
                  fullWidth={true}
                  label="Adoption Requirements*"
                  type="text"
                />
              </Box>
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
              <Tooltip title="Upload more then one photo">
                <input
                  onChange={(e) => setFiles(e.target.files)}
                  type="file"
                  multiple
                  placeholder="Upload Image"
                  name="images"
                />
              </Tooltip>
            </Box>
            <Box className="!mt-10">
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#f04336",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
                disabled={files.length === 0 ? true : false}
              >
                Add Pet
              </Button>
            </Box>
          </PForm>
        </div>
      </div>
    </Box>
  );
};

export default AddPetPage;
