import {
  Slider,
  Categories,
  Products,
  FeaturedProducts,
} from "../../components";

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <FeaturedProducts type="Featured" />
      <Products />
      <FeaturedProducts type="Trending" />
    </>
  );
};

export default Home;
