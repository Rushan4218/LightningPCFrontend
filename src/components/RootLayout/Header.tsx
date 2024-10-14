import React from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { IoMenu } from "react-icons/io5";

const Header: React.FC = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return <>{isLargeScreen ? <LargeHeader /> : <SmallHeader />}</>;
};

const LargeHeader: React.FC = () => {
  return (
    <header className="sticky top-0 h-[100px] bg-neutral-1000 flex items-center justify-between 2xl:px-60 xl:px-48 lg:px-40 md:px-20 shadow-md">
      <Link to="/">
        <img src={logo} className="h-14 object-cover" />
      </Link>
      <div className="text-neutral-100 flex gap-5 ">
        <NavLink to="/products" className="underline-effect relative">Products</NavLink>
        <NavLink to="/custom" className="underline-effect relative">Custom</NavLink>
        <NavLink to="/aboutus" className="underline-effect relative">About Us</NavLink>
        <NavLink to="/contactus" className="underline-effect relative">Contact Us</NavLink>
      </div>
      <div className="text-neutral-100 flex items-center text-lg gap-4">
        <FaSearch />
        <FaUser />
        <FaShoppingCart />
      </div>
    </header>
  );
};

const SmallHeader: React.FC = () => {
  return (
    <header className="sticky top-0 h-[80px] bg-neutral-1000 flex items-center justify-between px-10 sm:px-20 shadow-md">
      <Link to="/">
        <img src={logo} className="h-12 md:h-14 object-cover" />
      </Link>
      <IoMenu className="text-3xl text-neutral-100 active:scale-90 duration-300" />
    </header>
  );
};

export { Header };
