import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaPhone, FaYoutube } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const TopHeader: React.FC = () => {
  const isVerySmall = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="px-10 sm:px-20 lg:px-40 h-[3vh] bg-gray-950 text-white flex justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center text-[12px] gap-[2px]">
          <FaPhone />
          {!isVerySmall && "9704347422"}
        </div>
        <div className="flex items-center text-[14px] gap-[2px]">
          <IoMdMail />
          {!isVerySmall && "rushanbuyorb@gmail.com"}
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Link to="https://www.facebook.com/rushan.buyo">
          <FaFacebookF />
        </Link>
        <Link to="https://www.instagram.com/rushan_buyo/">
          <FaInstagram />
        </Link>
        <Link to="https://www.youtube.com/@RushanBuyo">
          <FaYoutube />
        </Link>
        <Link to="https://www.linkedin.com/in/rushan-buyo-0a5221294/">
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export { TopHeader };
