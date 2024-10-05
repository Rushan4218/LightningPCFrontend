import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaPhone, FaYoutube } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

const TopHeader: React.FC = () => {
  return (
    <div className="px-40 h-[3vh] bg-gray-950 text-white flex justify-between">
      <div className="flex items-center gap-2">
        <div className="flex items-center text-[12px] gap-[2px]">
          <FaPhone />
          9704347422
        </div>
        <div className="flex items-center text-[12px] gap-[2px]">
          <IoMdMail />
          rushanbuyorb@gmail.com
        </div> 
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Link to="https://www.facebook.com/rushan.buyo"><FaFacebookF /></Link>
        <Link to="https://www.instagram.com/rushan_buyo/"><FaInstagram /></Link>
        <Link to="https://www.youtube.com/@RushanBuyo"><FaYoutube /></Link>
        <Link to="https://www.linkedin.com/in/rushan-buyo-0a5221294/"><FaLinkedin /></Link>
      </div>
    </div>
  );
};

export { TopHeader };
