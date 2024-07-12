import Hero from "../componants/Hero";
import FeaturedProducts from "../componants/FeaturedProducts";
import AboutUs from "../componants/AboutUs";
import Testimonials from "../componants/Testimonials";

const HomePage = () => {
  return (
    <div className="max-w-7xl m-auto">
      <Hero />
      <FeaturedProducts />
      <AboutUs />
      <Testimonials />
    </div>
  );
};

export default HomePage;
