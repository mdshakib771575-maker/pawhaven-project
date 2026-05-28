import Banner from "@/components/Banner";
import SuccessStories from "@/components/SuccessStories";
import TopCard from "@/components/TopCard";
import WhyAdoptPets from "@/components/WhyAdoptPets";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TopCard></TopCard>
      <SuccessStories></SuccessStories>
      <WhyAdoptPets></WhyAdoptPets>
    </div>
  );
}
