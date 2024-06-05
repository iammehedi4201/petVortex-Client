"use client";
import DirectionsIcon from "@mui/icons-material/Directions";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import { Box, Grid } from "@mui/material";
import { setSearchTerm } from "@/redux/api/pet/petSlice";
import { useDispatch } from "react-redux";

const TopFilterSection = () => {

  const dispatch = useDispatch();

  return (
    <Box my={2} px={3}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              border: "1px solid #f04336",
            }}
          >
            <InputBase
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Pets"
              inputProps={{ "aria-label": "search Pet " }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopFilterSection;
