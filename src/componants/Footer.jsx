import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-700 p-4 text-white mt-4">
      <div className="flex gap-8 h-[50px] items-center">
        <FaFacebook className="fill-white text-2xl" />
        <FaInstagram className="fill-white text-3xl" />
        <FaYoutube className="fill-white text-3xl" />
      </div>
      <p className="mt-4 font-semibold opacity-70">Imp Links:</p>
      <div className="flex gap-12 mt-2">
        <ul className="flex flex-col gap-2">
          <Link>Contact-Us</Link>
          <Link>Github</Link>
          <Link>Linked.in</Link>
        </ul>
        <ul className="flex flex-col gap-2">
          <Link>Terms of service</Link>
          <Link>Privacy policy</Link>
          <Link>Refund policy</Link>
        </ul>
      </div>
      <hr className="my-4" />
      <p className="oopacity-70 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ullam dicta
        quae corrupti aut eum aliquam minima natus dolorem dolores veniam,
        excepturi, eos sint voluptates non beatae accusamus expedita sunt.
      </p>
    </div>
  );
};

export default Footer;
