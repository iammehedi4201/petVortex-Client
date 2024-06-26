"use client";

import PetCard from "@/components/Ui/PetsPage/PetCard/PetCard";
import { useGetAllPetsQuery } from "@/redux/api/pet/petApi";
import { useAppSelector } from "@/redux/hook";
import { TPet } from "@/types";
import { Box, Pagination, Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const PetsSection = () => {
  const filtervalue = useAppSelector((state) => state.pet.filter);
  const searchTermValue = useAppSelector((state) => state.pet.searchTerm);
  const [page, setPage] = useState(1);
  const { data: pets, isLoading: isPetLoading } = useGetAllPetsQuery([
    ...filtervalue,
    {
      name: "searchTerm",
      value: searchTermValue,
    },
    {
      name: "page",
      value: page,
    },
    {
      name: "limit",
      value: 10,
    },
  ]);

  if (isPetLoading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Box>
          <Image
            src="https://themebeyond.com/pre/petco-prev/petco-live/img/preloader.gif"
            width={400}
            height={400}
            alt="dog_Loader"
          />
        </Box>
      </div>
    );
  }

  return (
    <>
      {pets?.data?.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-8">
          {pets?.data.map((pet: TPet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      ) : (
        <div className="w-full px-16 md:px-0 h-screen flex items-center justify-center">
          <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
            <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-[#f04336]">
              404
            </p>
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
              Pet Not Found
            </p>
            <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">
              Sorry, the Pet you are looking for could not be found.
            </p>
          </div>
        </div>
      )}
      <Stack spacing={2} mt={4} justifyContent={"center"} alignItems={"center"}>
        <Pagination
          count={pets?.meta?.total}
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={(event: React.ChangeEvent<unknown>, value: number) =>
            setPage(value)
          }
        />
      </Stack>
    </>
  );
};

export default PetsSection;
