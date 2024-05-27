"use client";
import { SearchRounded } from "@mui/icons-material";
import { Box, Grid, TextField } from "@mui/material";

const TopFilterSection = () => {
  return (
    <Box my={2} px={3}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
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
              bottom: "38.5%",
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
