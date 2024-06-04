import PForm from "@/components/Forms/PForm";
import PSelectField from "@/components/Forms/PSelect";
import { statusOptions } from "@/constant/common";
import { useUpdateAdoptionRequestStatusMutation } from "@/redux/api/adoptionRequests/adoptionRequestApi";
import {
  useGetPetByIdQuery,
  useUpdatePetByIdMutation,
} from "@/redux/api/pet/petApi";
import {
  Box,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
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

export default function AdoptionStausModal({
  open,
  setOpen,
  selectedRow,
}: PetViewModalProps) {
  const handleClose = () => {
    setOpen(false);
  };

  //: Update Adoption Request Status
  const [updateAdoptionRequestStatus] =
    useUpdateAdoptionRequestStatusMutation();

  console.log("selectedRow", selectedRow);

  const handleAdoptionRequestStatus: SubmitHandler<FieldValues> = async (
    data
  ) => {
    const toastId = toast.loading("Updating Pet Info...");
    try {
      const updateStatusInfo = {
        id: selectedRow.id,
        updateInfo: data,
      };
      console.log("updateStatusInfo", updateStatusInfo);

      const response = await updateAdoptionRequestStatus(
        updateStatusInfo
      ).unwrap();
      toast.success(response?.message, { id: toastId, duration: 3000 });
      setOpen(false);
    } catch (error: any) {
      toast.error(error?.message, { id: toastId, duration: 3000 });
    }
  };

  return (
    <React.Fragment>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle fontWeight={600} textAlign={"center"}>Adoption Request Status</DialogTitle>
        <DialogContent>
          <PForm onSubmit={handleAdoptionRequestStatus}>
            <Box
              sx={{
                my: 2,
              }}
            >
              <PSelectField
                name="status"
                label="Status"
                options={statusOptions}
              />
            </Box>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Update</Button>
            </DialogActions>
          </PForm>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
