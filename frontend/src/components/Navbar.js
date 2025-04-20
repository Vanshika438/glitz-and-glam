import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/GG.png";
import "../styles/Navbar.css";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <img src={logo} alt="Glitz & Glam" />
      </Link>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
        <NavLink to="/testimonials" onClick={closeMenu}>Testimonials</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        <NavLink to="/ourJourney" onClick={closeMenu}>Our Journey</NavLink>
        <Link to="/booking" className="book-btn" onClick={closeMenu}>Book Now</Link>
      </div>

      <div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        {menuOpen ? <X size={28} color="#d4af37" /> : <Menu size={28} color="#d4af37" />}
      </div>
    </nav>
  );
};

export default Navbar;
