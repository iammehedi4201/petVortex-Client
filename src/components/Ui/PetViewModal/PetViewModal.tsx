import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";
import PSelectField from "@/components/Forms/PSelect";
import Loader from "@/components/Shared/Loader/Loader";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { genderOptions } from "@/constant/common";
import {
  petHealthStatus,
  petSizeOptions,
  petTemperamentOptions,
} from "@/constant/pet";
import {
  useGetPetByIdQuery,
  useUpdatePetByIdMutation,
} from "@/redux/api/pet/petApi";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type PetViewModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedRow: any;
};

export default function PetViewModal({
  open,
  setOpen,
  selectedRow,
}: PetViewModalProps) {
  const handleClose = () => {
    setOpen(false);
  };

  //: Get Pet By Id
  const {
    data: pet,
    isLoading,
    isSuccess,
    isFetching,
  } = useGetPetByIdQuery(selectedRow?.id as string);

  //: update pet info handler
  const [updatePetInfo, { isLoading: isUpdatePetInfoLoading }] =
    useUpdatePetByIdMutation();

  console.log("selectedRow", pet);

  //: Default Values
  const defaultValues = {
    name: pet?.data?.name,
    species: pet?.data?.species,
    breed: pet?.data?.breed,
    gender: pet?.data?.gender,
    age: pet?.data?.age,
    location: pet?.data?.location,
    size: pet?.data?.size,
    description: pet?.data?.description,
    temperament: pet?.data?.temperament,
    medicalHistory: pet?.data?.medicalHistory,
    adoptionRequirements: pet?.data?.adoptionRequirements,
    speacialNeeds: pet?.data?.speacialNeeds,
    healthStatus: pet?.data?.healthStatus,
  };

  console.log("defaultValues", defaultValues);

  const handleUpdatePetInfo: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating Pet Info...");
    try {
      const updatedInfo = {
        id: selectedRow?.id,
        petInfo: {
          ...data,
          age: Number(data.age),
        },
      };
      //: Update Pet Info
      const response = await updatePetInfo(updatedInfo).unwrap();
      toast.success(response?.message, { id: toastId, duration: 3000 });
      setOpen(false);
    } catch (error: any) {
      toast.error(error?.message, { id: toastId, duration: 3000 });
    }
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box>
          <SectionHeader
            HeaderTitle="Update Pet Info"
            subTitle={`Dashboard/${selectedRow?.id}`}
          />
          <div className="font-[sans-serif] text-[#333] my-10">
            <div className="mx-4 mb-4">
              <PForm
                onSubmit={handleUpdatePetInfo}
                defaultValues={defaultValues}
                className="max-w-6xl mx-auto bg-white shadow-[0_2px_18px_-3px_rgba(6,81,237,0.4)] sm:p-8 p-4 rounded-md"
              >
                <div className="grid md:grid-cols-2 gap-y-7 gap-x-10">
                  <PInput
                    name="name"
                    fullWidth={true}
                    label="Pet Name*"
                    type="text"
                  />
                  <PInput
                    name="species"
                    fullWidth={true}
                    label="Species*"
                    type="text"
                  />
                  <PInput
                    name="breed"
                    fullWidth={true}
                    label="Breed*"
                    type="text"
                  />
                  <PInput
                    name="age"
                    fullWidth={true}
                    label="Age*"
                    type="text"
                  />
                  <PSelectField
                    name="size"
                    fullWidth={true}
                    label="Size*"
                    options={petSizeOptions}
                  />
                  <PSelectField
                    name="gender"
                    fullWidth={true}
                    label="Gender*"
                    options={genderOptions}
                  />
                  <PInput
                    name="location"
                    fullWidth={true}
                    label="Location*"
                    type="text"
                  />
                  <PSelectField
                    name="temperament"
                    fullWidth={true}
                    label="Temperament*"
                    options={petTemperamentOptions}
                  />
                  <PSelectField
                    name="healthStatus"
                    fullWidth={true}
                    label="Health Status*"
                    options={petHealthStatus}
                  />
                  <PInput
                    name="speacialNeeds"
                    fullWidth={true}
                    label="Speacial Needs*"
                    type="text"
                  />
                  <PInput
                    name="medicalHistory"
                    fullWidth={true}
                    label="MedicalHistory*"
                    type="text"
                  />
                  <PInput
                    name="adoptionRequirements"
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
                    name="description"
                    fullWidth={true}
                    label="Description*"
                    type="text"
                    size="medium"
                  />
                </Box>
                <Box className="!mt-10">
                  <Button
                    type="submit"
                    sx={{
                      backgroundColor: "#f04336",
                    }}
                  >
                    Update Pet Info
                  </Button>
                </Box>
              </PForm>
            </div>
          </div>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
