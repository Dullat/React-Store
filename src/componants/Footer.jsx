import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-700 p-4 text-white mt-auto">
      <div className="flex gap-8 h-[50px] items-center">
        <FaFacebook className="fill-white text-2xl" aria-label="Facebook" />
        <FaInstagram className="fill-white text-3xl" aria-label="Instagram" />
        <FaYoutube className="fill-white text-3xl" aria-label="YouTube" />
      </div>
      <p className="mt-4 font-semibold opacity-70">Imp Links:</p>
      <div className="flex gap-12 mt-2">
        <ul className="flex flex-col gap-2">
          <li key="contact-us">
            <NavLink to="/contact-us">Contact-Us</NavLink>
          </li>
          <li key="github">
            <NavLink to="/github">Github</NavLink>
          </li>
          <li key="linkedin">
            <NavLink to="/linkedin">Linked.in</NavLink>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li key="terms-of-service">
            <NavLink to="/terms-of-service">Terms of service</NavLink>
          </li>
          <li key="privacy-policy">
            <NavLink to="/privacy-policy">Privacy policy</NavLink>
          </li>
          <li key="refund-policy">
            <NavLink to="/refund-policy">Refund policy</NavLink>
          </li>
        </ul>
      </div>
      <hr className="my-4" />
      <p className="opacity-70">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ullam dicta
        quae corrupti aut eum aliquam minima natus dolorem dolores veniam,
        excepturi, eos sint voluptates non beatae accusamus expedita sunt.
      </p>
    </footer>
  );
};

export default Footer;
