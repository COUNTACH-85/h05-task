import Navbar from "../../components/navbar";
import HeaderRibbon from "../../components/header";
import HeroSection from "../../components/hero";
import BrandBar from "../../components/brandbar";
import Products from "../../components/products";
import TopProducts from "../../components/topselling";
import Browse from "../../components/browse";
export default function Home() {
  return (
    <>
      <HeaderRibbon />
      <Navbar />
      <HeroSection />
      <BrandBar />
      <Products />
      <TopProducts />
      <Browse />
    </>
  );
}
