"use client";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { useGetAdoptionRequestBaseOnUserQuery } from "@/redux/api/adoptionRequests/adoptionRequestApi";
import { Box, CircularProgress, TablePagination } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#fd7c72",
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {},
  fontSize: 16,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  height: "80px",
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function MyAdoptionRequests() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { data: MyAdoptionRequests, isLoading: isAdoptionRequestsLoading } =
    useGetAdoptionRequestBaseOnUserQuery("");

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
      <SectionHeader HeaderTitle="My Adoption Requests" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Photo</StyledTableCell>
              <StyledTableCell align="left">Pet Name</StyledTableCell>
              <StyledTableCell align="left">Specis</StyledTableCell>
              <StyledTableCell align="left">Age</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="left">Adoption Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {MyAdoptionRequests?.data.map((adoptionRequest: any) => (
              <StyledTableRow key={adoptionRequest.name}>
                <StyledTableCell align="left">
                  <Box
                    sx={{
                      width: 100,
                      height: 70,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      "& img": {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      },
                    }}
                  >
                    <Image
                      src={adoptionRequest?.pet?.PetImages[0]?.url}
                      alt="pet"
                      width={100}
                      height={60}
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="left">
                  {adoptionRequest?.pet?.name}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {adoptionRequest?.pet?.species}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {adoptionRequest?.pet?.age}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {adoptionRequest?.status}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {new Date(adoptionRequest?.createdAt).toLocaleDateString()}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={() => {}}
        />
      </TableContainer>
    </>
  );
}
