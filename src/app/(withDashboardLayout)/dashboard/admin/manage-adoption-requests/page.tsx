"use client";

import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import AdoptionStausModal from "@/components/Ui/AdoptionStatusModal/AdoptionStatusModal";
import {
  useGetAdoptionRequestsQuery,
  useUpdateAdoptionRequestStatusMutation,
} from "@/redux/api/adoptionRequests/adoptionRequestApi";
import { EditNote } from "@mui/icons-material";
import { Box, CircularProgress, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import React from "react";

const ManageAdoptionRequests = () => {
  //: Get all pets
  const { data: adoptionRequests, isLoading: isAdoptionRequestsLoading } =
    useGetAdoptionRequestsQuery("");

  //: Delete pet
  const [updateAdoptionRequestStatus] =
    useUpdateAdoptionRequestStatusMutation();

  //: Modal open state
  const [open, setOpen] = React.useState(false);
  //: Selected row
  const [selectedRow, setSelectedRow] = React.useState<any>();

  const rowsData = adoptionRequests?.data?.map((adoptRequest: any) => ({
    id: adoptRequest?.id,
    name: adoptRequest?.user.name,
    email: adoptRequest?.user.email,
    contactNo: adoptRequest?.user.contactNo,
    petName: adoptRequest?.pet?.name,
    photo: adoptRequest?.pet?.PetImages[0].url,
    status: adoptRequest?.status,
    date: new Date(adoptRequest?.createdAt)?.toLocaleDateString(),
  }));

  const columns: GridColDef[] = [
    {
      field: "photo",
      headerName: "Photo",
      flex: 1,
      headerClassName: "bg-[#fd7c72] text-white text-lg font-extrabold",
      renderCell: ({ row }) => (
        <Image
          src={row?.photo}
          alt="pet image"
          height={80}
          width={80}
          className="rounded"
        />
      ),
    },
    {
      field: "petName",
      headerName: "Pet Name",
      headerClassName: "bg-[#fd7c72] text-white text-lg font-extrabold",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      headerClassName: "bg-[#fd7c72] text-white text-lg font-extrabold",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      headerClassName: "bg-[#fd7c72] text-white text-lg font-extrabold",
      flex: 1,
    },
    {
      field: "contactNo",
      headerName: "contactNo",
      headerClassName: "bg-[#fd7c72] text-white text-lg font-extrabold",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      headerClassName:
        "bg-[#fd7c72] text-white text-lg font-extrabold  text-green-500",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      headerClassName: "bg-[#fd7c72] text-white text-lg font-extrabold",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      headerClassName: "bg-[#fd7c72] text-white text-lg font-extrabold",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <Tooltip title="Update Status">
              <IconButton
                onClick={() => {
                  setOpen(true);
                  setSelectedRow(row);
                }}
                aria-label="update"
              >
                <EditNote
                  sx={{
                    color: "red",
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        );
      },
    },
  ];

  if (isAdoptionRequestsLoading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <AdoptionStausModal
        selectedRow={selectedRow}
        open={open}
        setOpen={setOpen}
      />
      <SectionHeader
        HeaderTitle="Manage Adoption Requests"
        subTitle="Dashboard"
      />
      <Box my={10}>
        <Box sx={{ minHeight: "100vh", width: "100%" }}>
          <DataGrid
            rows={rowsData}
            columns={columns}
            rowHeight={100}
            sx={{
              "& .MuiDataGrid-row": {
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
                "& .MuiDataGrid-cell": {
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "bold",
                },
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default ManageAdoptionRequests;
