import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import PetCard from "@/components/Ui/PetsPage/PetCard/PetCard";
import SideFilterSection from "@/components/Ui/PetsPage/SideFilterSection/SideFilterSection";
import TopFilterSection from "@/components/Ui/PetsPage/TopFilterSection/TopFilterSection";
import { TPet } from "@/types";
import { Box } from "@mui/material";

async function getPets() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/pets`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

const Pets = async () => {
  const { data: pets } = await getPets();
  console.log("pets", pets);

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
                {pets.map((pet: TPet) => (
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
