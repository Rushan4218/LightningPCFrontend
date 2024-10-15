import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IoIosClose } from "react-icons/io";
import { setMenuFalse } from "../redux/menuSlice";
import logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { LuPointer } from "react-icons/lu";

const Menu: React.FC = () => {
  const showMenu = useSelector((state: RootState) => state.menu.value);
  const dispatch = useDispatch();
  return (
    <AnimatePresence>
      {showMenu && (
          <motion.div
            className={`absolute top-0 left-0 text-neutral-200 flex flex-col gap-8 bg-neutral-900 p-8 w-screen h-screen`}
            initial={{ translateX: "100%" }}
            animate={{ translateX: "0%" }}
            exit={{ translateX: "100%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <IoIosClose
              onClick={() => dispatch(setMenuFalse())}
              className="text-[3rem] self-end hover:cursor-pointer active:scale-90 duration-300"
            />
            <Link to="/" onClick={() => dispatch(setMenuFalse())} className="self-center">
              <img className="h-20" src={logo} alt="LOGO" />
            </Link>
            <div className="flex flex-col gap-8 text-2xl items-center">
              <NavLink
                to="/products"
                onClick={() => dispatch(setMenuFalse())}
                className="relative"
              >
                Products
              </NavLink>
              <NavLink
                to="/custom"
                onClick={() => dispatch(setMenuFalse())}
                className="relative"
              >
                Custom
              </NavLink>
              <NavLink
                to="/aboutus"
                onClick={() => dispatch(setMenuFalse())}
                className="relative"
              >
                About Us
              </NavLink>
              <NavLink
                to="/contactus"
                onClick={() => dispatch(setMenuFalse())}
                className="relative"
              >
                Contact Us
              </NavLink>
            </div>
            <div className="my-auto self-center text-2xl flex flex-col items-center gap-8">
              <Link className="flex items-center justify-center gap-2" to="/cart" onClick={() => dispatch(setMenuFalse())}>
              <span>Cart</span> <FaShoppingCart />
              </Link>
              <Link className="flex items-center justify-center gap-2" to="/login" onClick={() => dispatch(setMenuFalse())}>
              <span>Log In</span> <MdLogin />
              </Link>
              <Link className="flex items-center justify-center gap-2" to="/register" onClick={() => dispatch(setMenuFalse())}> 
              <span>Register</span> <LuPointer />
              </Link>
              
            </div>
          </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Menu };
