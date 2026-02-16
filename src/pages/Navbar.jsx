import { Link } from "react-router-dom";
import { useState } from "react";
import "../Navbar.css"; // We'll create this CSS file
import image3 from "../assets/image3.jpg"; // Add this line to import the new image 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Image */}
      <div className="logo-container">
        <Link to="/">
          <img src={image3} alt="Eco Sensus Consulting Logo" className="image3-img" />
        </Link>
      </div>

      {/* Menu Button */}
      <div className="menu">
        <button className="menu-btn" onClick={toggleDropdown}>
          Menu &#9662; {/* small downward arrow */}
        </button>

        {isOpen && (
          <div className="dropdown">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/careers" onClick={() => setIsOpen(false)}>Careers</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;