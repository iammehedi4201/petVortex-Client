"use client";

import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import ChangeRoleModal from "@/components/Ui/ChangeRoleModal/ChangeRoleModal";
import ChangeUserStatus from "@/components/Ui/ChangeUserStatus/ChangeUserStatus";
import { useGetAllUsersQuery } from "@/redux/api/user/userApi";
import { EditNote } from "@mui/icons-material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Box, CircularProgress, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import React from "react";

const ManageUsersPage = () => {
  //: Get all pets
  const { data: users, isLoading: isUserLoading } = useGetAllUsersQuery("");

  console.log("users", users);

  //: Delete pet
  //   const [deletePet] = useDeleteUserMutation();

  //: Change Role Modal State
  const [roleModalOpen, setRoleModalOpen] = React.useState(false);

  //: Change User Status Modal State
  const [changeUserModalOpen, setChangeUserModalOpen] = React.useState(false);

  //: Selected row
  const [selectedRow, setSelectedRow] = React.useState<any>();

  if (isUserLoading) {
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

  const rowsData = users?.data?.map((user: any) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    contactNo: user.contactNo,
    role: user.role,
    status: user.status,
    photo: user?.profilePicture,
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
      headerName: "Phone",
      headerClassName: "bg-[#fd7c72] text-white text-lg font-extrabold",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      headerClassName: "bg-[#fd7c72] text-white text-lg font-extrabold",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
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
            <Tooltip title="Change User Status">
              <IconButton
                onClick={() => {
                  setChangeUserModalOpen(true);
                  setSelectedRow(row);
                }}
                aria-label="delete"
              >
                <ManageAccountsIcon
                  sx={{
                    color: "red",
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
                  }}
                />
              </IconButton>
            </Tooltip>

            <Tooltip title="Change role">
              <IconButton
                onClick={() => {
                  setRoleModalOpen(true);
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

  if (isUserLoading) {
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
      <ChangeUserStatus
        selectedRow={selectedRow}
        changeUserModalOpen={changeUserModalOpen}
        setChangeUserModalOpen={setChangeUserModalOpen}
      />
      <ChangeRoleModal
        selectedRow={selectedRow}
        roleModalOpen={roleModalOpen}
        setRoleModalOpen={setRoleModalOpen}
      />
      <SectionHeader HeaderTitle="Manage Users" subTitle="Dashboard" />
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

export default ManageUsersPage;
