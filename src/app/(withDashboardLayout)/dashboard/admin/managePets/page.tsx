"use client";

import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import PetViewModal from "@/components/Ui/PetViewModal/PetViewModal";
import {
  useDeletePetByIdMutation,
  useGetAllPetsQuery,
} from "@/redux/api/pet/petApi";
import { EditNote } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, CircularProgress, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

const ManagePetsPage = () => {
  //: Get all pets
  const { data: pets, isLoading } = useGetAllPetsQuery("");

  //: Delete pet
  const [deletePet] = useDeletePetByIdMutation();

  //: Modal open state
  const [open, setOpen] = React.useState(false);

  //: Selected row
  const [selectedRow, setSelectedRow] = React.useState<any>();

  //: Handle delete pet
  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting Pet...");
    try {
      await deletePet(id).unwrap();
      toast.success("Pet deleted successfully", {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      toast.error("Failed to delete pet", { id: toastId, duration: 2000 });
    }
  };

  const rowsData = pets?.data?.map((pet: any) => ({
    id: pet.id,
    name: pet.name,
    species: pet.species,
    breed: pet.breed,
    gender: pet.gender,
    age: pet.age,
    location: pet.location,
    photo: pet.PetImages[0].url,
    size: pet.size,
    description: pet.description,
    temperament: pet.temperament,
    medicalHistory: pet.medicalHistory,
    adoptionRequirements: pet.adoptionRequirements,
    specialNeeds: pet.speacialNeeds,
    healthStatus: pet.healthStatus,
  }));

  const columns: GridColDef[] = [
    {
      field: "photo",
      headerName: "Photo",
      flex: 1,
      headerClassName: "bg-[#f04336] text-white text-lg font-extrabold",
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
      field: "name",
      headerName: "Name",
      headerClassName: "bg-[#f04336] text-white text-lg font-extrabold",
      flex: 1,
    },
    {
      field: "species",
      headerName: "Species",
      headerClassName: "bg-[#f04336] text-white text-lg font-extrabold",
      flex: 1,
    },
    {
      field: "breed",
      headerName: "Breed",
      headerClassName: "bg-[#f04336] text-white text-lg font-extrabold",
      flex: 1,
    },
    {
      field: "location",
      headerName: "Location",
      headerClassName: "bg-[#f04336] text-white text-lg font-extrabold",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      headerClassName: "bg-[#f04336] text-white text-lg font-extrabold",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              onClick={() => handleDelete(row.id)}
              aria-label="delete"
            >
              <DeleteIcon
                sx={{
                  color: "red",
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
                }}
              />
            </IconButton>

            <Tooltip title="Update pet">
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
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        );
      },
    },
  ];

  if (isLoading) {
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
      <PetViewModal selectedRow={selectedRow} open={open} setOpen={setOpen} />
      <SectionHeader HeaderTitle="Manage Pets" subTitle="Dashboard" />
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

export default ManagePetsPage;
