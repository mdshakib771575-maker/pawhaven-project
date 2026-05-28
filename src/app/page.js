import Banner from "@/components/Banner";
import PetCareTips from "@/components/PetCareTips";
import SuccessStories from "@/components/SuccessStories";
import TopCard from "@/components/TopCard";
import WhyAdoptPets from "@/components/WhyAdoptPets";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TopCard></TopCard>
      <PetCareTips></PetCareTips>
      <SuccessStories></SuccessStories>
      <WhyAdoptPets></WhyAdoptPets>
    </div>
  );
}
