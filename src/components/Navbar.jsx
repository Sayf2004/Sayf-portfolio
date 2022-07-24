import "./navbar.css";

function Navbar() {
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
        <span className="linksText">About</span>
        <button className="linksButton">Contact</button>
      </div>
    </div>
  );
}

export default Navbar;
