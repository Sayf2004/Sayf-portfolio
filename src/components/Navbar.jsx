import "./navbar.css";
import { useRef } from "react";

function Navbar() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo">
        <div className="text">
          <h2 className="logoText">Sayf Ketata</h2>
        </div>
      </div>

      {/* Links */}
      <div className="links">
        <span className="linksText">Home</span>
        <span className="linksText" onClick={handleClick}>
          About
        </span>
        <button className="linksButton">Contact</button>
      </div>
    </div>
  );
}

export default Navbar;
