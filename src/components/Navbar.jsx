import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar ">
      <ul className="links-one">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
      <div className="logo">
        <Link>
          <img
            src="https://marine-technics.com/wp-content/uploads/logo_marine.png"
            alt=""
          />
        </Link>
      </div>
      <ul className="links-two">
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
