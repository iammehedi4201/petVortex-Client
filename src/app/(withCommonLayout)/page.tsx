import BrandSection from "@/components/Ui/HomePage/BrandSection/BrandSection";
import BreederSection from "@/components/Ui/HomePage/BreederSection/BreederSection";
import FAQSection from "@/components/Ui/HomePage/FAQSection/FAQSection";
import FeaturedPets from "@/components/Ui/HomePage/FeaturedPet/FeaturedPets";
import FindSection from "@/components/Ui/HomePage/FindSection/FindSection";
import HeroSection from "@/components/Ui/HomePage/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FindSection />
      <BreederSection />
      <FeaturedPets />
      <FAQSection />
      <BrandSection />
    </>
  );
}
