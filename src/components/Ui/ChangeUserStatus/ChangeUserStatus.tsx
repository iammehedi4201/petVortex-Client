import PForm from "@/components/Forms/PForm";
import PSelectField from "@/components/Forms/PSelect";
import { userStatusOptions } from "@/constant/common";
import { useChangeUserStatusMutation } from "@/redux/api/user/userApi";
import { Box, DialogActions, DialogContent, DialogTitle } from "@mui/material";
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
  changeUserModalOpen: boolean;
  setChangeUserModalOpen: (open: boolean) => void;
  selectedRow: any;
};

export default function ChangeUserStatus({
  changeUserModalOpen: open,
  setChangeUserModalOpen: setOpen,
  selectedRow,
}: PetViewModalProps) {
  const handleClose = () => {
    setOpen(false);
  };

  //: Update Adoption Request Status
  const [changeUserStatus] = useChangeUserStatusMutation();

  const handleDelete: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Changing user status...");
    try {
      const updateStatusInfo = {
        id: selectedRow.id,
        updateStatusInfo: data,
      };
      console.log("updateStatusInfo", updateStatusInfo);

      const response = await changeUserStatus(updateStatusInfo).unwrap();
      toast.success(response?.message, { id: toastId, duration: 3000 });
      setOpen(false);
    } catch (error: any) {
      toast.error(error?.message, { id: toastId, duration: 3000 });
    }
  };

  return (
    <React.Fragment>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle fontWeight={600} textAlign={"center"}>
          Change User Status
        </DialogTitle>
        <DialogContent>
          <PForm onSubmit={handleDelete}>
            <Box
              sx={{
                my: 2,
              }}
            >
              <PSelectField
                name="status"
                label="Status"
                options={userStatusOptions}
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
