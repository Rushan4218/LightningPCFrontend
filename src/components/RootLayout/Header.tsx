import React from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Header: React.FC = () => {
  return (
  <header className="sticky top-0 h-[10vh] bg-gradient-to-r from-primary-900 to-primary-800 flex items-center justify-between px-60 shadow-lg shadow-neutral-700">
      <Link to="/">
        <img src={logo} className="h-14 object-cover" />
      </Link>
      <div className="text-neutral-100 flex gap-5">
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/custom">Custom</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/contactus">Contact Us</NavLink>
      </div>
      <div className="text-neutral-100 flex items-center text-lg gap-4">
        <FaSearch />
        <FaUser />
        <FaShoppingCart />
      </div>
    </header>
  );
};

export { Header };
