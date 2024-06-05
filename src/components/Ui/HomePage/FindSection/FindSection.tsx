"use client";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import PetsIcon from "@mui/icons-material/Pets";
import {
  Box,
  Container,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";

import OutlinedInput from "@mui/material/OutlinedInput";
import { Theme } from "@mui/material/styles";
import * as React from "react";

// Usage

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const FindSection = () => {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Container>
        <Stack
          width="80%"
          direction="row"
          borderRadius={15}
          justifyContent={"center"}
          alignContent={"center"}
          sx={{
            borderRadius: "20px",
            position: {
              sm: "none",
              xl: "absolute",
            },
            top: "93%",
            zIndex: 5,
          }}
        >
          <Box
            sx={{
              flex: 1,
              fontSize: "16px",
              fontWeight: 600,
              color: "#fff",
              padding: "64px 45px 64px 50px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#0a303a",
              borderRadius: "20px 0px 0px 20px",
            }}
          >
            <FindInPageIcon sx={{ fontSize: "40px", marginRight: "6px" }} />
            <TextField
              sx={{
                backgroundColor: "#0a303a",
                borderRadius: "5px",
                fontWeight: 600,
                color: "#fff",
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent", // Change this to your desired color
                  },
                },
                "& .MuiInputBase-input": {
                  color: "#fff", // This will make the text color white
                  "&::placeholder": {
                    fontSize: "18px",
                    color: "#fff", // This will make the placeholder color white
                    opacity: 1, // Ensure the opacity is set to 1 to make the color fully opaque
                    fontWeight: "800",
                  },
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "transparent", // Change this to your desired color
                },
                "& .MuiInputLabel-root": {
                  color: "#fff", // This will make the placeholder color white
                },
              }}
              type="search"
              variant="outlined"
              size="medium"
              fullWidth={true}
              placeholder="Search for a Pet..."
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#f04336",
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PetsIcon sx={{ fontSize: "40px", color: "#fff" }} />
            <Typography
              variant="h6"
              component={Link}
              href="/pets"
              color={"white"}
              fontWeight={600}
              sx={{ cursor: "pointer" }}
            >
              Find Your Dog
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,

              backgroundColor: "#f04336",
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PetsIcon sx={{ fontSize: "40px", color: "#fff" }} />
            <Typography
              variant="h6"
              component={Link}
              href="/pets"
              color={"white"}
              fontWeight={600}
              sx={{ cursor: "pointer" }}
            >
              Find Your Bird
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#f04336",
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PetsIcon sx={{ fontSize: "40px", color: "#fff" }} />
            <Typography
              variant="h6"
              component={Link}
              href="/"
              color={"white"}
              fontWeight={600}
              sx={{ cursor: "pointer" }}
            >
              Find Your Cat
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#0a303a",
              borderRadius: "0px 20px 20px 0px",
            }}
          >
            <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
              <Select
                sx={{ color: "#fff", fontSize: "24px", fontWeight: 600 }}
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <Typography variant="h6" component={"p"}>
                        Pet Type
                      </Typography>
                    );
                  }

                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default FindSection;
