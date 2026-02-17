import React, { useState, useContext } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.webp"
import cart_icon from "../../assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const [isOpen, setIsOpen] = useState(false)
  const { getTotalCartItems } = useContext(ShopContext)

  const handleMenuClick = (name) => {
    setMenu(name)
    setIsOpen(false)
  }
  
  return (
    <div className='navbar'>
    
      <div className="nav-logo">
        <img src={logo} alt="logo" height="40" />
        <p><Link to="/">Shopify</Link></p>
      </div>


      <div className="nav-hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

   
      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li onClick={() => handleMenuClick("home")}>
          <Link to="/">Home</Link>
          {menu === "home" && <hr />}
        </li>

        <li onClick={() => handleMenuClick("mens")}>
          <Link to="/mens">Men</Link>
          {menu === "mens" && <hr />}
        </li>

        <li onClick={() => handleMenuClick("womens")}>
          <Link to="/womens">Women</Link>
          {menu === "womens" && <hr />}
        </li>

        <li onClick={() => handleMenuClick("kids")}>
          <Link to="/kids">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart desktop-only">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/cart" className="cart-icon-container">
          <img src={cart_icon} alt="cart" height="40" />
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
