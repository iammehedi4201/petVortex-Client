"use client";
import { addFilter, setSearchTerm } from "@/redux/api/pet/petSlice";
import { useAppDispatch } from "@/redux/hook";
import { SearchRounded } from "@mui/icons-material";
import { Box, Grid, TextField } from "@mui/material";

const TopFilterSection = () => {
  const dispatch = useAppDispatch();

  return (
    <Box my={2} px={3}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            id="outlined-basic"
            label="Search Pet"
            variant="outlined"
            type="search"
            fullWidth
            sx={{
              position: "relative",
            }}
          />

          <SearchRounded
            sx={{
              position: "absolute",
              right: "5%",
              bottom: "41%",
              fontSize: 30,
              color: "#f04336",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopFilterSection;
