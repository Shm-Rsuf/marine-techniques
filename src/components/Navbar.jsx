import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  useGsapLeftToRightStagger,
  useGsapRightToLeftStagger,
  useGsapDownStager,
} from "../hooks/gsap";

const Navbar = () => {
  const li11 = useRef(null);
  const li12 = useRef(null);
  const li13 = useRef(null);

  const li21 = useRef(null);
  const li22 = useRef(null);
  const li23 = useRef(null);
  const logoRef = useRef(null);

  const liOneArr = [li12, li11, li13];
  const liTwoArr = [li22, li21, li23];
  const logoArr = [logoRef];

  useGsapLeftToRightStagger(liOneArr, 1.75);
  useGsapRightToLeftStagger(liTwoArr, 2.2);
  useGsapDownStager(logoArr, 1);

  return (
    <nav className="navbar wrapper">
      <ul className="links-one">
        <li ref={li11}>
          <Link to="/">Home</Link>
        </li>
        <li ref={li12}>
          <Link to="/about">About</Link>
        </li>
        <li ref={li13}>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
      <div className="logo" ref={logoRef}>
        <Link>
          <img
            src="https://marine-technics.com/wp-content/uploads/logo_marine.png"
            alt=""
          />
        </Link>
      </div>
      <ul className="links-two">
        <li ref={li21}>
          <Link to="/service">Service</Link>
        </li>
        <li ref={li22}>
          <Link to="/contact">Contact</Link>
        </li>
        <li ref={li23}>
          <Link to="/help">Help</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
