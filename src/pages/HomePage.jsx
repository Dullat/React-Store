import Hero from "../componants/Hero";
import FeaturedProducts from "../componants/FeaturedProducts";
import AboutUs from "../componants/AboutUs";
import Testimonials from "../componants/Testimonials";
import Footer from "../componants/Footer";

const HomePage = () => {
  return (
    <div className="max-w-screen-xl m-auto">
      <Hero />
      <FeaturedProducts />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
