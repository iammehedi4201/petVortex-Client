import { TPet } from "@/types";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const PetCard = ({ pet }: { pet: TPet }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          "& img": {
            width: "90%",
            height: "30vh",
            margin: "0 auto",
            borderRadius: 2,
          },
        }}
      >
        <Image
          src={pet?.PetImages[0]?.url}
          width={500}
          height={200}
          alt="pet_1"
        />
      </Box>
      <Box
        sx={{
          width: "90%",
          mx: "auto",
          backgroundColor: "white",
          p: 2,
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Typography
          textAlign={"center"}
          variant="h6"
          component={"h1"}
          fontWeight={600}
          color={"primary.main"}
        >
          {pet?.name}
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography>Age : {pet.age}</Typography>
          <Typography>Breed : {pet.breed}</Typography>
        </Stack>
        <Divider orientation="horizontal" sx={{ my: 2 }} />
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography>Location : {pet?.location}</Typography>
          <Typography>{pet.description}</Typography>
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Button
            LinkComponent={Link}
            href={`/pets/${pet?.id}`}
            fullWidth
            sx={{
              "&:hover": {
                backgroundColor: "black",
              },
            }}
          >
            See Details
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PetCard;
