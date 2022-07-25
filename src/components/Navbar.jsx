import { useState } from "react";
import { FaBars, FaHome, FaQuestion } from "react-icons/fa";
import { Link } from "react-scroll";
import "./navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="mobile">
        <div className="logo">
          <h2 className="logoText">Sayf Ketata</h2>
        </div>
        <div className="btn">
          <span className="bars">
            <FaBars size={22} onClick={handleClick} />
          </span>
        </div>
      </div>
      {/* Links */}

      <div className={`links ${open ? "anim" : ""}`}>
        <span className="linksText">
          <Link to="about" spy={true} smooth={true}>
            <span className="icons">
              <FaQuestion />
            </span>
            About
          </Link>
        </span>
        <span className="linksText">
          <span className="icons">
            <FaHome />
          </span>
          Home
        </span>
        <button className="linksButton">Contact</button>
      </div>
    </div>
  );
}

export default Navbar;
