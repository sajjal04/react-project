import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="nav-link">HOME</Link>
      <Link to="/About" className="nav-link">ABOUT US</Link>
      <Link to="/Contact" className="nav-link">CONTACT US</Link>
      <Link to="/Blogs" className="nav-link">BLOGS</Link>
      <Link to="/Faq" className="nav-link">FAQS</Link>
      <Link to="/Outlets" className="nav-link">OUR OUTLETS</Link>
    </nav>
  )
}

export default NavBar
