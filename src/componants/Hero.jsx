import { Link } from "react-router-dom";
import mikyu from "../assets/MIYKU.gif";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 p-4 max-w-screen-xl m-auto mt-8  gap-4">
      <div className="flex flex-col gap-3 justify-center order-first sm:order-last mt-4">
        <h2 className="text-3xl font-semibold">Welcome Bruh</h2>
        <p>Discover wide range of products. Find what you need</p>
        <Link
          to="/products"
          className="bg-blue-600 p-2 px-4 w-fit rounded-md mt-8 text-white cursor-pointer dark:bg-white dark:text-black"
        >
          Visit Products
        </Link>
      </div>
      <div
        className="bg-slate-500 aspect-[5/3] rounded-2xl bg-center bg-cover"
        style={{ backgroundImage: `url(${mikyu})` }}
      ></div>
    </div>
  );
};

export default Hero;
