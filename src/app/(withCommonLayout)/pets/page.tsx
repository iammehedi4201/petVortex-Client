"use client";

import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import PetCard from "@/components/Ui/PetsPage/PetCard/PetCard";
import SideFilterSection from "@/components/Ui/PetsPage/SideFilterSection/SideFilterSection";
import TopFilterSection from "@/components/Ui/PetsPage/TopFilterSection/TopFilterSection";
import { useGetAllPetsQuery } from "@/redux/api/pet/petApi";
import { TPet } from "@/types";
import { Box } from "@mui/material";
import Image from "next/image";

const Pets = () => {
  const { data: pets, isLoading: isPetLoading } = useGetAllPetsQuery("");

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
    <Box>
      <SectionHeader HeaderTitle="Pets" />
      <Box
        className="px-8 bg-gray-50 font-poppins"
        style={{
          backgroundImage:
            "url('https://themebeyond.com/pre/petco-prev/petco-live/img/bg/adoption_shop_bg.jpg')",
          backgroundRepeat: "repeat",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <div className="px-4 py-4 mx-auto max-w-full lg:py-6 md:px-6">
          <div className="flex flex-wrap mb-24 -mx-3">
            {/* side filter feature */}
            <SideFilterSection />
            <div className="w-full px-3 lg:w-3/4">
              {/* top filter feature */}
              <TopFilterSection />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-8">
                {/* {products?.data.map((item: TProduct) => (
                    <Product key={item._id} {...item}></Product>
                  ))} */}
                {pets?.data.map((pet: TPet) => (
                  <PetCard key={pet.id} pet={pet} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Pets;
