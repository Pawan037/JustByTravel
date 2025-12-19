import Header from "@/component/Header";
import DestinationSection from "@/Pages/HomePage/DestinationSection/DestinationSection";
import HomeBannerSection from "@/Pages/HomePage/HomeBannerSection";
import SearchSection from "@/Pages/HomePage/SearchSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="ps-15 pe-15">


        <Header />
        {/* <SearchSection /> */}
        <HomeBannerSection />
        {/* <DestinationSection /> */}
      </section>
    </>

  )
}
